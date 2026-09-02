import React from "react";

export interface Props {
    isComp: boolean
}

export interface MenuItemProps {
    name: string;
    path: string;
    icon: React.ReactNode;
}

export interface MenuBarProps {
    menuItems: MenuItemProps[];
}

export interface TechStackItem {
    src: string;
    alt: string;
}

export interface ExperienceItem {
    id: Number;
    position: string;
    company: string;
    location: string;
    duration: string;
    project: string;
    achievements: string[];
    technologies: string[];
}

export interface CertificateItem {
    id: number;
    title: string;
    issuer: string;
    date: string;
    imageUrl: string;
    credentialUrl: string;
}

export interface MetricSnapshot {
    date: string;
    totalVulnerabilities: number;
    highRisk: number;
    mediumRisk: number;
    lowRisk: number;
    veryLowRisk: number;
    effort: number;
    effortUnit: string;
    fixedCount?: number;
    successRate?: number;
}

export interface TimelinePhase {
    phase: string;
    duration: string;
    effort: string;
    description: string;
    status: "completed" | "in-progress" | "planned";
}

export interface Challenge {
    title: string;
    description: string;
}

export interface SolutionGroup {
    category: string;
    items: string[];
}

export interface Achievement {
    icon: string;
    label: string;
    value: string;
}

export type ProjectTheme = "security" | "resilience";

export interface ProjectItem {
    id: string;
    title: string;
    subtitle: string;
    company: string;
    role: string;
    status: string;
    startDate: string;
    endDate: string;
    tags: string[];
    theme: ProjectTheme;
    image?: string;
    metrics?: { before: MetricSnapshot; after: MetricSnapshot };
    timeline?: TimelinePhase[];
    challenges?: Challenge[];
    solutions?: SolutionGroup[];
    achievements?: Achievement[];
    techStack?: Record<string, string[]>;
    skills?: string[];
}
