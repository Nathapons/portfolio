"use client";
import { Col, ConfigProvider, Flex, Image, Row } from "antd";
import styled from "styled-components";
import { Typography } from 'antd';
import mySkill from '../datas/MySkill.json'
import { Props } from "@/interfaces/globalInterfaces";
import Marquee from "react-fast-marquee";


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

const MySkill = ({isComp}: Props) => {

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
                        <Row gutter={[20, 0]}>
                            {mySkill.map((item, index) => {
                                return (
                                    <Col>
                                        <Image 
                                            key={index} 
                                            src={item.src} 
                                            alt={item.alt} 
                                            width={isComp? 70: 40} 
                                            preview={false}
                                        />
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
