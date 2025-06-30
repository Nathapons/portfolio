import React from 'react';
import { Row, Col, ConfigProvider, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, TruckOutlined } from "@ant-design/icons"
import { MenuItemProps } from '../interfaces/globalInterfaces';

const { Title } = Typography;

const MenuBar: React.FC = () => {
    const menuItem: MenuItemProps[] = [
        { name: 'Home', path: '/', icon: <HomeOutlined className="mr-2" /> },
        { name: 'Certificates', path: '/certificate', icon: <TruckOutlined className="mr-2" /> }
    ];
    
    return (
        <Row gutter={[30, 0]} style={{marginRight: '2px'}}>
            {menuItem.map((item, index) => {
                return (
                    <Col key={index}>
                        <Link to={item.path} style={{textDecoration: 'none'}}>
                            <ConfigProvider
                                theme={{
                                    token: {
                                        colorText: 'white',
                                        fontSize: 16,
                                    },
                                }}
                            >
                                <Title level={4} style={{margin: 0}}>
                                    {item.icon}{item.name}
                                </Title>
                            </ConfigProvider>
                        </Link>
                    </Col>
                );
            })}
        </Row>
    );
};

export default MenuBar;
