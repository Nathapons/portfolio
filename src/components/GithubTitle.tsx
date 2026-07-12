import React from "react";
import { Col, ConfigProvider, Row, Typography } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { Props } from '../interfaces/globalInterfaces';

const { Title } = Typography;
const ACCENT = '#39d353';


const GithubTitle: React.FC<Props> = ({ isComp }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorText: 'white',
                    fontSizeHeading3: (isComp ? 38 : 26)
                },
            }}
        >
            <Row className="p-2 mb-4">
                <Col span={24}>
                    <Title level={3} className="text-center" style={{ fontWeight: 800, letterSpacing: '-0.5px' }}>
                        <GithubOutlined className="mr-3" style={{ color: ACCENT }} />
                        GitHub Profile
                    </Title>
                </Col>
            </Row>
        </ConfigProvider>
    );
}

export default GithubTitle;