"use client";
import { Col, ConfigProvider, Flex, Image, Row } from "antd";
import styled from "styled-components";
import { Typography } from 'antd';
import mySkill from '../datas/MySkill.json'
import { Props } from "@/interfaces/globalInterfaces";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";


const MySkillCol = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 15px;

    @media (min-width: 1050px) {
        display: flex;
        margin: 0 auto;
        padding: 10px 30px;
    }
`

const { Title } = Typography;

interface MySkillData {
    src: string
    alt: string
}

const MySkill = ({isComp}: Props) => {
    const [mySkill, setMySkill] = useState<MySkillData[]>([]);

    useEffect(() => {
        fetch('/api/v1/skill')
        .then((response => response.json()))
        .then((data: MySkillData[]) => {
            setMySkill(data)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        })
    }, [])

    return (
        <Row style={{backgroundColor: '#31323a'}}>
            <Row style={isComp? {backgroundColor: '#31323a', margin: '0 auto', width: '80%'}: {}}>
                <MySkillCol span={24}>
                    <Col span={24}>
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorText: '#ffcc00',
                                    fontSizeHeading3: (isComp? 35: 24)
                                },
                            }}
                        >
                            <Title level={3} style={{ textAlign: 'center' }}>Programing Skill</Title>
                        </ConfigProvider>
                    </Col>
                </MySkillCol>
                <MySkillCol span={24}>
                    <Marquee pauseOnHover={false}>
                        <Row gutter={isComp? [20, 0]: [5, 0]}>
                            {mySkill.map((item, index) => {
                                return (
                                    <Col key={index}>
                                        <Row gutter={[0, 10]} align="middle" justify="center">
                                            <Col span={24} style={{display: 'flex', justifyContent: "center"}}>
                                                <Image 
                                                    src={item.src} 
                                                    alt={item.alt} 
                                                    width={isComp? 70: 40} 
                                                    preview={false}
                                                />
                                            </Col>
                                            <Col span={24} style={{display: 'flex', justifyContent: "center"}}>
                                                <ConfigProvider
                                                    theme={{
                                                        token: {
                                                            colorText: 'white'
                                                        },
                                                    }}
                                                >
                                                    <Title level={5}>{item.alt}</Title>
                                                </ConfigProvider>
                                            </Col>
                                        </Row>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Marquee>
                </MySkillCol>
            </Row>
        </Row>
    )
}

export default MySkill;
