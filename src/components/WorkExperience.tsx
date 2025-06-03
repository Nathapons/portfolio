import React from "react";
import { Props } from "../interfaces/globalInterfaces";
import { Col, ConfigProvider, Flex, Row, Typography } from "antd";

const { Title } = Typography;

const WorkExperience: React.FC<Props> = ({ isComp }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorText: 'white',
                    fontSizeHeading3: (isComp ? 35 : 24),
                    fontSize: (isComp ? 16 : 14),
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
        </ConfigProvider>
    );
};

export default WorkExperience;
