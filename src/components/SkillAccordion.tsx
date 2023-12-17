import { Collapse, Flex, Image } from "antd";

import details from '../datas/SkillAccordion.json'
import React from "react";
import styled from "styled-components";

const { Panel } = Collapse;

const CustomContainer = styled.div`
    @media (min-width: 1050px) {
        margin: 0px 20px 0px 20px;
    }
`

const CustomCollapse = styled(Collapse)`
    background-color: rgb(79, 79, 187);
    font-weight: bold;
    border: 1px solid black;
    margin-top: 10px;
    animation: fadeIn 2s ease-in-out;

    @keyframes fadeIn {
        0% {opacity: 0;}
        25% {opacity: 0.25;}
        50% {opacity: 0.5;}
        100% {opacity: 1;}
    }
`

const SkillAccordion: React.FC = () => {
    const activeKey = details.map((_, index) => index)

    return (
        <CustomContainer>
            <h2 style={{textAlign: "center"}}>Skill</h2>
            {details.map((item, index) => (
                <CustomCollapse defaultActiveKey={activeKey} bordered={true}>
                <Panel key={index} header={item.header} >
                    <Flex wrap="wrap" gap="small">
                        {item.url.map((val) => (
                            <Image src={val.src} alt={val.alt} width={40} preview={false} />
                        ))}
                    </Flex>
                </Panel>
                </CustomCollapse>
            ))}
        </CustomContainer>
    )
}

export default SkillAccordion;