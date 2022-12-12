import styled from "styled-components"

export default styled.button`
    border: none;
    background: ${({theme})=>theme.colors.primary};
    color: #fff;
    text-transform: uppercase;
    border-radius: 6px;
    height: 35px;
    padding: 4px 16px;
    font-size: 12px;
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
    }
`