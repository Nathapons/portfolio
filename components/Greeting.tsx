"use client"; 
import Typewriter from 'typewriter-effect'
import { Col, Row } from "antd";
import styled from "styled-components";


const CustomImage = styled.img`
    width: 300px;
    border-radius: 3.125rem;
    animation: fadeIn 2s ease-in-out;

    @keyframes fadeIn {
        0% {opacity: 0;}
        25% {opacity: 0.25;}
        50% {opacity: 0.5;}
        100% {opacity: 1;}
    }

    @media (min-width: 1050px) {
        display: content;
        width: 400px;
    }
`

const CustomRow = styled(Row)`
    align-items: center;
    justify-content: center;
    padding-top: 24px;
    padding-bottom: 24px;
    background-color: #34353a;
    color: white;
`

const CustomCol = styled(Col)`
    padding-left: 0px;
    padding-right: 0px;
    
    @media (max-width: 1050px) {
        text-align: center;
    }
`

const CustomImgCol = styled(Col)`
    padding-top: 20px;

    @media (max-width: 1050px) {
        text-align: center;
    }
`

const GreetingText = styled.h1`
    font-size: 24px;

    @media (min-width: 1050px) {
        font-size: 50px;
    }
`

const Greeting = () => {
    const names: string[] = [
        '<span>Software Developer</span>',
        '<span>Backend Developer</span>',
    ]
    const options = {
        strings: names,
        autoStart: true,
        loop: true
    }
    const img: string = "https://res.cloudinary.com/dizcg5fnc/image/upload/v1701619719/upload/kqc8rgleicctewcci0cv.jpg"

    return (
        <CustomRow style={{margin: 0}} gutter={(window.innerWidth > 1050)? [100, 0]: [0, 0]}>
            <CustomCol><CustomImage src={img} alt="profile-img" /></CustomCol>
            <CustomImgCol xl={12} xxl={12} lg={12} md={24} sm={24} xs={24} >
                <GreetingText>
                    I'm <span style={{color: '#ffcc00'}}>Nuthapon Sripornprasert</span>
                </GreetingText>
                <p style={{fontSize: '20px'}}><Typewriter options={options} /></p>
            </CustomImgCol>
        </CustomRow>
    )
}

export default Greeting