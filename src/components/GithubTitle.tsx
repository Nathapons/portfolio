import React from "react";
import { Col, ConfigProvider, Row, Typography } from "antd";
import { GithubOutlined } from "@ant-design/icons";
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
            <Row className="p-2">
                <Col span={24}>
                    <Title level={3} className="text-center">
                        <GithubOutlined className="mr-2" />
                        Github Profile
                    </Title>
                </Col>
            </Row>
        </ConfigProvider>
    );
}

export default GithubTitle;