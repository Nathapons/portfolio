import React, { useEffect, useState } from "react";
import { Typography, Timeline, Card, Tag, Row, Col, ConfigProvider } from "antd"
import { CalendarOutlined, EnvironmentOutlined } from "@ant-design/icons"
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
        <div className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <ConfigProvider
                        theme={{
                            token: {
                                colorText: '#ffcc00',
                                fontSizeHeading3: (isComp ? 35 : 24)
                            },
                        }}
                    >
                        <Title level={3} style={{ textAlign: 'center' }}>Work Experience</Title>
                    </ConfigProvider>
                </motion.div>
                <Row gutter={[24, 24]}>
                    <Col span={24}>
                        <Timeline
                        mode="left"
                        items={workExperienceData.map((job, index) => ({
                            dot: <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg" />,
                            children: (
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Card className="ml-4 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                    <Title level={4} className="mb-1">
                                        {job.position}
                                    </Title>
                                    <Title level={5} className="text-blue-600 mb-2">
                                        {job.company}
                                    </Title>
                                    </div>
                                    <div className="text-right text-gray-500">
                                    <div className="flex items-center mb-1">
                                        <CalendarOutlined className="mr-2" />
                                        {job.duration}
                                    </div>
                                    <div className="flex items-center">
                                        <EnvironmentOutlined className="mr-2" />
                                        {job.location}
                                    </div>
                                    </div>
                                </div>
                                <Paragraph className="mb-4">Project: {job.project}</Paragraph>
                                <div className="mb-4">
                                    <strong>Key Achievements:</strong>
                                    <ul className="mt-2 ml-4">
                                    {job.achievements.map((achievement, i) => (
                                        <li key={i} className="mb-1">
                                        {achievement}
                                        </li>
                                    ))}
                                    </ul>
                                </div>
                                <div>
                                    {job.technologies.map((tech, i) => (
                                    <Tag key={i} color="blue" className="mb-1">
                                        {tech}
                                    </Tag>
                                    ))}
                                </div>
                                </Card>
                            </motion.div>
                            ),
                        }))}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default WorkExperience;