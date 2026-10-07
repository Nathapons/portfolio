import React, { useEffect, useState } from "react";
import { Typography, Progress } from "antd";
import { motion } from "framer-motion";

import StatCardSection from "@/components/StatCardSection";
import { SkillCategory, SkillLevel } from "@/interfaces/globalInterfaces";
import skillData from "@/data/Skills.json";

const { Title, Text } = Typography;

const skillCategories: SkillCategory[] = skillData as SkillCategory[];

const ACCENT_COLOR = "#ffcc00";
const DESKTOP_MIN_WIDTH = 1050;

const LEVEL_PERCENT: Record<SkillLevel, number> = {
  Expert: 95,
  Advanced: 80,
  Intermediate: 60,
  Beginner: 30,
};

const Skills: React.FC = () => {
  const [isComp, setIsComp] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsComp(window.innerWidth > DESKTOP_MIN_WIDTH);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="main-content py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <div className="text-center mb-4">
          <Title level={2} className="!mb-2 !text-[#ffcc00]">Skills</Title>
          <Text className="text-lg !text-zinc-400">
            Grouped by category, with an honest level for each
          </Text>
        </div>

        {skillCategories.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <StatCardSection isComp={isComp} title={category.category} accentColor={ACCENT_COLOR}>
              <div className="flex flex-col gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-baseline gap-4">
                      <Text strong className="!text-white">{skill.name}</Text>
                      <Text className="!text-[#ffcc00]">{skill.level}</Text>
                    </div>
                    <Progress
                      percent={LEVEL_PERCENT[skill.level]}
                      showInfo={false}
                      strokeColor={ACCENT_COLOR}
                      trailColor="#3a3b44"
                      size="small"
                    />
                    <Text className="!text-zinc-400 text-sm">{skill.note}</Text>
                  </div>
                ))}
              </div>
            </StatCardSection>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Skills;
