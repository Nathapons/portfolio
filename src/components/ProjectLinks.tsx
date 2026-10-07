import React from "react";
import { Button } from "antd";
import { GithubOutlined, LinkOutlined } from "@ant-design/icons";

import { ProjectLink, ProjectLinkKind } from "@/interfaces/globalInterfaces";

const LINK_ICONS: Record<ProjectLinkKind, React.ReactNode> = {
  github: <GithubOutlined />,
  demo: <LinkOutlined />,
};

interface ProjectLinksProps {
  links: ProjectLink[];
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ links }) => (
  <div className="flex gap-3 flex-wrap">
    {links.map((link) => (
      <Button
        key={link.url}
        ghost
        icon={LINK_ICONS[link.kind]}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(event) => event.stopPropagation()}
      >
        {link.label}
      </Button>
    ))}
  </div>
);

export default ProjectLinks;
