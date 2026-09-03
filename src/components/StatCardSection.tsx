import React from "react";
import styled from "styled-components";
import { Props } from "../interfaces/globalInterfaces";

const CARD_BG = '#22232a';
const CARD_BORDER = '#3a3b44';

const Card = styled.div<{ $accent: string }>`
    width: 100%;
    background: ${CARD_BG};
    border: 1px solid ${CARD_BORDER};
    border-radius: 16px;
    transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;

    &:hover {
        border-color: ${({ $accent }) => $accent}88;
        box-shadow: 0 0 28px ${({ $accent }) => $accent}22;
        transform: translateY(-3px);
    }
`;

const Header = styled.div<{ $accent: string }>`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 18px;

    &::before {
        content: '';
        width: 4px;
        height: 18px;
        border-radius: 2px;
        background: ${({ $accent }) => $accent};
    }
`;

const Title = styled.span`
    font-size: 16px;
    font-weight: 700;
    color: #e6e6e8;
    letter-spacing: 0.02em;
`;

interface StatCardSectionProps extends Props {
    title: string;
    accentColor: string;
    children: React.ReactNode;
}

const StatCardSection: React.FC<StatCardSectionProps> = ({ title, accentColor, isComp, children }) => (
    <Card $accent={accentColor} style={{ padding: isComp ? '28px 32px' : '20px 16px' }}>
        <Header $accent={accentColor}>
            <Title>{title}</Title>
        </Header>
        {children}
    </Card>
);

export default StatCardSection;
