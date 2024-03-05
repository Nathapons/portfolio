"use client";
import { Row, Col, Typography, Timeline, ConfigProvider } from "antd";


const { Title } = Typography;

const Experience = () => {
    const experienceArr = [
        {
            label: '2024',
            children: 'Trinity Root',
        },
        {
            label: '2022',
            children: 'Swift Dynamics Co., Ltd.',
        },
        {
            label: '2021',
            children: 'Mor Coperation',
        },
        {
            label: '2018',
            children: 'Fujikura Electronics (Thailand) Ltd.',
        },
    ]

    return (
        <Row style={{paddingTop: '10px', backgroundColor: '#34353a' }} gutter={[0, 20]}>
            <Col span={24} style={{width: '70%'}}>
                <Title level={3} style={{ textAlign: 'center', color: 'white'}} underline={true}>Experience</Title>
            </Col>
            <Col span={24}>
                <ConfigProvider
                    theme={{
                        token: {
                            colorText: 'white',
                            fontSize: 14
                        },
                        components: {
                            Timeline: {
                                tailColor: 'white',
                                dotBg: '#f0bf6c'
                            },
                        },
                    }}
                >
                    <Timeline mode="left" style={{width: '90%', textAlign: 'left'}}>
                        {experienceArr.map((item, index) => {
                            return (
                                <Timeline.Item key={index} label={item?.label} color="#f0bf6c">
                                    {item.children}
                                </Timeline.Item>
                            )
                        })}
                    </Timeline>
                </ConfigProvider>
            </Col>
        </Row>
    )
}

export default Experience;
