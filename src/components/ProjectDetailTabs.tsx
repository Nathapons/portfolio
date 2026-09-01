import React from "react";
import { ConfigProvider, Tabs, TabsProps, Steps, Row, Col, Typography, Tag } from "antd";
import { createGlobalStyle } from "styled-components";
import { ProjectItem } from "@/interfaces/globalInterfaces";
import { lightOnDarkTheme } from "@/components/ProjectTheme";

const { Title, Text, Paragraph } = Typography;

// The Tabs "..." overflow menu is rendered as a portal onto its own light
// surface, but it inherits `colorText: white` from lightOnDarkTheme the same
// way the (dark-background) tab nav does — AntD ties both to the same token.
// Force its item text back to AntD's normal dark default so it stays legible
// against that light popup, same intent as the Tag fix in ProjectTheme.ts.
const TabsDropdownReadabilityFix = createGlobalStyle`
    .ant-tabs-dropdown-menu-item {
        color: rgba(0, 0, 0, 0.88) !important;
    }
`;

type ProjectTabItem = NonNullable<TabsProps["items"]>[number];

interface ProjectDetailTabsProps {
    project: ProjectItem;
}

const buildTimelineTab = (project: ProjectItem): ProjectTabItem | null => {
    if (!project.timeline) return null;

    return {
        key: "timeline",
        label: "Timeline",
        children: (
            <Steps
                direction="vertical"
                size="small"
                items={project.timeline.map((phase) => ({
                    title: phase.phase,
                    description: `${phase.duration} · ${phase.effort} — ${phase.description}`,
                    status: phase.status === "completed" ? "finish" : "process",
                }))}
            />
        ),
    };
};

const buildChallengesTab = (project: ProjectItem): ProjectTabItem | null => {
    if (!project.challenges && !project.solutions) return null;

    return {
        key: "challenges",
        label: "Challenges & Solutions",
        children: (
            <Row gutter={24}>
                <Col xs={24} lg={12}>
                    <Title level={5}>Challenges</Title>
                    {project.challenges?.map((challenge) => (
                        <Paragraph key={challenge.title}>
                            <Text strong>{challenge.title}</Text> — {challenge.description}
                        </Paragraph>
                    ))}
                </Col>
                <Col xs={24} lg={12}>
                    <Title level={5}>Solutions</Title>
                    {project.solutions?.map((solution) => (
                        <div key={solution.category} className="mb-3">
                            <Text strong>{solution.category}</Text>
                            <ul className="list-disc pl-5">
                                {solution.items.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </div>
                    ))}
                </Col>
            </Row>
        ),
    };
};

const buildTechStackTab = (project: ProjectItem): ProjectTabItem | null => {
    if (!project.techStack) return null;

    return {
        key: "stack",
        label: "Tech Stack",
        children: Object.entries(project.techStack).map(([category, items]) => (
            <div key={category} className="mb-3">
                <Text strong className="capitalize">{category}: </Text>
                {items.map((item) => <Tag key={item} color="cyan">{item}</Tag>)}
            </div>
        )),
    };
};

const buildSkillsTab = (project: ProjectItem): ProjectTabItem | null => {
    if (!project.skills) return null;

    return {
        key: "skills",
        label: "Skills",
        children: (
            <div className="flex gap-2 flex-wrap">
                {project.skills.map((skill) => <Tag key={skill} color="gold">{skill}</Tag>)}
            </div>
        ),
    };
};

const buildAchievementsTab = (project: ProjectItem): ProjectTabItem | null => {
    if (!project.achievements) return null;

    return {
        key: "achievements",
        label: "Achievements",
        children: (
            <Row gutter={[16, 16]}>
                {project.achievements.map((achievement) => (
                    <Col xs={24} sm={12} key={achievement.label}>
                        <div className="border border-zinc-600 rounded-lg p-3">
                            <span className="mr-2">{achievement.icon}</span>
                            <Text strong>{achievement.label}</Text>
                            <div>{achievement.value}</div>
                        </div>
                    </Col>
                ))}
            </Row>
        ),
    };
};

const ProjectDetailTabs: React.FC<ProjectDetailTabsProps> = ({ project }) => {
    const items = [
        buildTimelineTab(project),
        buildChallengesTab(project),
        buildTechStackTab(project),
        buildSkillsTab(project),
        buildAchievementsTab(project),
    ].filter((item): item is ProjectTabItem => item !== null);

    if (items.length === 0) return null;

    return (
        <div className="max-w-5xl mx-auto px-4">
            <TabsDropdownReadabilityFix />
            <ConfigProvider theme={lightOnDarkTheme}>
                <Tabs items={items} />
            </ConfigProvider>
        </div>
    );
};

export default ProjectDetailTabs;
