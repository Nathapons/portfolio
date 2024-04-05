import { Typography, ConfigProvider, Row, Col, Flex } from 'antd';

const { Title } = Typography;

const CertificateTitle = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorText: 'white',
                },
            }}
        >
            <Row gutter={[10, 30]}>
                <Col span={24}>
                    <Title level={1} style={{textAlign: 'center'}}>Certificate</Title>
                </Col>
            </Row>
        </ConfigProvider>
    )
}

export default CertificateTitle;