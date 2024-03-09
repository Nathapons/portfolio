import { LinkedinOutlined, GithubOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons';

import { Col, Row, Typography, ConfigProvider } from 'antd';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface ContractGroupType {
    url: string
    icon: any
}

const { Title } = Typography;

const Connect = () => {
    const [isComp, setIsComp] = useState(true);

    useEffect(() => {
        setIsComp(window.innerWidth > 1050)
    }, [])

    const linkedinUrl: string = 'https://www.linkedin.com/in/nuthapon-sripornprasert-a41138213/'
    const githubUrl: string = 'https://github.com/Nathapons'
    const facebookUrl: string = 'https://www.facebook.com/nax.seekid/?locale=th_TH'
    const instragramUrl: string = 'https://www.instagram.com/nuthapon.s/'

    const contractGroup: ContractGroupType[] = [
        {
            url: facebookUrl,
            icon: <FacebookOutlined className="fb-icon" style={{color: "#1677ff", fontSize: "30px"}}/>
        },
        {
            url: githubUrl,
            icon: <GithubOutlined className="github-icon" style={{color: "black", fontSize: "30px"}}/>
        },
        {
            url: linkedinUrl,
            icon: <LinkedinOutlined className="linkedin-icon" style={{color: "#1677ff", fontSize: "30px"}}/>
        },
        {
            url: instragramUrl,
            icon: <InstagramOutlined style={{color: "rgb(240, 6, 45)", fontSize: "30px"}}/>
        }
    ]

    return (
        <Row style={{alignItems: "center", textAlign: "center", paddingTop: "20px", paddingBottom: "20px", backgroundColor: '#31323a'}}>
            <Col span={24}>
                <ConfigProvider
                    theme={{
                        token: {
                            colorText: 'white',
                            fontSizeHeading3: (isComp? 35: 24)
                        },
                    }}
                >
                    <Title level={3}>Connect</Title>
                </ConfigProvider>
            </Col>
            <Col span={24}>
                <Row gutter={[1, 1]} style={{marginTop: "20px", justifyContent: "center"}}>
                    {contractGroup.map((item, index) => {
                        return (
                            <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} flex={1}>
                                <Link href={item.url} key={index} target='_blank'>{item.icon}</Link>
                            </Col>
                        )
                    })}
                </Row>
            </Col>
        </Row>
    )
}

export default Connect;