import React from "react"
import { Col, Row } from "antd"

import myStacks from '../datas/TechStack.json'
import '../styles/TechStack.css'


const TechStack: React.FC = () => {
    return (
        <>
            <h3>Tech stack</h3>
            {myStacks.map((item, index) => (
                <Row key={index} className="tech-row" justify="space-between">
                    <Col className="tech-col" ><img src={item.src} alt={item.src} className="icon-img"/><span className="text-ctn">{item.alt}</span></Col>
                </Row>
            ))}
        </>
    )
}

export default TechStack