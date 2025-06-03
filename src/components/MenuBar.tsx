import React from 'react';
import { Row, Col, ConfigProvider, Typography } from 'antd';
import { Link } from 'react-router-dom';
import menuName from '../data/MenuName.json';
import { MenuItemProps } from '../interfaces/globalInterfaces';

const { Title } = Typography;

const MenuBar: React.FC = () => {
    return (
        <Row gutter={[30, 0]} style={{marginRight: '2px'}}>
            {menuName.map((item: MenuItemProps, index: number) => {
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
                                    {item.name}
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
