import React from "react";
import { useParams, Link } from "react-router-dom";
import { Tag, Steps, Collapse, Typography, ConfigProvider, theme } from "antd";
import { motion } from "framer-motion";
import { ArrowLeftOutlined } from "@ant-design/icons";

import { ProjectItem } from "@/interfaces/globalInterfaces";
import ProjectData from "../data/ProjectData.json";
import SecurityRemediationDetail from "../components/SecurityRemediationDetail";
import VendorComparisonTable from "../components/VendorComparisonTable";

const { Title, Text, Paragraph } = Typography;

const projects: ProjectItem[] = ProjectData as ProjectItem[];

// All text white, headings (Title) yellow — this page's fixed detail theme.
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

const customProjectDetails: Record<string, React.FC> = {
  "security-remediation-2026": SecurityRemediationDetail,
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // อ่าน fontFamily default ของ antd (ค่าเดียวกับที่หน้า Home ใช้ เพราะ
  // Greeting.tsx/WorkExperience.tsx ก็ไม่ได้ override fontFamily token
  // เหมือนกัน) มาตั้งเป็น font-family ของ <main> ด้วย เพื่อให้ plain HTML
  // element ในหน้านี้ (table cell ของ VendorComparisonTable, li ของ
  // achievements ฯลฯ) ได้ font ตัวเดียวกับ antd component (Title, Tag, Text)
  // แทนที่จะ inherit Montserrat จาก body (src/styles/globals.css) แล้วฟอนต์
  // ไม่ตรงกันในหน้าเดียวกัน
  const { token } = theme.useToken();

  const CustomDetail = id ? customProjectDetails[id] : undefined;
  if (CustomDetail) {
    return <CustomDetail />;
  }

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="main-content py-10 px-6" style={{ fontFamily: token.fontFamily }}>
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
    <main className="main-content py-10 px-6" style={{ fontFamily: token.fontFamily }}>
      <ConfigProvider theme={lightOnDark}>
        <motion.div
          key={project.id}
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
            <Text type="secondary">{project.company} · {project.role}</Text>
            <Title level={2} className="!mt-1">{project.title}</Title>
            <Paragraph className="text-lg">{project.subtitle}</Paragraph>
            <div className="flex gap-2 flex-wrap mb-6">
              {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
            </div>
          </motion.div>

          {project.metrics && (
            <motion.div variants={itemVariants} className="flex gap-8 mb-8 py-4 border-y border-zinc-700">
              <div>
                <Text type="secondary">Before</Text>
                <div className="text-2xl font-bold text-white">{project.metrics.before.totalVulnerabilities} findings</div>
              </div>
              <div>
                <Text type="secondary">After</Text>
                <div className="text-2xl font-bold text-white">{project.metrics.after.totalVulnerabilities} findings</div>
              </div>
            </motion.div>
          )}

          {project.timeline && (
            <motion.div variants={itemVariants} className="mb-8">
              <Title level={4}>Timeline</Title>
              <Steps
                direction="vertical"
                size="small"
                items={project.timeline.map((phase) => ({
                  title: phase.phase,
                  description: `${phase.duration} — ${phase.description}`,
                  status: phase.status === "completed" ? "finish" : "process",
                }))}
              />
            </motion.div>
          )}

          {project.challenges && project.solutions && (
            <motion.div variants={itemVariants} className="mb-8 flex flex-col gap-6">
              <Title level={4}>Challenges &amp; Solutions</Title>
              {project.comparisonTable && <VendorComparisonTable table={project.comparisonTable} />}
              {project.comparisonTable ? (
                // เมื่อมี comparisonTable มาก่อนแล้ว พับ challenge/solution แต่ละข้อ
                // ไว้ใน accordion แทนแสดงเต็มทันที — ตารางเป็นหลักฐานหลักที่เห็น
                // ก่อนเสมอ ส่วนรายละเอียดให้กดดูเองถ้าอยากรู้เพิ่ม (ผลตัดสินใจจาก
                // การทำ prototype 3 แบบเทียบกันก่อนหน้านี้)
                <Collapse
                  ghost
                  items={project.challenges.map((challenge, i) => ({
                    key: challenge.title,
                    label: <Text strong>{challenge.title}</Text>,
                    children: (
                      <>
                        <Paragraph>{challenge.description}</Paragraph>
                        {project.solutions?.[i] && (
                          <ul className="list-disc pl-6 text-white">
                            {project.solutions[i].items.map((item) => <li key={item}>{item}</li>)}
                          </ul>
                        )}
                      </>
                    ),
                  }))}
                />
              ) : (
                project.challenges.map((challenge, i) => (
                  <div key={challenge.title}>
                    <Paragraph><Text strong>{challenge.title}.</Text> {challenge.description}</Paragraph>
                    {project.solutions?.[i] && (
                      <ul className="list-disc pl-6 text-white">
                        {project.solutions[i].items.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    )}
                  </div>
                ))
              )}
            </motion.div>
          )}

          {project.achievements && (
            <motion.div variants={itemVariants} className="mb-8">
              <Title level={4}>Achievements</Title>
              <ul className="flex flex-col gap-2">
                {project.achievements.map((achievement) => (
                  <li key={achievement.label}>
                    {achievement.icon} <Text strong>{achievement.label}:</Text> {achievement.value}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {(project.techStack || project.skills) && (
            <motion.div variants={itemVariants} className="flex gap-2 flex-wrap">
              {project.techStack && Object.values(project.techStack).flat().map((item) => <Tag key={item}>{item}</Tag>)}
              {project.skills?.map((skill) => <Tag key={skill} color="blue">{skill}</Tag>)}
            </motion.div>
          )}
        </motion.div>
      </ConfigProvider>
    </main>
  );
};

export default ProjectDetail;
