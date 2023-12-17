import { Image, Row } from "antd";

import styled from "styled-components";


export const CustomImage = styled(Image)`
    width: 500px;
    border-radius: 3.125rem;
    animation: fadeIn 2s ease-in-out;

    @keyframes fadeIn {
        0% {opacity: 0;}
        25% {opacity: 0.25;}
        50% {opacity: 0.5;}
        100% {opacity: 1;}
    }

    @media (max-width: 1050px) {
        display: flex;
        justify-content: center;
    }
`

export const GreetingBox = styled(Row)`
    justify-content: space-between;
    align-items: center;
    background-color: #f0f0f0;

    @media (max-width: 1050px) {
        padding-top: 20px;
        margin-bottom: 20px;
        justify-content: center;
    }
`

export const GreetingSubBox = styled.div`
    @media (max-width: 1050px) {
        text-align: center;
        justify-content: center;
    }
`

export const GreetingText = styled.h1`
    font-size: 40px;

    @media (max-width: 1050px) {
        font-size: 24px;
    }
`

export const PositionText = styled.h1`
    font-size: 2.5rem;
    color: rgb(1, 150, 1);
    font-style: italic;

    @media (max-width: 1050px) {
        font-size: 24px;
    }
`