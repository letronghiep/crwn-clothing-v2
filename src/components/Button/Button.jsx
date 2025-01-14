import React from 'react'
import { BaseButton, GoogleSignIn, Inverted } from './Button.styles'
export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignIn,
    [BUTTON_TYPE_CLASSES.inverted]: Inverted
}[buttonType])

function Button({ children, buttonType, ...props }) {
    const CustomButton = getButton(buttonType)
    return (
        <CustomButton {...props}>
            {children}
        </CustomButton>
    )
}

export default Button