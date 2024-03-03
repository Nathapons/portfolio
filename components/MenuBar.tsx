"use client"; 
import { Row, Col } from 'antd';
import menuName from '../datas/ManuName.json';
import Link from 'next/link'
import styled from 'styled-components';


const CustomLink = styled(Link)`
    text-decoration: none;
    font-size: 16px

    &:hover {
        text-decoration: underline;
    }
`

const MenuBar = () => {
    return (
        <Row gutter={[20, 0]} style={{marginRight: '2px'}}>
            {menuName.map((item, index) => {
                return (
                    <Col key={index}><CustomLink href={item.path}>{item.name}</CustomLink></Col>
                )
            })}
        </Row>
    )
}

export default MenuBar;