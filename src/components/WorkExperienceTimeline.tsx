import React from "react";
import { Props } from "../interfaces/globalInterfaces";
import { Col, ConfigProvider, Row, Image, Alert, Typography } from "antd";
import experienceData from '../data/Experience.json';
import { ExperienceItem } from "../interfaces/globalInterfaces";

const { Paragraph } = Typography;

const WorkExperienceTimeline: React.FC<Props> = ({ isComp }) => {
    return (
        <h1>Work Experience Time line</h1>
    )
}

export default WorkExperienceTimeline;