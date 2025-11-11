import React from "react";
import { Col, ConfigProvider, Row, Typography } from "antd";
import { Props } from '../interfaces/globalInterfaces';

const { Title, Paragraph } = Typography;


const GithubTitle: React.FC<Props> = ({ isComp }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorText: 'white',
                    fontSizeHeading3: (isComp ? 35 : 24)
                },
            }}
        >
            <Row style={{padding: '10px'}}>
                <Col span={24}>
                    <Title level={3} style={{textAlign: 'center'}}>My Github Timeline</Title>
                </Col>
            </Row>
            <Row style={{padding: '10px'}}>
                <Col span={24}>
                    <Paragraph style={{textAlign: 'center'}}>
                        A summary of my public contributions on Github. Select a year to view the timeline.
                    </Paragraph>
                </Col>
            </Row>
        </ConfigProvider>
    );
}

export default GithubTitle;