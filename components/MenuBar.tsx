"use client"; 
import { Row, Col } from 'antd';
import Link from 'next/link'
import styled from 'styled-components';
import { Typography } from 'antd';
import { useEffect, useState } from 'react';
import menuName from '../datas/ManuName.json'


const CustomLink = styled(Link)`
    text-decoration: none;
    font-size: 16px

    &:hover {
        text-decoration: underline;
    }
`

const { Title } = Typography;

const MenuBar = () => {
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