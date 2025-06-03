import React from "react";
import { Props } from '../interfaces/globalInterfaces';
import { LinkedinOutlined, GithubOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import { Col, Row, Typography, ConfigProvider } from 'antd';

const { Title } = Typography;

const Connect: React.FC<Props> = ({ isComp }) => {
    const linkedinUrl: string = 'https://www.linkedin.com/in/nuthapon-sripornprasert-a41138213/';
    const githubUrl: string = 'https://github.com/Nathapons';
    const facebookUrl: string = 'https://www.facebook.com/nax.seekid/?locale=th_TH';
    const instragramUrl: string = 'https://www.instagram.com/nuthapon.s/';

    return (
        <Row style={{alignItems: "center", textAlign: "center", paddingTop: "20px", paddingBottom: "20px"}}>
            <Col span={24}>
                <ConfigProvider
                    theme={{
                        token: {
                            colorText: 'white',
                            fontSizeHeading3: (isComp ? 35 : 24)
                        },
                    }}
                >
                    <Title level={3} style={{ textAlign: 'center' }}>Connect</Title>
                </ConfigProvider>
            </Col>
            <Col span={24}>
                <Row gutter={isComp ? [100, 100] : [50, 50]} justify="center" align="middle" style={{marginTop: "20px"}}>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} flex="none">
                        <a href={facebookUrl} target='_blank' rel="noopener noreferrer">
                            <FacebookOutlined className="fb-icon" style={{color: "#1677ff", fontSize: (isComp) ? '50px' : '30px'}}/>
                        </a>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} flex="none">
                        <a href={githubUrl} target='_blank' rel="noopener noreferrer">
                            <GithubOutlined className="github-icon" style={{color: "black", fontSize: (isComp) ? '50px' : '30px'}}/>
                        </a>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} flex="none">
                        <a href={linkedinUrl} target='_blank' rel="noopener noreferrer">
                            <LinkedinOutlined className="linkedin-icon" style={{color: "#1677ff", fontSize: (isComp) ? '50px' : '30px'}}/>
                        </a>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} flex="none">
                        <a href={instragramUrl} target='_blank' rel="noopener noreferrer">
                            <InstagramOutlined style={{color: "rgb(240, 6, 45)", fontSize: (isComp) ? '50px' : '30px'}}/>
                        </a>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Connect;
