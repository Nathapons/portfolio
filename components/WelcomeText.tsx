"use client"; 
import { Col, Row } from "antd";
import styled from "styled-components";

const WelcomeRow = styled(Row)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #a4a8a8;
    color:white;
    padding-left: 10px;
    padding-right: 10px;

    @media (min-width: 1050px) {
        padding-left: 10px;
        padding-right: 10px;
    }
`

const WelcomeText = () => {
    return (
        <WelcomeRow gutter={[100, 0]}>
            <Col span={24}><h2 style={{textAlign: "center"}}>About</h2></Col>
            <Col span={24}>
                <p style={{textAlign: 'center'}}>
                    I'm Nuthapon, a programmer with 4 of experience. 
                    Here, you'll find a curated collection of my best work, showcasing my passion and expertise in programming. 
                    Each project represents a blend of creativity, dedication, and problem-solving skills.
                </p>
            </Col>
        </WelcomeRow>
    )
}

export default WelcomeText;
