import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, ConfigProvider, Row, Col, Card, Statistic, Badge, Tag } from "antd";
import { ArrowLeftOutlined, CalendarOutlined, ProjectOutlined } from "@ant-design/icons";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { ProjectItem } from "@/interfaces/globalInterfaces";
import { lightOnDarkTheme, projectAccentColors } from "@/components/ProjectTheme";

const { Title, Text, Paragraph } = Typography;

interface ProjectHeaderProps {
    project: ProjectItem;
    isComp: boolean;
}

const buildRiskComparisonData = (project: ProjectItem) => {
    if (!project.metrics) return [];

    const { before, after } = project.metrics;
    return [
        { severity: "High", before: before.highRisk, after: after.highRisk },
        { severity: "Medium", before: before.mediumRisk, after: after.mediumRisk },
        { severity: "Low", before: before.lowRisk, after: after.lowRisk },
        { severity: "Very Low", before: before.veryLowRisk, after: after.veryLowRisk },
    ];
};

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project, isComp }) => {
    const navigate = useNavigate();
    const riskComparisonData = buildRiskComparisonData(project);

    return (
        <div className="max-w-5xl mx-auto px-4">
            <ConfigProvider theme={lightOnDarkTheme}>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                    <div>
                        <Text
                            onClick={() => navigate(-1)}
                            className="cursor-pointer inline-flex items-center gap-2 mb-2"
                        >
                            <ArrowLeftOutlined /> Back
                        </Text>
                        <Title level={2} className="!mt-0 !mb-1">{project.title}</Title>
                        <Paragraph className="!mb-2 text-lg">{project.subtitle}</Paragraph>
                        <Text type="secondary">
                            <ProjectOutlined className="mr-2" />{project.company} · {project.role}
                        </Text>
                        <br />
                        <Text type="secondary">
                            <CalendarOutlined className="mr-2" />{project.startDate} – {project.endDate}
                        </Text>
                    </div>
                    <Badge status="success" text={project.status} />
                </div>
                <div className="flex gap-2 flex-wrap mb-6">
                    {project.tags.map((tag) => <Tag key={tag} color="blue">{tag}</Tag>)}
                </div>
            </ConfigProvider>

            {project.metrics && (
                <>
                    <Row gutter={[16, 16]} className="mb-6">
                        <Col xs={12} lg={6}>
                            <Card style={{ borderTop: `4px solid ${projectAccentColors.before}` }}>
                                <Statistic
                                    title="Findings before"
                                    value={project.metrics.before.totalVulnerabilities}
                                    valueStyle={{ color: projectAccentColors.before }}
                                />
                            </Card>
                        </Col>
                        <Col xs={12} lg={6}>
                            <Card style={{ borderTop: `4px solid ${projectAccentColors.after}` }}>
                                <Statistic
                                    title="Findings after"
                                    value={project.metrics.after.totalVulnerabilities}
                                    valueStyle={{ color: projectAccentColors.after }}
                                />
                            </Card>
                        </Col>
                        <Col xs={12} lg={6}>
                            <Card style={{ borderTop: `4px solid ${projectAccentColors.effort}` }}>
                                <Statistic
                                    title="Verification effort"
                                    value={project.metrics.after.effort}
                                    suffix={project.metrics.after.effortUnit}
                                    valueStyle={{ color: projectAccentColors.effort }}
                                />
                            </Card>
                        </Col>
                        <Col xs={12} lg={6}>
                            <Card style={{ borderTop: `4px solid ${projectAccentColors.success}` }}>
                                <Statistic
                                    title="Remediation success"
                                    value={project.metrics.after.successRate ?? "—"}
                                    suffix={project.metrics.after.successRate ? "%" : ""}
                                    valueStyle={{ color: projectAccentColors.success }}
                                />
                            </Card>
                        </Col>
                    </Row>

                    <Card className="mb-6">
                        <Title level={5} className="!mt-0">Vulnerabilities by severity — before vs. after</Title>
                        <ResponsiveContainer width="100%" height={isComp ? 300 : 220}>
                            <BarChart data={riskComparisonData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="severity" />
                                <YAxis allowDecimals={false} />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="before" name="Before" fill={projectAccentColors.before} radius={[4, 4, 0, 0]} />
                                <Bar dataKey="after" name="After" fill={projectAccentColors.after} radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                </>
            )}
        </div>
    );
};

export default ProjectHeader;
