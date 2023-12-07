import { Collapse } from "antd";

const { Panel } = Collapse;

interface PanelDetail {
    header: string
    detail: string
}

const SkillAccordion = () => {
    const details: PanelDetail[] = [
        {
            header: "PROGRAMMING SKILL",
            detail: "this is defailt"
        },
        {
            header: "LIBRARY AND FRAMEWORK SKILL",
            detail: "this is defailt"
        },
        {
            header: "TOOL SKILL",
            detail: "this is defailt"
        }
    ]

    return (
        <Collapse>
            {details.map((item, index) => (
                <Panel header={item.header} key={index}><p>{item.detail}</p></Panel>
            ))}
        </Collapse>
    )
}

export default SkillAccordion;