import React, { FC } from 'react'
import ErrorMessage from '../../styled/ErrorMessage'
import { InputWrapper } from './styles'

interface InputProps {
    value: string
    label?: string
    placeholder?: string
    changed: (value: string | number) => void
    blurred: () => void
    error: undefined | string | false
    numberOnly?: boolean
}

const Input: FC<InputProps> = ({ value, label = '', placeholder = '', changed, blurred, error, numberOnly = false }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (numberOnly) {
            const formattedValue = e.target.value.replace(/\D/g, '')
            return changed(formattedValue)
        }

        return changed(e.target.value)
    }
    return (
        <InputWrapper>
            {label ? <div className='Label'>{label}</div> : null}
            <input
                type="text"
                onChange={handleChange}
                onBlur={blurred}
                value={value}
            />
            {error ? (<ErrorMessage>{error}</ErrorMessage>) : null}
        </InputWrapper>
    )
}

export default Input