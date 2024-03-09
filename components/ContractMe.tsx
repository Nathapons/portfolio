import { Row, Col, Typography } from "antd";
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
                <Title level={3} style={{ textAlign: 'center', color: 'white', fontSize: isComp? '35px': ''}}>Contract Me</Title>
            </Col>
        </Row>
    )
}

export default ContractMe;