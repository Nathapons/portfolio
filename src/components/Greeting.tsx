import React from "react";
import { Button, Col, ConfigProvider, Image, Row } from "antd";
import styled from "styled-components";
import { Typography } from 'antd';
import { Props } from '../interfaces/globalInterfaces';

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

const { Title } = Typography;

const Greeting: React.FC<Props> = ({ isComp }) => {
    const img: string = "https://res.cloudinary.com/dizcg5fnc/image/upload/v1701619719/upload/kqc8rgleicctewcci0cv.jpg";
    const resumeUrl: string = 'https://drive.google.com/file/d/1XOc4uOKh_ZAdSjJQO4dw3xM37p4YchNv/view?usp=sharing';
    
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
                    <Image src={img} alt="profile-img" width={isComp ? 500 : 300} preview={false} />
                </CustomCol>
                <CustomImgCol xl={12} xxl={12} lg={12} md={24} sm={24} xs={24}>
                    <Col span={24}>
                        <Title level={3}>
                            I'm <span style={{color: '#ffcc00'}}>Nuthapon Sripornprasert</span>
                        </Title>
                    </Col>
                    <Col>
                        <Row 
                            gutter={[20, 0]}
                            style={!isComp ? {marginTop:'10px', justifyContent: 'center'} : {marginTop: '10px'}}
                        >
                            <Col>
                                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                                    <Button type="primary" size="large">My Resume</Button>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </CustomImgCol>
            </CustomRow>
        </ConfigProvider>
    );
};

export default Greeting;
