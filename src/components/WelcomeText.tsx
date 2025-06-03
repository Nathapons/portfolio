import React from "react";
import { Col, ConfigProvider, Row } from "antd";
import styled from "styled-components";
import { Typography } from 'antd';
import { Props } from "../interfaces/globalInterfaces";

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
`;

const { Paragraph, Title } = Typography;

const CustomParagraph = styled(Paragraph)`
    @media (min-width: 1050px) {
        width: 70%;
        margin: 0 auto;
    }
`;

const WelcomeText: React.FC<Props> = ({ isComp }) => {
    return (
        <WelcomeRow gutter={[0, 5]}>
            <Col span={24}>
                <ConfigProvider
                    theme={{
                        token: {
                            colorText: 'white',
                            fontSizeHeading3: (isComp ? 35 : 24),
                        },
                    }}
                >
                    <Title level={3} style={{ textAlign: 'center'}}>Welcome to My Website</Title>
                </ConfigProvider>
            </Col>
            <Col span={24}>
                <ConfigProvider
                    theme={{
                        token: {
                            colorText: 'white',
                            fontSize: (isComp ? 22 : 14)
                        },
                    }}
                >
                    <CustomParagraph>
                        I'm Nuthapon, a programmer with 4 years of experience. 
                        Here, you'll find a curated collection of my best work, showcasing my passion and expertise in programming. 
                        Each project represents a blend of creativity, dedication, and problem-solving skills.
                    </CustomParagraph>
                </ConfigProvider>
            </Col>
        </WelcomeRow>
    );
};

export default WelcomeText;
