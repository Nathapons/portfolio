import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Tag, ConfigProvider } from "antd";
import { motion } from "framer-motion";

import { ProjectItem } from "@/interfaces/globalInterfaces";
import ProjectIllustration from "@/components/ProjectIllustration";
import ProjectData from "../data/ProjectData.json";

const { Title, Text, Paragraph } = Typography;

const projects: ProjectItem[] = ProjectData as ProjectItem[];

// สีเน้น (accent) ของหน้านี้ รวมไว้ที่เดียวแทนการฮาร์ดโค้ดค่าสีซ้ำหลายจุด
// เพื่อให้แก้โทนสีได้จากจุดเดียวตาม clean-code rule ของโปรเจกต์
const ACCENT_COLOR = "#ffcc00";

const lightOnDark = {
  token: { colorText: "white", colorTextSecondary: "#a1a1aa" },
  components: { Tag: { defaultColor: "rgba(0, 0, 0, 0.88)" } },
};

// จำนวนแท็กสูงสุดที่โชว์ต่อโปรเจกต์ก่อนจะยุบเหลือ badge "+N" เพื่อไม่ให้
// ข้อมูลสำคัญ (เช่น Compliance, Fintech) หายไปแบบไม่มีร่องรอย
const MAX_VISIBLE_TAGS = 4;

// Clicking a project bounces the row (quick spring pop) before navigating to
// its detail page, instead of jumping there instantly.
const POP_DURATION_MS = 380;

const ProjectList: React.FC = () => {
  const navigate = useNavigate();
  const [poppingId, setPoppingId] = useState<string | null>(null);

  const handleOpen = (id: string) => {
    if (poppingId) return;
    setPoppingId(id);
    setTimeout(() => navigate(`/project/${id}`), POP_DURATION_MS);
  };

  return (
    <main className="main-content py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <ConfigProvider theme={{ token: { colorText: ACCENT_COLOR } }}>
            <Title level={2} className="!mb-2">Case Studies &amp; Impact</Title>
          </ConfigProvider>
          <Text type="secondary" className="text-lg">
            Real engineering work with measurable outcomes
          </Text>
        </motion.div>

        {projects.length === 0 && (
          <Text type="secondary" className="text-center py-10">
            No projects to show yet.
          </Text>
        )}

        {projects.map((project, index) => {
          const isPopping = poppingId === project.id;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.01 }}
              animate={
                isPopping
                  ? { scale: [1, 1.06, 0.98, 1.03, 1], opacity: [1, 1, 1, 1, 0] }
                  : { scale: 1, opacity: 1 }
              }
              transition={
                isPopping
                  ? { duration: POP_DURATION_MS / 1000, times: [0, 0.35, 0.6, 0.8, 1], ease: "easeInOut" }
                  : { duration: 0.6, delay: index * 0.1 }
              }
              onClick={() => handleOpen(project.id)}
              // role="link" + keyboard handler ทำให้แถวนี้กด Tab แล้วกด Enter/Space
              // เปิดโปรเจกต์ได้ ไม่ใช่ใช้ได้แค่เมาส์เหมือนเดิม (a11y)
              role="link"
              tabIndex={0}
              aria-label={`View case study: ${project.title}`}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  handleOpen(project.id);
                }
              }}
              className="group cursor-pointer flex flex-col gap-6 md:gap-10 py-10 border-b border-white/10 first:pt-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffcc00] md:flex-row"
            >
              <div className="md:w-2/5 relative rounded-xl overflow-hidden aspect-[16/10]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <ProjectIllustration theme={project.theme} />
                )}
              </div>

              <ConfigProvider theme={lightOnDark}>
                <div className="md:w-3/5 flex flex-col justify-center">
                  <Title level={3} className="!mt-1 !mb-2 !text-[#ffcc00] transition-colors">
                    {project.title}
                  </Title>
                  <Paragraph className="text-lg !mb-3 !text-white !font-bold">
                    {project.subtitle}
                  </Paragraph>
                  <div className="flex gap-2 flex-wrap mb-3">
                    {project.tags.slice(0, MAX_VISIBLE_TAGS).map((tag) => <Tag key={tag}>{tag}</Tag>)}
                    {project.tags.length > MAX_VISIBLE_TAGS && (
                      <Tag>+{project.tags.length - MAX_VISIBLE_TAGS}</Tag>
                    )}
                  </div>
                  <motion.span whileTap={{ scale: 0.9 }} style={{ display: "inline-block" }}>
                    <Text className="!text-[#ffcc00] group-hover:underline">Read the case study →</Text>
                  </motion.span>
                </div>
              </ConfigProvider>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
};

export default ProjectList;
