import { Collapse, Flex } from "antd";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io5';

import '../styles/SkillAccordion.css'

const { Panel } = Collapse;

interface PanelDetail {
    header: string
    icons: React.ReactNode[]
}

const SkillAccordion = () => {
    const details: PanelDetail[] = [
        {
            header: "PROGRAMMING SKILL",
            icons: [
                <IoLogoHtml5 className="icon-style"/>,
                <IoLogoCss3 className="icon-style" />,
                <IoLogoJavascript className="icon-style"/>,
            ]
        },
    ]

    const activeKey: number[] = details.map((_, index) => index)

    return (
        <>
            <h2>Skill</h2>
            <Collapse defaultActiveKey={activeKey} className="collapse" bordered={true} >
            {details.map((item, index) => (
                <Panel key={index} header={item.header} className="item-panel">
                    <Flex wrap="wrap" gap="small">{item.icons}</Flex>
                </Panel>
            ))}
            </Collapse>
        </>
    )
}

export default SkillAccordion;