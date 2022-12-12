import styled from "styled-components"
import Button from "../../../components/styled/Button"
import mixins from "../../mixins"

export const LoginPageWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mixins.mobileLarge} {
        align-items: flex-start;
        padding-top: 40px;
    }
`

export const Box = styled.div`
    background: #fff;
    box-shadow: 0px 0px 3px 2px rgba(220,220,220,0.3);
    padding: 24px;
    border-radius: 12px;
    width: 400px;
    max-width: calc(100% - 30px);
    form {
        > :nth-child(1) {
            margin-bottom: 16px;
        }

        .ButtonsWrapper {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-top: 24px;
            .RegisterLink {
                color: ${({ theme }) => theme.colors.gray};
                margin-right: 12px;
                font-size: 14px;
            }
            ${Button} {
                width: 120px;
            }
        }
    }
`