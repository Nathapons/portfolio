import MyPic from "./MyPic";

import ContractLogo from './ContractLogo';
import MindSetTyping from './MindSetTyping';

import '../styles/Greeting.css'

const Greeting = () => {
    const name: string[] = [
        '<strong>GROWTH MINDSET</strong>',
        '<strong>LEANING PROGRAM</strong>',
        '<strong>SELF-MOTIVATION</strong>',
    ]
    const img: string = "https://res.cloudinary.com/dizcg5fnc/image/upload/v1701619719/upload/kqc8rgleicctewcci0cv.jpg"
    const classname :string = "my-profile"

    return (
        <div className="greeting-box">
            <MyPic img={img} classname={classname} />
            <div className="greeting-sub-box">
                <h1 className="greeting-text">Hi, I am Nuthapon Sripornprasert</h1>
                <h1 className="position-text">Software Engineering</h1>
                <MindSetTyping name={name} />
                <ContractLogo />
            </div>
        </div>
    )
}

export default Greeting