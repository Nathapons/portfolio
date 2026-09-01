import React from "react";

import { ProjectTheme } from "@/interfaces/globalInterfaces";

interface ProjectIllustrationProps {
  theme: ProjectTheme;
}

const ProjectIllustration: React.FC<ProjectIllustrationProps> = ({ theme }) => (
  <svg viewBox="0 0 64 64" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
    <rect width={64} height={64} fill="#151519" />
    {theme === "security" ? (
      <>
        <polygon points="32,10 52,44 12,44" fill="#ffcc00" opacity={0.85} transform="rotate(-8 32 32)" />
        <circle cx={38} cy={30} r={14} fill="#5b3df5" opacity={0.55} />
        <rect x={14} y={16} width={18} height={18} fill="#22d3c9" opacity={0.3} transform="rotate(20 23 25)" />
      </>
    ) : (
      <>
        <circle cx={26} cy={26} r={16} fill="#22d3c9" opacity={0.5} />
        <polygon points="46,14 58,38 34,38" fill="#ffcc00" opacity={0.8} transform="rotate(12 46 26)" />
        <rect x={20} y={34} width={20} height={20} rx={4} fill="#5b3df5" opacity={0.35} transform="rotate(-15 30 44)" />
      </>
    )}
  </svg>
);

export default ProjectIllustration;
