import { Props } from "@/interfaces/globalInterfaces";
import { Col, ConfigProvider, Row, Image, Alert, Typography } from "antd";

const { Paragraph } = Typography;

const WorkExperienceList = ({ isComp }: Props) => {
    const experienceData = [
        {
            timeline: 'February, 2024 - Present',
            position: 'Software Developer',
            company: 'Trinity Roots Co.,Ltd.',
        },
        {
            timeline: 'July, 2022 – December, 2023',
            position: 'Backend Developer',
            company: 'Swift Dynamics Co., Ltd.',
        },
        {
            timeline: 'October, 2021 – June, 2022',
            position: 'Backend Developer',
            company: 'Mor Corporation (The VC Group)',
        },
        {
            timeline: 'June, 2018 – September, 2021',
            position: 'IoT Engineering',
            company: 'Fujikura Electronics ( Thailand ) Co.,Ltd.',
        },
    ]

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorText: 'black',
                    fontSize: (isComp? 16: 14),
                },
            }}
        >
            <Row style={{paddingBottom: '24px', margin: 0}} align="middle" gutter={[10, 0]}>
                {isComp && <Col xxl={12} xl={12} style={{display: 'flex', justifyContent: 'center'}}>
                    <Image 
                        src="https://media1.tenor.com/m/xsDhHrBrMcYAAAAd/frieren-sousou-no-frieren.gif" 
                        alt="computer-gif" 
                        preview={false}
                        width={400}
                    />
                </Col>}
                <Col xxl={12} xl={12} lg={24} sm={24} xs={24}>
                    <Row gutter={[10, 10]}>
                        {experienceData.map((item, index) => {
                            return (
                                <Col span={24} key={index} style={isComp? {}: {display: 'flex', justifyContent: "center"}}>
                                    <Alert 
                                        message={
                                            <Row justify="space-between">
                                                <Col>{item.position}</Col>
                                                <Col style={{fontWeight: 'normal'}}>{item.timeline}</Col>
                                            </Row>
                                        }
                                        description={<Paragraph style={{margin: 0, fontWeight: 'normal'}}>{item.company}</Paragraph>}
                                        style={{width: isComp? '80%': '90%'}}
                                        type="warning"
                                    />
                                </Col>
                            )
                        })}
                    </Row>
                </Col>
            </Row>
        </ConfigProvider>
    )
}

export default WorkExperienceList;