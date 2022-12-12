import styled from "styled-components"

export const InputWrapper = styled.label`
    display: block;
    .Label {
        display: block;
        font-size: 14px;
        margin-bottom: 2px;
        color: ${({ theme }) => theme.colors.gray};
    }
    input {
        width: 100%;
        height: 44px;
        padding: 14px;
        border-radius: 5px;
        border: none;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);
        border: 1px solid rgb(209, 213, 219);
        outline: none;
        font-size: 16px;
        transition: all ease 0.2s;
        &:focus {
            border-color: ${({theme})=>theme.colors.purple};
            box-shadow: 0px 0px 0px 1px ${({theme})=>theme.colors.purple};
        }
    }
`