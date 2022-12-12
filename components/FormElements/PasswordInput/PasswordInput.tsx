import React, { FC } from 'react'
import ErrorMessage from '../../styled/ErrorMessage'
import { PasswordInputWrapper } from './styles'

interface PasswordInputProps {
    value: string
    label?: string
    placeholder?: string
    changed: (value: string | number) => void
    blurred: () => void
    error: undefined | string | false
}

const PasswordInput: FC<PasswordInputProps> = ({ value, label = '', placeholder = '', changed, blurred,error }) => {
    return (
        <PasswordInputWrapper>
            {label ? <div className='Label'>{label}</div> : null}
            <input
                type="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => changed(e.target.value)}
                onBlur={blurred}
                value={value}
            />
            {error ? (<ErrorMessage>{error}</ErrorMessage>) : null}
        </PasswordInputWrapper>
    )
}

export default PasswordInput