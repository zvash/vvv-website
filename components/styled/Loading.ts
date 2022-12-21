import styled, { keyframes } from "styled-components"

const swap = keyframes`
    0% {
        transform: translateX(-8px);
    }
    50% {
        transform: translateX(0px);
    }
    100% {
        transform: translateX(8px);
    }
`
const swapInverted = keyframes`
    0% {
        transform: translateX(8px);
    }
    50% {
        transform: translateX(0px);
    }
    100% {
        transform: translateX(-8px);
    }
`

export const Loading = styled.div`
    position: relative;
    width: 60px;
    height: 100%;
    &:before,
    &:after {
        content: "";
        display: block;
        width: 8px;
        height: 8px;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        left: calc(50% - 4px);
        top: calc(50% - 4px);
    }
    &:before {
        animation: ${swap} 1s ease infinite;
        transform: translateX(-8px);
    }
    &:after {
        transform: translateX(8px);
        animation: ${swapInverted} 1s ease infinite;
    }
`