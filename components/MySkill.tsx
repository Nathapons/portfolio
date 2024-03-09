import { Col, Image, Row } from "antd";
import styled from "styled-components";
import { Typography } from 'antd';
import { useEffect, useState } from "react";
import mySkill from '../datas/MySkill.json'


const MySkillRow = styled(Row)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 10px 15px;

    @media (min-width: 1050px) {
        padding-top: 20px;
        padding-bottom: 20px;
    }
`

const MySkillCard = styled(Col)`
    text-align: center;
    border-radius: 10px;
`

const { Title, Paragraph } = Typography;

const MySkill = () => {
    const [isComp, setIsComp] = useState(true);

    useEffect(() => {
        setIsComp(window.innerWidth > 1050)
    }, [])

    return (
        <>
            <MySkillRow gutter={[0, 5]} className="background-start-rgb">
                <Col span={24}>
                    <Title level={3} style={{ textAlign: 'center', color: '#ffcc00', fontSize: isComp? '35px': '' }} underline={true}>Programing Language</Title>
                </Col>
            </MySkillRow>
            <MySkillRow gutter={[10, 20]}>
                {mySkill.map((item, index) => {
                    return (
                        <MySkillCard key={index} span={4}>
                            <Image src={item.src} alt={item.alt} width={isComp? 70: 40} preview={false} style={{alignItems: 'center'}}/>
                        </MySkillCard>
                    )
                })}
            </MySkillRow>
        </>
    )
}

export default MySkill;
