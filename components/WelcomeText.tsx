"use client"; 
import { Col, Row } from "antd";
import styled from "styled-components";
import { Typography } from 'antd';

const WelcomeRow = styled(Row)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #a4a8a8;
    color: white;
    padding: 10px 15px;

    @media (min-width: 1050px) {
        padding-top: 50px;
        padding-bottom: 50px;
    }
`

const { Paragraph, Title } = Typography;

const WelcomeText = () => {
    return (
        <WelcomeRow gutter={[0, 10]}>
            <Col span={24}>
                <Title level={3} style={{ margin: 0, textAlign: 'center' }} underline={true}>About</Title>
            </Col>
            <Col span={24}>
                <Paragraph>
                    I&apos;m Nuthapon, a programmer with 4 of experience. 
                    Here, you&apos;ll find a curated collection of my best work, showcasing my passion and expertise in programming. 
                    Each project represents a blend of creativity, dedication, and problem-solving skills.
                </Paragraph>
            </Col>
        </WelcomeRow>
    )
}

export default WelcomeText;
