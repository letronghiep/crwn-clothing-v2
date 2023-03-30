import React, { useState } from 'react'
import { SignUpContainer } from './sign-up-form.styles'
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../store/user/userAction';
function SignUpForm() {
    const dispatch = useDispatch()
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
            dispatch(signUpStart(email, password, displayName))
            resetFormField()
        } catch (error) {
            error.code === "auth/email-already-in-use" ? alert('user email is already') : console.log(error);
        }

    }
    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type='text' required name='displayName' onChange={handleOnChange} value={displayName} />


                <FormInput label="Email" type='email' name='email' required value={email} onChange={handleOnChange} />


                <FormInput label="Password" type="password" name='password' required value={password} onChange={handleOnChange} />


                <FormInput label="Confirm Password" type="password" name='confirmPassword' required value={confirmPassword} onChange={handleOnChange} />
                <Button children="Sign Up" type="submit" />
            </form>

        </SignUpContainer>
    )
}

export default SignUpForm