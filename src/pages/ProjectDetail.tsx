import React from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Col, Card, Tag, Steps, Tabs, Statistic, Typography, ConfigProvider } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

import { ProjectItem } from "@/interfaces/globalInterfaces";
import ProjectData from "../data/ProjectData.json";

const { Title, Text, Paragraph } = Typography;

const projects: ProjectItem[] = ProjectData as ProjectItem[];

const lightOnDark = {
  token: { colorText: "white", colorTextSecondary: "#a1a1aa" },
  components: { Tag: { defaultColor: "rgba(0, 0, 0, 0.88)" } },
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="main-content py-10 px-6">
        <ConfigProvider theme={lightOnDark}>
          <div className="max-w-3xl mx-auto text-center">
            <Title level={3}>Project not found</Title>
            <Paragraph>
              We couldn't find a project matching this link.
            </Paragraph>
            <Link to="/project" className="inline-flex items-center gap-2">
              <ArrowLeftOutlined /> Back to projects
            </Link>
          </div>
        </ConfigProvider>
      </main>
    );
  }

  return (
    <main className="main-content py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <ConfigProvider theme={lightOnDark}>
          <div className="mb-6">
            <Link to="/project" className="inline-flex items-center gap-2 mb-2">
              <ArrowLeftOutlined /> Back to projects
            </Link>
            <Title level={2} className="!mt-0 !mb-1">{project.title}</Title>
            <Text style={{ color: "#ffffff" }}>
              {project.company} · {project.role} · {project.startDate} – {project.endDate}
            </Text>
          </div>
        </ConfigProvider>

        {project.metrics && (
          <Row gutter={16} className="mb-6">
            {[
              { title: "Findings before", value: project.metrics.before.totalVulnerabilities, bg: "#FFD0D0" },
              { title: "Findings after", value: project.metrics.after.totalVulnerabilities, bg: "#D0EFC0" },
              { title: "Effort", value: project.metrics.after.effort, suffix: project.metrics.after.effortUnit, bg: "#FFFDAB" },
              {
                title: "Success rate",
                value: project.metrics.after.successRate ?? "—",
                suffix: project.metrics.after.successRate ? "%" : "",
                bg: "#C6B5FD",
              },
            ].map((metric) => (
              <Col span={6} key={metric.title}>
                <Card style={{ backgroundColor: metric.bg }}>
                  <Statistic
                    title={<span style={{ color: "#000000" }}>{metric.title}</span>}
                    value={metric.value}
                    suffix={metric.suffix}
                    valueStyle={{ color: "#000000" }}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        )}

        <ConfigProvider theme={lightOnDark}>
          <Tabs
            items={[
              project.timeline && {
                key: "timeline",
                label: "Timeline",
                children: (
                  <Steps
                    items={project.timeline.map((phase) => ({
                      title: phase.phase,
                      description: <span style={{ color: "#ffffff" }}>{phase.description}</span>,
                      status: phase.status === "completed" ? "finish" : "process",
                    }))}
                  />
                ),
              },
              (project.challenges || project.solutions) && {
                key: "challenges",
                label: "Challenges & Solutions",
                children: (
                  <Row gutter={24}>
                    <Col span={12}>
                      <Title level={5}>Challenges</Title>
                      {project.challenges?.map((challenge) => (
                        <Paragraph key={challenge.title}>
                          <Text strong>{challenge.title}</Text> — {challenge.description}
                        </Paragraph>
                      ))}
                    </Col>
                    <Col span={12}>
                      <Title level={5}>Solutions</Title>
                      {project.solutions?.map((solution) => (
                        <div key={solution.category} className="mb-3">
                          <Text strong>{solution.category}</Text>
                          <ul className="list-disc pl-5">
                            {solution.items.map((item) => <li key={item}>{item}</li>)}
                          </ul>
                        </div>
                      ))}
                    </Col>
                  </Row>
                ),
              },
              project.techStack && {
                key: "stack",
                label: "",
                children: Object.entries(project.techStack).map(([category, items]) => (
                  <div key={category} className="mb-3">
                    <Text strong>{category}: </Text>
                    {items.map((item) => <Tag key={item}>{item}</Tag>)}
                  </div>
                )),
              },
              project.achievements && {
                key: "achievements",
                label: "",
                children: (
                  <Row gutter={16}>
                    {project.achievements.map((achievement) => (
                      <Col span={12} key={achievement.label}>
                        <div className="border border-zinc-600 rounded-lg p-3">
                          {achievement.icon} <Text strong>{achievement.label}</Text>
                          <div className="text-white">{achievement.value}</div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                ),
              },
            ].filter((item): item is NonNullable<typeof item> => Boolean(item))}
          />
        </ConfigProvider>
      </div>
    </main>
  );
};

export default ProjectDetail;
