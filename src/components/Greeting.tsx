import Typewriter from 'typewriter-effect'
import { Col, Image, Row } from "antd";
import styled from "styled-components";

import ContractLogo from './ContractLogo';

const CustomImage = styled(Image)`
    width: 300px;
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
const GreetingBox = styled(Row)`
    justify-content: space-between;
    align-items: center;
    background-color: #f0f0f0;
    

    @media (max-width: 1050px) {
        padding-top: 20px;
        margin-bottom: 20px;
        justify-content: center;
    }

    @media (min-width: 1050px) {
        padding: 24px 192px;
    }
`
const GreetingSubBox = styled.div`
    @media (max-width: 1050px) {
        text-align: center;
        justify-content: center;
    }
`
const GreetingText = styled.h1`
    font-size: 40px;

    @media (max-width: 1050px) {
        font-size: 24px;
    }
`
const PositionText = styled.h1`
    font-size: 2.5rem;
    color: rgb(1, 150, 1);
    font-style: italic;

    @media (max-width: 1050px) {
        font-size: 24px;
    }
`

const Greeting = () => {
    const names: string[] = [
        '<strong>GROWTH MINDSET</strong>',
        '<strong>LEANING PROGRAM</strong>',
        '<strong>SELF-MOTIVATION</strong>',
    ]
    const options = {
        strings: names,
        autoStart: true,
        loop: true
    }
    const img: string = "https://res.cloudinary.com/dizcg5fnc/image/upload/v1701619719/upload/kqc8rgleicctewcci0cv.jpg"
    

    return (
        <GreetingBox gutter={[30, 30]}>
            <Col><CustomImage src={img} preview={false} width={400}/></Col>
            <Col>
                <GreetingSubBox>
                    <GreetingText>Hi, I am Nuthapon Sripornprasert</GreetingText>
                    <PositionText>Software Engineering</PositionText>
                    <Typewriter options={options}/>
                    <ContractLogo />
                </GreetingSubBox>
            </Col>
        </GreetingBox>
    )
}

export default Greeting