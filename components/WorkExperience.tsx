import { Props } from "@/interfaces/globalInterfaces";
import { Col, ConfigProvider, Flex, Row, Timeline, Typography } from "antd";

const { Title } = Typography;

const WorkExperience = ({isComp}: Props) => {
    return (
        <Row gutter={[10, 10]}>
            <Col span={24}>
                <Flex style={{justifyContent: 'center'}}>
                    <ConfigProvider
                        theme={{
                            token: {
                                colorText: 'white',
                                fontSizeHeading3: (isComp? 35: 24)
                            },
                        }}
                    >
                        <Title level={3}>My <span style={{color: 'orange', textAlign: 'center'}}>Work Experience</span></Title>
                    </ConfigProvider>
                </Flex>
            </Col>
            <Col span={24}>
                <Timeline
                    mode='left'
                    items={[
                        {
                            label: 'Swift Dynamics Co., Ltd. Jul, 2022 – Dec, 2023',
                            children: 'Backend Developer',
                        },
                        {
                            label: 'Mor Coporation October, 2021 – June, 2022',
                            children: 'Backend Developer',
                        },
                        {
                            label: 'Fujikura Electronics (Thailand) Ltd. Jun, 2018 – Sep, 2021',
                            children: 'IoT Engineering',
                        },
                    ]}
                />
            </Col>
        </Row>
    )
}

export default WorkExperience;