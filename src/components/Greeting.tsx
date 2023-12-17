import Typewriter from 'typewriter-effect'

import ContractLogo from './ContractLogo';

import '../styles/Greeting.css'
import { Col } from "antd";
import { CustomImage, GreetingBox, GreetingSubBox, GreetingText, PositionText } from '../styles/Greeting';


 

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
            <Col><CustomImage width={300} src={img} preview={false} /></Col>
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