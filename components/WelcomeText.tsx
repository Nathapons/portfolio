import { Col, Row } from "antd";
import styled from "styled-components";
import { Typography } from 'antd';
import { useEffect, useState } from "react";

const WelcomeRow = styled(Row)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #31323a;
    color: white;
    padding: 10px 15px;

    @media (min-width: 1050px) {
        padding-top: 20px;
        padding-bottom: 20px;
    }
`

const { Paragraph, Title } = Typography;

const CustomParagraph = styled(Paragraph)`
    color: white;

    @media (min-width: 1050px) {
        width: 70%;
        margin: 0 auto;
        font-size: 22px;
    }
`

const WelcomeText = () => {
    const [isComp, setIsComp] = useState(true);

    useEffect(() => {
        setIsComp(window.innerWidth > 1050)
    }, [])

    return (
        <WelcomeRow gutter={[0, 5]}>
            <Col span={24}>
                <Title level={3} style={{ textAlign: 'center', color: 'white', fontSize: isComp? '35px': ''}} underline={true}>About me</Title>
            </Col>
            <Col span={24}>
                <CustomParagraph>
                    I&apos;m Nuthapon, a programmer with 4 of experience. 
                    Here, you&apos;ll find a curated collection of my best work, showcasing my passion and expertise in programming. 
                    Each project represents a blend of creativity, dedication, and problem-solving skills.
                </CustomParagraph>
            </Col>
        </WelcomeRow>
    )
}

export default WelcomeText;
