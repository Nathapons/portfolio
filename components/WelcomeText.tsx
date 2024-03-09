import { Col, ConfigProvider, Row } from "antd";
import styled from "styled-components";
import { Typography } from 'antd';
import { useEffect, useState } from "react";

const WelcomeRow = styled(Row)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #31323a;
    padding: 10px 15px;

    @media (min-width: 1050px) {
        padding-top: 20px;
        padding-bottom: 20px;
    }
`

const { Paragraph, Title } = Typography;

const CustomParagraph = styled(Paragraph)`
    @media (min-width: 1050px) {
        width: 70%;
        margin: 0 auto;
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
                <ConfigProvider
                    theme={{
                        token: {
                            colorText: 'white',
                            fontSizeHeading3: (isComp? 35: 24)
                        },
                    }}
                >
                    <Title level={3} style={{ textAlign: 'center'}}>Welcome</Title>
                </ConfigProvider>
            </Col>
            <Col span={24}>
                <ConfigProvider
                    theme={{
                        token: {
                            colorText: 'white',
                            fontSize: (isComp? 22: 14)
                        },
                    }}
                >
                    <CustomParagraph>
                        I&apos;m Nuthapon, a programmer with 4 of experience. 
                        Here, you&apos;ll find a curated collection of my best work, showcasing my passion and expertise in programming. 
                        Each project represents a blend of creativity, dedication, and problem-solving skills.
                    </CustomParagraph>
                </ConfigProvider>
            </Col>
        </WelcomeRow>
    )
}

export default WelcomeText;
