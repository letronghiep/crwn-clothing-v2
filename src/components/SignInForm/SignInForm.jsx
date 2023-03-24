import React, { useState } from 'react'
import { signInAuthWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';
import FormInput from '../FormInput/FormInput'

import {ButtonContainer, SignInContainer} from './sign-in-form.styles'

function SignInForm() {
    const defaultFormField = {
        email: '',
        password: '',
    }

    const [formField, setFormField] = useState(defaultFormField);
    const { email, password } = formField
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value })
    }
    const resetFormField = () => {
        setFormField(defaultFormField)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInAuthWithEmailAndPassword(email, password)
            resetFormField()
        } catch (err) {
            switch (err.code) {
                case "auth/user-not-found":
                    alert("Email was wrong!");
                    break;
                case 'auth/wrong-password':
                    alert('Password is incorrect');
                    break;
                default:
                    console.log(err);

            }
        }
    }
    const signInWithPopup = async () => {
        await signInWithGooglePopup();
    }

    return (
        <SignInContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email password</span>
            <form onSubmit={handleSubmit}>


                <FormInput label="Email" type='email' name='email' required value={email} onChange={handleOnChange} />


                <FormInput label="Password" type="password" name='password' required value={password} onChange={handleOnChange} />


                <ButtonContainer>
                    <Button children="Sign In" type="submit" />
                    <Button type="button" onClick={signInWithPopup} buttonType={BUTTON_TYPE_CLASSES.google} children="Google Sign In" />

                </ButtonContainer>
            </form>

        </SignInContainer>
    )

}
export default SignInForm