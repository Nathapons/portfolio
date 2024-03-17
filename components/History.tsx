import { Col, ConfigProvider, Flex, Image, Row, Typography } from "antd";


const { Title, Paragraph } = Typography;

const History = () => {
    const img = "https://res.cloudinary.com/dizcg5fnc/image/upload/v1702219598/upload/urjpebrhv9gabuqv10r6.jpg"

    return (
        <Row style={{paddingTop: '24px', paddingBottom: '24px', alignItems: 'center', justifyContent: 'center'}} gutter={[10, 10]}>
            <Col>
                <Image src={img} alt="profile-img" width={500} preview={false} />
            </Col>
            <Col>
                <Row>
                    <ConfigProvider>
                        <Title level={1}>Nuthapon Sripornprasert</Title>
                    </ConfigProvider>
                </Row>
                <Row>
                    <Paragraph>Current living: Bangkok, Thailand</Paragraph>
                </Row>
            </Col>
        </Row>
    )
}

export default History;