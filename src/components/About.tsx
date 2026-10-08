import React from "react";
import { Typography, Tag, theme } from "antd";
import { CaretRightOutlined, EnvironmentOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

import StatCardSection from "@/components/StatCardSection";
import { AboutContent, Props } from "@/interfaces/globalInterfaces";
import aboutData from "@/data/About.json";

const { Paragraph, Text } = Typography;

const ACCENT_COLOR = "#ffcc00";
const about: AboutContent = aboutData;
const BODY_FONT = "!text-sm !font-normal";
const BODY_TEXT = `${BODY_FONT} !text-white`;

const StrengthList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="mt-2 ml-4">
    {items.map((item) => (
      <li key={item} className={`!mb-0 ${BODY_TEXT}`}>
        <CaretRightOutlined className="mr-1" />{item}
      </li>
    ))}
  </ul>
);

const About: React.FC<Props> = ({ isComp }) => {
  const { token } = theme.useToken();
  return (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="flex justify-center my-6"
  >
    <div className="w-full" style={{ maxWidth: 960, padding: "0 16px", fontFamily: token.fontFamily }}>
      <StatCardSection isComp={isComp} title="About Me" accentColor={ACCENT_COLOR}>
        <Paragraph className={`${BODY_FONT} !mb-2 !text-amber-400`}>{about.headline}</Paragraph>
        <Paragraph className={BODY_TEXT}>{about.summary}</Paragraph>

        <Text className={BODY_TEXT}>What I'm good at</Text>
        <StrengthList items={about.strengths} />

        <Text className={`${BODY_TEXT} block mt-4`}>What I'm looking for</Text>
        <div className={`mt-2 flex flex-col gap-1 ${BODY_TEXT}`}>
          <div className="flex gap-2 flex-wrap items-center">
            <Text className={BODY_TEXT}>Roles:</Text>
            {about.lookingFor.roles.map((role) => <Tag key={role} color="blue" className={BODY_FONT}>{role}</Tag>)}
          </div>
          <div>
            <Text className={BODY_TEXT}><EnvironmentOutlined className="mr-2" />Location: {about.lookingFor.location}</Text>
          </div>
          <div>
            <Text className={BODY_TEXT}><ClockCircleOutlined className="mr-2" />Availability: {about.lookingFor.availability}</Text>
          </div>
        </div>
      </StatCardSection>
    </div>
  </motion.div>
);
};

export default About;
