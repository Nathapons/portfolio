import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Tag, Steps, Tabs, Statistic, Typography, ConfigProvider } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const lightOnDark = {
  token: { colorText: "white", colorTextSecondary: "#a1a1aa" },
  components: { Tag: { defaultColor: "rgba(0, 0, 0, 0.88)" } },
};

const timeline = [
  {
    phase: "Initial Penetration Test",
    description: "Comprehensive security assessment",
    status: "completed" as const,
  },
  {
    phase: "Report & Analysis",
    description: "Initial findings documented",
    status: "completed" as const,
  },
  {
    phase: "Remediation Sprint",
    description: "Fix vulnerabilities by priority",
    status: "completed" as const,
  },
  {
    phase: "Revisited Penetration Test",
    description: "Verify fixes and validate remediation",
    status: "completed" as const,
  },
  {
    phase: "Final Report",
    description: "Clearance for production",
    status: "completed" as const,
  },
];

const challenges = [
  {
    title: "Multiple High-Risk Vulnerabilities",
    description: "Found 5 high-risk issues affecting authentication, authorization, and sensitive data exposure",
  },
  {
    title: "Regulatory Compliance Pressure",
    description: "Bank of Thailand compliance requirements for P2P lending platforms",
  },
  {
    title: "Complex Architecture",
    description: "Multiple services (the lending platform API, the internal backoffice system, mobile apps) to secure",
  },
];

const solutions = [
  {
    category: "Authentication & Authorization",
    items: [
      "Implemented middleware for all API endpoints",
      "Fixed broken access control across services",
      "Added proper session validation",
    ],
  },
  {
    category: "Data Protection",
    items: [
      "Removed debug mode from production",
      "Added input validation and output encoding",
      "Implemented secure cookie attributes",
    ],
  },
  {
    category: "Infrastructure Security",
    items: [
      "Updated Django security headers",
      "Configured TLS properly",
      "Enhanced logging and monitoring",
    ],
  },
];

const achievements = [
  { icon: "🔒", label: "Security", value: "All high-risk vulnerabilities eliminated" },
  { icon: "📋", label: "Compliance", value: "Bank of Thailand regulation ready" },
  { icon: "⚡", label: "Performance", value: "93% remediation success rate" },
  { icon: "🔄", label: "Verification", value: "Independent security audit passed" },
];

const techStack: Record<string, string[]> = {
  backend: ["Python", "Django", "Django Ninja"],
  infrastructure: ["GCP Cloud Run", "Cloud SQL", "Memorystore"],
  testing: ["Penetration Testing (STH)", "Burp Suite", "Security Automation"],
  deployment: ["GitHub Actions", "Cloud Build", "Monitoring"],
  security: ["TLS/SSL", "OAuth 2.0", "Encryption"],
};

const statCards = [
  { title: "Findings before", value: 15, bg: "#FFD0D0" },
  { title: "Findings after", value: 1, bg: "#D0EFC0" },
  { title: "Effort", value: 4, suffix: "man-days", bg: "#FFFDAB" },
  { title: "Success rate", value: 93.3, suffix: "%", bg: "#C6B5FD" },
];

const SecurityRemediationDetail: React.FC = () => (
  <main className="main-content py-10 px-6">
    <div className="max-w-5xl mx-auto">
      <ConfigProvider theme={lightOnDark}>
        <div className="mb-6">
          <Link to="/project" className="inline-flex items-center gap-2 mb-2">
            <ArrowLeftOutlined /> Back to projects
          </Link>
          <Title level={2} className="!mt-0 !mb-1">
            Security Remediation &amp; Penetration Testing Response
          </Title>
          <Text style={{ color: "#ffffff" }}>
            A Bank of Thailand-regulated P2P lending platform · Full Stack Developer &amp; Security Remediation Lead · 2026-04-09 – 2026-06-18
          </Text>
        </div>
      </ConfigProvider>

      <Row gutter={16} className="mb-6">
        {statCards.map((metric) => (
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

      <ConfigProvider theme={lightOnDark}>
        <Tabs
          items={[
            {
              key: "timeline",
              label: "Timeline",
              children: (
                <Steps
                  items={timeline.map((phase) => ({
                    title: phase.phase,
                    description: <span style={{ color: "#ffffff" }}>{phase.description}</span>,
                    status: phase.status === "completed" ? "finish" : "process",
                  }))}
                />
              ),
            },
            {
              key: "challenges",
              label: "Challenges & Solutions",
              children: (
                <Row gutter={24}>
                  <Col span={12}>
                    <Title level={5}>Challenges</Title>
                    {challenges.map((challenge) => (
                      <Paragraph key={challenge.title}>
                        <Text strong>{challenge.title}</Text> — {challenge.description}
                      </Paragraph>
                    ))}
                  </Col>
                  <Col span={12}>
                    <Title level={5}>Solutions</Title>
                    {solutions.map((solution) => (
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
            {
              key: "stack",
              label: "",
              children: Object.entries(techStack).map(([category, items]) => (
                <div key={category} className="mb-3">
                  <Text strong>{category}: </Text>
                  {items.map((item) => <Tag key={item}>{item}</Tag>)}
                </div>
              )),
            },
            {
              key: "achievements",
              label: "",
              children: (
                <Row gutter={16}>
                  {achievements.map((achievement) => (
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
          ]}
        />
      </ConfigProvider>
    </div>
  </main>
);

export default SecurityRemediationDetail;
