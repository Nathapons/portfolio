import React from "react";
import { Link } from "react-router-dom";
import { Tag, Steps, Typography, ConfigProvider } from "antd";
import { motion } from "framer-motion";
import { ArrowLeftOutlined, ArrowRightOutlined, CheckCircleOutlined, WarningOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

// All text white, headings (Title) yellow — matches the generic detail page's theme.
const lightOnDark = {
  token: { colorText: "white", colorTextSecondary: "white", colorTextHeading: "#ffcc00" },
  components: { Tag: { defaultColor: "rgba(0, 0, 0, 0.88)" } },
};

// Sections stagger in top-to-bottom on mount instead of appearing all at once.
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const tags = ["Security", "Penetration Testing", "Django", "GCP", "Fintech", "Compliance"];

const metrics = { before: 15, after: 1 };

// คำนวณ % การลดลงจากข้อมูล before/after แทนการ hardcode ตัวเลข
// เพื่อให้ badge อัปเดตอัตโนมัติถ้า metrics เปลี่ยนในอนาคต
const reductionPercent = Math.round(
  ((metrics.before - metrics.after) / metrics.before) * 100
);

const timeline = [
  {
    phase: "Initial Penetration Test",
    duration: "Apr 9–23, 2026",
    description: "Comprehensive security assessment",
    status: "completed" as const,
  },
  {
    phase: "Report & Analysis",
    duration: "Apr 30, 2026",
    description: "Initial findings documented",
    status: "completed" as const,
  },
  {
    phase: "Remediation Sprint",
    duration: "May–Jun 2026",
    description: "Fix vulnerabilities by priority",
    status: "completed" as const,
  },
  {
    phase: "Revisited Penetration Test",
    duration: "Jun 9–11, 2026",
    description: "Verify fixes and validate remediation",
    status: "completed" as const,
  },
  {
    phase: "Final Report",
    duration: "Jun 18, 2026",
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
  Backend: ["Python", "Django", "Django Ninja"],
  Infrastructure: ["GCP Cloud Run", "Cloud SQL", "Memorystore"],
  Testing: ["Penetration Testing (STH)", "Burp Suite", "Security Automation"],
  Deployment: ["GitHub Actions", "Cloud Build", "Monitoring"],
  Security: ["TLS/SSL", "OAuth 2.0", "Encryption"],
};

const SecurityRemediationDetail: React.FC = () => (
  <main className="main-content py-10 px-6">
    <ConfigProvider theme={lightOnDark}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-3xl mx-auto"
      >
        <motion.div variants={itemVariants}>
          <Link to="/project" className="inline-flex items-center gap-2 mb-6">
            <ArrowLeftOutlined /> All projects
          </Link>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Text type="secondary">
            A Bank of Thailand-regulated P2P lending platform · Full Stack Developer &amp; Security Remediation Lead
          </Text>
          <Title level={2} className="!mt-1">
            Security Remediation &amp; Penetration Testing Response
          </Title>
          <Paragraph className="text-lg">Reduced 15 vulnerabilities to 1 in 10 weeks</Paragraph>
          <div className="flex gap-2 flex-wrap mb-6">
            {tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 py-6"
        >
          <div className="w-full sm:w-auto sm:flex-1 sm:max-w-xs rounded-xl border border-red-500/40 bg-red-500/10 px-6 py-4 text-center">
            <div className="flex items-center justify-center gap-2 text-red-300 text-xs font-semibold uppercase tracking-wider">
              <WarningOutlined /> Before
            </div>
            <div className="text-4xl font-bold text-white mt-2">{metrics.before}</div>
            <div className="text-white/70 text-sm">findings</div>
          </div>

          {/* Badge ตรงกลางบอก % ที่ลดลง ช่วยให้ตัวเลข before/after สื่อ impact ได้ทันทีโดยไม่ต้องคำนวณเอง */}
          <div className="flex flex-col items-center gap-1 shrink-0">
            <ArrowRightOutlined className="text-xl text-white/40 rotate-90 sm:rotate-0" />
            <div className="rounded-full bg-[#ffcc00] text-black text-xs font-bold px-3 py-1 whitespace-nowrap">
              -{reductionPercent}%
            </div>
          </div>

          <div className="w-full sm:w-auto sm:flex-1 sm:max-w-xs rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-6 py-4 text-center">
            <div className="flex items-center justify-center gap-2 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              <CheckCircleOutlined /> After
            </div>
            <div className="text-4xl font-bold text-white mt-2">{metrics.after}</div>
            <div className="text-white/70 text-sm">findings</div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <Title level={4}>Timeline</Title>
          <Steps
            direction="vertical"
            size="small"
            items={timeline.map((phase) => ({
              title: phase.phase,
              description: `${phase.duration} — ${phase.description}`,
              status: phase.status === "completed" ? "finish" : "process",
            }))}
          />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8 flex flex-col gap-6">
          <Title level={4}>Challenges &amp; Solutions</Title>
          {challenges.map((challenge, i) => (
            <div key={challenge.title}>
              <Paragraph><Text strong>{challenge.title}.</Text> {challenge.description}</Paragraph>
              {solutions[i] && (
                <ul className="list-disc pl-6 text-white">
                  {solutions[i].items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <Title level={4}>Achievements</Title>
          <ul className="flex flex-col gap-2">
            {achievements.map((achievement) => (
              <li key={achievement.label}>
                {achievement.icon} <Text strong>{achievement.label}:</Text> {achievement.value}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-2 flex-wrap">
          {Object.values(techStack).flat().map((item) => <Tag key={item}>{item}</Tag>)}
        </motion.div>
      </motion.div>
    </ConfigProvider>
  </main>
);

export default SecurityRemediationDetail;
