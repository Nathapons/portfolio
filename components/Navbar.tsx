"use client";
import { ConfigProvider, Row } from 'antd';
import Link from 'next/link'
import MenuButton from './MenuButton';
import MenuBar from './MenuBar';
import { useEffect, useState } from 'react';
import { Typography } from 'antd';


interface Props {
    menu: any;
}

const { Title } = Typography;

const Navbar = ({ menu }: Props) => {
    const [isComp, setIsComp] = useState(true);

    useEffect(() => {
        setIsComp(window.innerWidth > 1050)
    }, [])

    return (
        <Row style={{justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#31323a'}}>
            <Link href="/" >
                <ConfigProvider
                        theme={{
                            token: {
                                colorText: 'white',
                                fontSizeHeading2: (isComp? 30: 24)
                            },
                            components: {
                                Typography: {
                                    titleMarginBottom: 0,
                                    titleMarginTop: 0
                                },
                            }
                        }}
                >
                    <Title level={2} style={{ textAlign: 'center', border: '1px solid white', padding: '5px'}}>Nuthapon.S</Title>
                </ConfigProvider>
            </Link>
            {isComp? <MenuBar />: <MenuButton menu={menu} />}
        </Row>
    )
}

export default Navbar;