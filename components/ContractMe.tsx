import { Row, Col, Typography, ConfigProvider } from "antd";
import { useEffect, useState } from "react";

const { Title } = Typography;

const ContractMe = () => {
    const [isComp, setIsComp] = useState(true);

    useEffect(() => {
        setIsComp(window.innerWidth > 1050)
    }, [])

    return (
        <Row style={{paddingTop: '10px', backgroundColor: '#31323a'}}>
            <Col span={24}>
                <ConfigProvider
                    theme={{
                        token: {
                            colorText: 'white',
                            fontSizeHeading3: (isComp? 35: 24)
                        },
                        
                    }}
                >
                    <Title level={3} style={{ textAlign: 'center'}}>Contract Me</Title>
                </ConfigProvider>
            </Col>
        </Row>
    )
}

export default ContractMe;