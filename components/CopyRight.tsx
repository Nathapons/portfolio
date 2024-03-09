"use client";
import { ConfigProvider, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import styled from "styled-components";

const CustomRow = styled(Row)`
    height: 100px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`

const { Title } = Typography;

const CopyRight = () => {
    const [isComp, setIsComp] = useState(true);

    useEffect(() => {
        setIsComp(window.innerWidth > 1050)
    }, [])


    return (
        <Row style={{height: '100px', backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <ConfigProvider
                theme={{
                    token: {
                        colorText: 'white',
                        fontSizeHeading3: (isComp? 22: 18)
                    },
                }}
            >
                <Title level={3}>&#169; Nuthapon.S 2024. All Rights Reserved.</Title>
            </ConfigProvider>
        </Row>
    )
}

export default CopyRight;