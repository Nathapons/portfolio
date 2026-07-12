import React, { useEffect, useState } from "react";
import { Typography, Card, Tag, Row, Col, ConfigProvider } from "antd"
import { CalendarOutlined, EnvironmentOutlined, ProjectOutlined, ProductOutlined, CaretRightOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"

import { ExperienceItem } from "../interfaces/globalInterfaces"
import { Props } from "../interfaces/globalInterfaces";
import Experience from "../data/Experience.json"

const { Title, Paragraph } = Typography

const WorkExperience: React.FC<Props> = ({ isComp }) => {
    const [workExperienceData, setWorkExperienceData] = useState<ExperienceItem[]>([]);

    useEffect(() => {
        setWorkExperienceData(Experience);
    }, [])

    return (
        <div className="py-10 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <ConfigProvider
                        theme={{
                            token: {
                                colorText: '#ffcc00',
                                fontSizeHeading3: (isComp ? 35 : 24)
                            },
                        }}
                    >
                        <Title level={3} className="text-center">Work Experience</Title>
                        <Paragraph className="text-center text-lg text-yellow">My professional journey and key achievements</Paragraph>
                    </ConfigProvider>
                </motion.div>
                <Row gutter={[24, 24]}>
                    <Col span={24}>
                        <div className="relative">
                            <div
                                className="absolute top-1 bottom-1 w-[2px]"
                                style={{ left: 3, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                            />
                            <div className="flex flex-col gap-6">
                                {workExperienceData.map((job, index) => (
                                    <div key={job.id.toString()} className="grid grid-cols-[8px_1fr] gap-3">
                                        <div className="pt-2">
                                            <div
                                                role="img"
                                                aria-label={`${job.position} at ${job.company}, ${job.duration}`}
                                                className="w-2 h-2 rounded-full"
                                                style={{ backgroundColor: "#ffcc00" }}
                                            />
                                        </div>
                                        <motion.div
                                            initial={{ opacity: 0, x: 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                        >
                                            <Card className="shadow-lg hover:shadow-xl transition-shadow">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <Title level={5} className="!mt-0 !mb-0">{job.position}</Title>
                                                        <Paragraph className="!mb-0"><ProjectOutlined className="mr-2" />Project: {job.project}</Paragraph>
                                                        <Paragraph className="!mb-0"><ProductOutlined className="mr-2" />{job.company}</Paragraph>
                                                        <Paragraph className="!mb-1">
                                                            <CalendarOutlined className="mr-2" />
                                                            <time style={{ fontSize: 14, fontWeight: 400, color: "#8c8c8c" }}>{job.duration}</time>
                                                        </Paragraph>
                                                        <Paragraph className="!mb-0"><EnvironmentOutlined className="mr-2" />{job.location}</Paragraph>
                                                    </div>
                                                </div>
                                                {isComp && (
                                                    <div className="mb-4">
                                                        <strong>Key Achievements:</strong>
                                                        <ul className="mt-2 ml-4">
                                                            {job.achievements.map((achievement, i) => (
                                                                <li key={i} className="!mb-0">
                                                                    <CaretRightOutlined className="mr-1" />{achievement}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                                <div>
                                                    {job.technologies.map((tech, i) => (
                                                        <Tag key={i} color="blue" className="mb-1">
                                                            {tech}
                                                        </Tag>
                                                    ))}
                                                </div>
                                            </Card>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default WorkExperience;