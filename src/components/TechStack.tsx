import React from "react"
import myStacks from '../datas/TechStack.json'
import { Col, Row } from "antd"

const TechStack: React.FC = () => {
    return (
        <>
            <h3>Tech stack</h3>
            {myStacks.map((item, index) => (
                <Row key={index}>
                    <Col><img src={item.src} alt={item.src} /></Col>
                </Row>
            ))}
        </>
    )
}

export default TechStack