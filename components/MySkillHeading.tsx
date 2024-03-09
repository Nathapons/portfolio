import { Row, Col, Typography } from "antd";
import { useEffect, useState } from "react";
import styled from "styled-components";

const { Title } = Typography;

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

const MySkillHeading = () => {
    const [isComp, setIsComp] = useState(true);

    useEffect(() => {
        setIsComp(window.innerWidth > 1050)
    }, [])

    return (
        <MySkillRow>
            <Col span={24}>
                <Title level={3} style={{ textAlign: 'center', color: 'white', fontSize: isComp? '35px': ''}} underline={true}>My Skill</Title>
            </Col>
        </MySkillRow>
    )
}

export default MySkillHeading;