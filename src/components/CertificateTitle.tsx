import React from 'react';
import { Typography, ConfigProvider, Row, Col } from 'antd';
import { ProfileOutlined } from "@ant-design/icons";
import { Props } from '../interfaces/globalInterfaces';

const { Title } = Typography;

const CertificateTitle: React.FC<Props> = ({ isComp }) => {
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
                    <Title level={3} style={{textAlign: 'center'}}>
                        <ProfileOutlined className="mr-2"/>Certificate
                    </Title>
                </Col>
            </Row>
        </ConfigProvider>
    );
};

export default CertificateTitle;
