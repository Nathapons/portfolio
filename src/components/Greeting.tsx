import React from "react";
import { Button, Col, ConfigProvider, Image, Row, Space } from "antd";
import { GithubOutlined, LinkedinOutlined, EnvironmentOutlined, ManOutlined } from "@ant-design/icons"
import styled from "styled-components";
import { Typography } from 'antd';
import { Props } from '../interfaces/globalInterfaces';
import { motion } from "framer-motion"

const CustomRow = styled(Row)`
    align-items: center;
    justify-content: center;
    padding-top: 24px;
    padding-bottom: 24px;
    background-color: #34353a;
    color: white;
`;

const CustomCol = styled(Col)`
    padding-left: 0px;
    padding-right: 0px;
    
    @media (max-width: 1050px) {
        text-align: center;
    }
`;

const CustomImgCol = styled(Col)`
    padding-top: 20px;

    @media (max-width: 1050px) {
        text-align: center;
    }
`;

const { Title, Paragraph } = Typography;

const Greeting: React.FC<Props> = ({ isComp }) => {
    const img: string = "https://res.cloudinary.com/dizcg5fnc/image/upload/v1751286613/upload/pxjotniorcjdiip9fs79.jpg";
    
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorText: 'white',
                    fontSizeHeading3: (isComp ? 60 : 28)
                },
                components: {
                    Typography: {
                        titleMarginBottom: 0,
                        titleMarginTop: 0
                    },
                }
            }}
        >
            <CustomRow style={{margin: 0}} gutter={isComp ? [40, 10] : [0, 10]}>
                <CustomCol>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                        <Image src={img} alt="profile-img" width={isComp ? 500 : 300} preview={false} />
                    </motion.div>
                </CustomCol>
                <CustomImgCol xl={12} xxl={12} lg={12} md={24} sm={24} xs={24}>
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <Col span={24}>
                            <Title level={3}>
                                I'm <span className="text-amber-400">Nuthapon Sripornprasert</span>
                            </Title>
                            <Title level={4}><span className="text-amber-400">Fullstack Developer</span></Title>
                            <Paragraph>
                                <EnvironmentOutlined className="mr-2" />Bangkok, Thailand
                            </Paragraph>
                            <Paragraph>
                                Gender: <ManOutlined className="ml-2 mr-2" />Male
                            </Paragraph>
                            <Paragraph>
                                Experienced Backend Developer with a proven track record in designing, developing, and deploying scalable web applications 
                                using Python/Django. Strong in database management and RESTful APIs. Collaborative and results-driven, seeking a challenging role at NestiFly Co., Ltd. 
                                to contribute to impactful projects and expand technical skills.
                            </Paragraph>
                            <Space size="large">
                                <Button
                                    color="orange"
                                    size="large"
                                    variant="outlined"
                                    icon={<GithubOutlined />}
                                    href="https://github.com/nathapons"
                                    target="_blank"
                                >
                                    GitHub
                                </Button>
                                <Button
                                    color="blue"
                                    size="large"
                                    variant="outlined"
                                    icon={<LinkedinOutlined />}
                                    href="https://www.linkedin.com/in/nuthapon-sripornprasert-a41138213"
                                    target="_blank"
                                >
                                    LinkedIn
                                </Button>
                            </Space>
                        </Col>
                    </motion.div>
                </CustomImgCol>
            </CustomRow>
        </ConfigProvider>
    );
};

export default Greeting;
