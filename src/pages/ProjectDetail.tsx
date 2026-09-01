import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ConfigProvider, Typography } from "antd";
import ProjectHeader from "@/components/ProjectHeader";
import ProjectDetailTabs from "@/components/ProjectDetailTabs";
import { lightOnDarkTheme } from "@/components/ProjectTheme";
import projectData from "@/data/ProjectData.json";
import { ProjectItem } from "@/interfaces/globalInterfaces";

const { Title } = Typography;

const projects: ProjectItem[] = projectData;

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isComp, setIsComp] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsComp(window.innerWidth > 1050);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <main className="main-content">
        <ConfigProvider theme={lightOnDarkTheme}>
          <Title level={3} className="text-center">Project not found</Title>
        </ConfigProvider>
      </main>
    );
  }

  return (
    <main className="main-content pb-16">
      <ProjectHeader project={project} isComp={isComp} />
      <ProjectDetailTabs project={project} />
    </main>
  );
};

export default ProjectDetail;
