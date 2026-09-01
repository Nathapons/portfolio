import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Card, Tag, ConfigProvider } from "antd";
import { CalendarOutlined, ProjectOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

import { ProjectItem } from "@/interfaces/globalInterfaces";
import ProjectData from "../data/ProjectData.json";

const { Title, Paragraph } = Typography;

const projects: ProjectItem[] = ProjectData as ProjectItem[];

const ProjectList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="main-content py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ConfigProvider
            theme={{
              token: {
                colorText: "#ffcc00",
              },
            }}
          >
            <Title level={3} className="text-center">Projects</Title>
            <Paragraph className="text-center text-lg text-yellow">
              Self-contained pieces of engineering work I've delivered
            </Paragraph>
          </ConfigProvider>
        </motion.div>

        <div className="relative mt-6">
          <div
            className="absolute top-1 bottom-1 w-[2px]"
            style={{ left: 3, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
          />
          <div className="flex flex-col gap-6">
            {projects.map((project, index) => (
              <div key={project.id} className="grid grid-cols-[8px_1fr] gap-3">
                <div className="pt-2">
                  <div
                    role="img"
                    aria-label={`${project.title}, ${project.startDate} – ${project.endDate}`}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "#ffcc00" }}
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    hoverable
                    onClick={() => navigate(`/project/${project.id}`)}
                    className="shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Title level={5} className="!mt-0 !mb-0">{project.title}</Title>
                    <Paragraph className="!mb-0"><ProjectOutlined className="mr-2" />{project.company}</Paragraph>
                    <Paragraph className="!mb-1">
                      <CalendarOutlined className="mr-2" />
                      <time style={{ fontSize: 14, fontWeight: 400, color: "#8c8c8c" }}>
                        {project.startDate} – {project.endDate}
                      </time>
                    </Paragraph>
                    <Paragraph className="!mb-2">{project.subtitle}</Paragraph>
                    <div>
                      {project.tags.map((tag) => (
                        <Tag key={tag} color="blue" className="mb-1">{tag}</Tag>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectList;
