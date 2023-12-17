import React from "react"
import { Flex, Image, Space } from "antd"

import myStacks from '../datas/TechStack.json'


const TechStack: React.FC = () => {
    return (
        <>
            <h3 style={{marginBottom: "10px"}}>Tech stack</h3>
            {myStacks.map((item, index) => (
                <Flex key={index} style={{paddingTop: "10px"}} gap="small">
                    <Space>
                        <Image src={item.src} alt={item.src} width={50} preview={false} />
                        <Flex style={{marginLeft: "20px"}}>{item.alt}</Flex>
                    </Space>
                </Flex>
            ))}
        </>
    )
}

export default TechStack