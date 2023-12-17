import Typewriter from 'typewriter-effect'

import ContractLogo from './ContractLogo';

import '../styles/Greeting.css'
import { Col, Image, Row } from "antd";
import styled from "styled-components";


const CustomImage = styled(Image)`
    width: 500px;
    border-radius: 3.125rem;
    animation: fadeIn 2s ease-in-out;

    @keyframes fadeIn {
        0% {opacity: 0;}
        25% {opacity: 0.25;}
        50% {opacity: 0.5;}
        100% {opacity: 1;}
    }
`

const GreetingSubBox = styled.div`
    @media (max-width: 1050px) {
        text-align: center;
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
        <Row gutter={[30, 30]}>
            <Col><CustomImage width={300} src={img} preview={false} /></Col>
            <Col>
                <GreetingSubBox>
                    <GreetingText>Hi, I am Nuthapon Sripornprasert</GreetingText>
                    <PositionText>Software Engineering</PositionText>
                    <Typewriter options={options}/>
                    <ContractLogo />
                </GreetingSubBox>
            </Col>
        </Row>
    )
}

export default Greeting