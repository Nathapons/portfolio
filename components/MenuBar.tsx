"use client";
import { Row, Col, ConfigProvider } from 'antd';
import Link from 'next/link'
import { Typography } from 'antd';
import menuName from '../datas/ManuName.json'


const { Title } = Typography;

const MenuBar = () => {
    return (
        <Row gutter={[30, 0]} style={{marginRight: '2px'}}>
            {menuName.map((item, index) => {
                return (
                    <Col key={index}>
                        <Link href={item.path} style={{textDecoration: 'none'}}>
                            <ConfigProvider
                                theme={{
                                    token: {
                                        colorText: 'white',
                                        fontSize: 16,
                                    },
                                }}
                            >
                                <Title level={4} style={{margin: 0}}>
                                    {item.name}
                                </Title>
                            </ConfigProvider>
                        </Link>
                    </Col>
                )
            })}
        </Row>
    )
}

export default MenuBar;