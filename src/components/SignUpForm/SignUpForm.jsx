import React, { useState } from 'react'
import { createAuthWithEmailAndPassword, createDocumentFromAuth } from '../../utils/firebase/firebase';
import './sign-up-form.styles.scss'
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
function SignUpForm() {
    const defaultFormField = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const [formField, setFormField] = useState(defaultFormField);
    const { displayName, email, password, confirmPassword } = formField
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value })
    }
    const resetFormField = () => {
        setFormField(defaultFormField)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('password not match');
            return;
        }
        try {
            const { user } = await createAuthWithEmailAndPassword(email, password);
            await createDocumentFromAuth(user, { displayName })
            resetFormField()
        } catch (error) {
            error.code === "auth/email-already-in-use" ? alert('user email is already') : console.log(error);
        }

    }
    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type='text' required name='displayName' onChange={handleOnChange} value={displayName} />


                <FormInput label="Email" type='email' name='email' required value={email} onChange={handleOnChange} />


                <FormInput label="Password" type="password" name='password' required value={password} onChange={handleOnChange} />


                <FormInput label="Confirm Password" type="password" name='confirmPassword' required value={confirmPassword} onChange={handleOnChange} />
                <Button children="Sign Up" type="submit" />
            </form>

        </div>
    )
}

export default SignUpForm