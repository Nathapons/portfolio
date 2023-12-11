import { Collapse, Flex } from "antd";

import details from '../datas/SkillAccordion.json'
import '../styles/SkillAccordion.css'
import React from "react";

const { Panel } = Collapse;

const SkillAccordion: React.FC = () => {
    const activeKey = details.map((_, index) => index)

    return (
        <>
            <h2>Skill</h2>
            {details.map((item, index) => (
                <Collapse defaultActiveKey={activeKey} className="collapse" bordered={true}>
                <Panel key={index} header={item.header} className="item-panel">
                    <Flex wrap="wrap" gap="small">
                        {item.url.map((val) => (
                            <img src={val.src} alt={val.alt} className="icon-style"/>
                        ))}
                    </Flex>
                </Panel>
                </Collapse>
            ))}
        </>
    )
}

export default SkillAccordion;