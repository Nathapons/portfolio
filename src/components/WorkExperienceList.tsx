import React from "react";
import { Props } from "../interfaces/globalInterfaces";
import { Col, ConfigProvider, Row, Image, Alert, Typography } from "antd";
import experienceData from '../data/Experience.json';
import { ExperienceItem } from "../interfaces/globalInterfaces";

const { Paragraph } = Typography;

const WorkExperienceList: React.FC<Props> = ({ isComp }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorText: 'black',
                    fontSize: (isComp ? 16 : 14),
                },
            }}
        >
            <Row style={{paddingBottom: '24px', margin: 0}} align="middle" gutter={[10, 0]}>
                {isComp && (
                    <Col xxl={12} xl={12} style={{display: 'flex', justifyContent: 'center'}}>
                        <Image 
                            src="https://media1.tenor.com/m/xsDhHrBrMcYAAAAd/frieren-sousou-no-frieren.gif" 
                            alt="computer-gif" 
                            preview={false}
                            width={400}
                        />
                    </Col>
                )}
                <Col xxl={12} xl={12} lg={24} sm={24} xs={24}>
                    <Row gutter={[10, 10]}>
                        {experienceData.map((item: ExperienceItem, index: number) => {
                            return (
                                <Col span={24} key={index} style={isComp ? {} : {display: 'flex', justifyContent: "center"}}>
                                    <Alert 
                                        message={
                                            <Row justify="space-between">
                                                <Col>{item.position}</Col>
                                                <Col style={{fontWeight: 'normal'}}>{item.timeline}</Col>
                                            </Row>
                                        }
                                        description={<Paragraph style={{margin: 0, fontWeight: 'normal'}}>{item.company}</Paragraph>}
                                        style={{width: isComp ? '80%' : '90%'}}
                                        type="warning"
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
            </Row>
        </ConfigProvider>
    );
};

export default WorkExperienceList;
