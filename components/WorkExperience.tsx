"use client";
import { Props } from "@/interfaces/globalInterfaces";
import { Col, ConfigProvider, Flex, Card, Row, Typography, Image } from "antd";

const { Title, Paragraph } = Typography;

const WorkExperience = ({ isComp }: Props) => {
    const experienceData = [
        {
            timeline: 'February, 2024 - Present',
            position: 'Software Developer',
            company: 'Trinity Roots Co.,Ltd.',
        },
        {
            timeline: 'July, 2022 – December, 2023',
            position: 'Backend Developer',
            company: 'Swift Dynamics Co., Ltd.',
        },
        {
            timeline: 'October, 2021 – June, 2022',
            position: 'Backend Developer',
            company: 'Mor Corporation (The VC Group)',
        },
        {
            timeline: 'June, 2018 – September, 2021',
            position: 'IoT Engineering',
            company: 'Fujikura Electronics ( Thailand ) Co.,Ltd.',
        },
    ]

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorText: 'white',
                    fontSizeHeading3: (isComp? 35: 24),
                    fontSize: (isComp? 16: 14),
                },
                components: {
                    Card: {
                        headerFontSize: 16,
                    }
                }
            }}
        >
            <Row gutter={[10, 30]}>
                <Col span={24}>
                    <Flex style={{justifyContent: 'center'}}>
                        <Title level={3}>My <span style={{color: 'orange', textAlign: 'center'}}>Work Experience</span></Title>
                    </Flex>
                </Col>
            </Row>
            <Row style={{paddingTop: '24px', paddingBottom: '24px', margin: 0}} align="middle" gutter={[10, 10]}>
                {isComp && <Col xxl={12} xl={12} style={{display: 'flex', justifyContent: 'center'}}>
                    <Image 
                        src="https://res.cloudinary.com/dizcg5fnc/image/upload/v1711810211/upload/jnlsqpvszwcazgrhxxvj.gif" 
                        alt="computer-gif" 
                        preview={false} 
                    />
                </Col>}
                <Col xxl={12} xl={12} lg={24} sm={24} xs={24}>
                    <Row gutter={[10, 10]}>
                        {experienceData.map((item, index) => {
                            return (
                                <Card 
                                    title={item.timeline}
                                    style={{width: '80%', backgroundColor: '#31323a'}} 
                                >
                                    <Title level={4} style={{margin: 0}}>{item.position}</Title>
                                    <Paragraph style={{margin: 0}}>{item.company}</Paragraph>
                                </Card>
                            )
                        })}
                    </Row>
                </Col>
            </Row>
        </ConfigProvider>
    )
}

export default WorkExperience;