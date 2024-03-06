"use client"; 
import { Row, Col } from 'antd';
import Link from 'next/link'
import styled from 'styled-components';
import { Typography } from 'antd';
import { useEffect, useState } from 'react';


const CustomLink = styled(Link)`
    text-decoration: none;
    font-size: 16px

    &:hover {
        text-decoration: underline;
    }
`

const { Title } = Typography;

const MenuBar = () => {
    const [menuName, setMenuName] = useState<any[]>([]);

    useEffect(() => {
        const getMenu = async () => {
            const menubar = await fetch('http://localhost:3000/apis')
            const response = await menubar.json();
            console.log(response)
            setMenuName(response);
        }
        getMenu();
    }, [])

    return (
        <Row gutter={[30, 0]} style={{marginRight: '2px'}}>
            {menuName.map((item, index) => {
                return (
                    <Col key={index}>
                        <CustomLink href={item.path}>
                            <Title level={4} style={{color: 'white'}}>
                                {item.name}
                            </Title>
                        </CustomLink>
                    </Col>
                )
            })}
        </Row>
    )
}

export default MenuBar;