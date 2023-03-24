import React from 'react'
import { FormInputLabel, GroupInput, Input } from  './form-input.styles'
function FormInput({ label, ...props }) {
    return (
        <GroupInput>
            <Input  {...props} />
            {
                label && <FormInputLabel
                shrink={props.value.length}
                >{label}</FormInputLabel>

            }
        </GroupInput>
    )
}

export default FormInput