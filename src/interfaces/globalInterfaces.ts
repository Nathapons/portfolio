import React from "react";

export interface Props {
    isComp: boolean
}

export interface MenuItemProps {
    name: string;
    path: string;
    icon: React.ReactNode;
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
