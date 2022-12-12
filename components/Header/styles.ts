import styled from "styled-components"
import Container from "../styled/Container"

export const HeaderWrapper = styled.header`
    padding: 0 60px;
    height: 80px;
    background: #fff;
    box-shadow: 0px 0px 3px 2px rgba(220,220,220,0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    ${Container} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .Actions {
            button {
                background: none;
                border: none;
                outline: none;
                cursor: pointer;
                color: ${({ theme }) => theme.colors.delete};
                font-size: 14px;
            }
        }
    }
`