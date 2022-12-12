import styled from "styled-components"
import Button from "../../components/styled/Button"
import mixins, { hideScrollbar } from "../mixins"

export const DashboardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 60px 0px;
    
`

export const Box = styled.div`
    background: #fff;
    box-shadow: 0px 0px 3px 2px rgba(220,220,220,0.3);
    padding: 24px;
    border-radius: 12px;
    width: 765px;
    max-width: calc(100% - 30px);
    ${mixins.mobileLarge} {
        padding: 16px;
    }
    .InfoWrapper {
        margin-top: 24px;
        h3 {
            color: ${({ theme }) => theme.colors.gray};
            margin-bottom: 24px;
            strong {
                color: ${({ theme }) => theme.colors.purple};
                font-weight: 600;
                font-size: 24px;
            }
        }
        h4 {
            margin-bottom: 24px;
            ${mixins.mobileLarge} {
                margin-bottom: 12px;
            }
        }
        .DetailRow {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 8px;
            margin-bottom: 16px;
            background: ${({ theme }) => theme.colors.purple};
            padding: 16px;
            border-radius: 12px;
            position: relative;
            ${mixins.mobileLarge} {
                margin-bottom: 8px;
                padding: 10px;
                border-radius: 8px;
            }
            h5 {
                color: #fff;
                font-weight: 700;
                ${mixins.mobileLarge} {
                    font-size: 13px;
                }
            }
            div {
                color: #fff;
                opacity: 0.7;
                ${mixins.mobileLarge} {
                    font-size: 12px;
                }
            }
            button {
                position: absolute;
                right: 15px;
                top: 50%;
                transform: translateY(-50%);
                background: rgba(255,255,255,0.2);
                color: #fff;
                border: none;
                outline: none;
                border-radius: 4px;
                width: 50px;
                height: 30px;
                text-transform: capitalize;
                font-size: 12px;
                cursor: pointer;
                transition: all ease 0.3s;
                &:hover {
                    background: rgba(255,255,255,0.3);
                }
                span {
                    position: absolute;
                    pointer-events: none;
                    background: ${({ theme }) => theme.colors.purple};
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 4px;
                    padding: 3px 5px;
                    bottom: calc(100% + 5px);
                    left: 0;
                    opacity: 0;
                    box-shadow: 0px 0px 3px rgba(144,144,144,0.5);
                    transition: all ease 0.3s;
                    &.Copied {
                        opacity: 1;
                    }
                }
            }
        }
            
    }
    .Actions {
        margin-top: 24px;
        
    }
`