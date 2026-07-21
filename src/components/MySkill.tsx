import React from "react";
import { Col, ConfigProvider, Image, Row } from "antd";
import styled from "styled-components";
import { Typography } from 'antd';
import { Props } from "../interfaces/globalInterfaces";
import Marquee from "react-fast-marquee";
import languageSkillData from '../data/MySkill.json';
import cloudSkillData from '../data/CloudSkill.json';
import { TechStackItem } from "../interfaces/globalInterfaces";

const MySkillCol = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
    padding: 10px 15px;

    @media (min-width: 1050px) {
        display: flex;
        margin: 0 auto;
        padding: 10px 30px;
    }
`;

const SkillSection = styled.div`
    width: 100%;
    min-width: 0;
    overflow: hidden;
    padding: 30px 0;
`;

const SkillCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 16px 20px;
    margin: 0 8px;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    transition: background-color 0.2s ease, transform 0.2s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        transform: translateY(-2px);
    }
`;

const { Title } = Typography;

interface SkillGroupProps extends Props {
    title: string;
    skills: TechStackItem[];
}

const SkillGroup: React.FC<SkillGroupProps> = ({ isComp, title, skills }) => (
    <SkillSection>
        <Row style={isComp ? { margin: '0 auto' } : {}}>
            <MySkillCol span={24}>
                <Col span={24}>
                    <ConfigProvider
                        theme={{
                            token: {
                                colorText: '#ffcc00',
                                fontSizeHeading3: (isComp ? 35 : 24)
                            },
                        }}
                    >
                        <Title level={3} style={{ textAlign: 'center' }}>{title}</Title>
                    </ConfigProvider>
                </Col>
            </MySkillCol>
            <MySkillCol span={24}>
                <Marquee pauseOnHover gradient gradientColor="#34353a" gradientWidth={isComp ? 80 : 30}>
                    {skills.map((item, index) => {
                        return (
                            <SkillCard key={index}>
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={isComp ? 60 : 36}
                                    preview={false}
                                />
                                <ConfigProvider
                                    theme={{
                                        token: {
                                            colorText: 'white'
                                        },
                                    }}
                                >
                                    <Title level={5} style={{ margin: 0, whiteSpace: 'nowrap' }}>{item.alt}</Title>
                                </ConfigProvider>
                            </SkillCard>
                        );
                    })}
                </Marquee>
            </MySkillCol>
        </Row>
    </SkillSection>
);

const MySkill: React.FC<Props> = ({ isComp }) => {
    return (
        <Row>
            <SkillGroup isComp={isComp} title="Languages & Frameworks" skills={languageSkillData} />
            <SkillGroup isComp={isComp} title="Cloud & DevOps" skills={cloudSkillData} />
        </Row>
    );
};

export default MySkill;
