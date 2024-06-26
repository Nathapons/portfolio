import { Props } from '@/interfaces/globalInterfaces';
import { Typography, ConfigProvider, Row, Col, Flex } from 'antd';

const { Title } = Typography;

const CertificateTitle = ({ isComp }: Props) => {
    return ( 
        <ConfigProvider
            theme={{
                token: {
                    colorText: 'white',
                    fontSizeHeading3: (isComp? 35: 24)
                },
            }}
        >
            <Row style={{padding: '10px'}}>
                <Col span={24}>
                    <Title level={3} style={{textAlign: 'center'}}>Certificate</Title>
                </Col>
            </Row>
        </ConfigProvider>
    )
}

export default CertificateTitle;