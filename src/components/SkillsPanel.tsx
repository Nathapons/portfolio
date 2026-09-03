import { useEffect, useState } from "react";
import { Image } from "antd";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import StatCardSection from "./StatCardSection";
import languageSkillData from "../data/MySkill.json";
import cloudSkillData from "../data/CloudSkill.json";
import { Props, TechStackItem } from "../interfaces/globalInterfaces";

interface LanguageStat {
    name: string;
    percent: number;
    color: string;
}

interface GithubRepo {
    language: string | null;
    fork: boolean;
}

const LANGUAGE_COLORS: Record<string, string> = {
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    Python: '#3572A5',
    CSS: '#563d7c',
    HTML: '#e34c26',
    Java: '#b07219',
    'C#': '#178600',
    C: '#555555',
    'C++': '#f34b7d',
    Go: '#00ADD8',
    Rust: '#dea584',
    PHP: '#4F5D95',
    Ruby: '#701516',
    Swift: '#F05138',
    Kotlin: '#A97BFF',
    Shell: '#89e051',
    Dart: '#00B4AB',
    Vue: '#41b883',
    SCSS: '#c6538c',
};
const FALLBACK_COLOR = '#8b8b8b';

const LANGUAGES_ACCENT = '#ffcc00';
const CLOUD_ACCENT = '#38bdf8';
const GITHUB_ACCENT = '#a78bfa';

type SkillTabKey = 'languages' | 'cloud' | 'github';

interface SkillTab {
    key: SkillTabKey;
    label: string;
    shortLabel: string;
    accent: string;
}

// Cloud & GitHub tabs are always available; the GitHub tab only appears once
// the API call below resolves, mirroring the old GithubLanguage component's
// behavior of omitting the section entirely when stats can't be fetched.
const BASE_TABS: SkillTab[] = [
    { key: 'languages', label: 'Languages & Frameworks', shortLabel: 'Languages', accent: LANGUAGES_ACCENT },
    { key: 'cloud', label: 'Cloud & DevOps', shortLabel: 'Cloud', accent: CLOUD_ACCENT },
];
const GITHUB_TAB: SkillTab = { key: 'github', label: 'Most used languages in GitHub', shortLabel: 'GitHub', accent: GITHUB_ACCENT };

const SkillGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;

const SkillChip = styled.div<{ $accent: string }>`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;

    &:hover {
        border-color: ${({ $accent }) => $accent}aa;
        background: rgba(255, 255, 255, 0.08);
        transform: translateY(-2px);
    }
`;

const SkillLabel = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: #e6e6e8;
    white-space: nowrap;
`;

const TabBar = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 4px;
`;

// ใช้ styled(motion.button) แทน styled.button ธรรมดา เพื่อให้ framer-motion
// ควบคุม prop เช่น whileTap ได้โดยตรงบน element เดียวกัน ไม่ต้องห่อ wrapper เพิ่ม
const TabButton = styled(motion.button)<{ $active: boolean; $accent: string }>`
    padding: 6px 14px;
    border-radius: 999px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid ${({ $active, $accent }) => ($active ? $accent : '#3a3b44')};
    background: ${({ $active, $accent }) => ($active ? `${$accent}22` : 'transparent')};
    color: ${({ $active }) => ($active ? '#fff' : '#9a9ca3')};
`;

const SkillChips: React.FC<{ isComp: boolean; accent: string; skills: TechStackItem[] }> = ({ isComp, accent, skills }) => (
    <SkillGrid>
        {skills.map((item, index) => (
            <SkillChip key={index} $accent={accent}>
                <Image src={item.src} alt={item.alt} width={isComp ? 28 : 22} preview={false} />
                <SkillLabel>{item.alt}</SkillLabel>
            </SkillChip>
        ))}
    </SkillGrid>
);

const GithubBars: React.FC<{ languages: LanguageStat[] }> = ({ languages }) => (
    <>
        <div style={{ display: 'flex', width: '100%', height: 10, borderRadius: 6, overflow: 'hidden', gap: 2 }}>
            {languages.map((lang) => (
                <div key={lang.name} style={{ height: '100%', background: lang.color, width: `${lang.percent}%` }} />
            ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 16 }}>
            {languages.map((lang) => (
                <div key={lang.name} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: '#c7c9cf' }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: lang.color }} />
                    <span style={{ fontWeight: 600 }}>{lang.name}</span>
                    <span style={{ color: '#9a9ca3' }}>{lang.percent}%</span>
                </div>
            ))}
        </div>
    </>
);

export default function SkillsPanel({ isComp }: Props) {
    const [githubLanguages, setGithubLanguages] = useState<LanguageStat[]>([]);
    const [activeTab, setActiveTab] = useState<SkillTabKey>('languages');

    useEffect(() => {
        let cancelled = false;

        (async () => {
            try {
                const res = await fetch('https://api.github.com/users/Nathapons/repos?per_page=100&type=owner');
                if (!res.ok) throw new Error('Failed to fetch repositories');
                const repos: GithubRepo[] = await res.json();

                const counts: Record<string, number> = {};
                repos
                    .filter((repo) => !repo.fork && repo.language)
                    .forEach((repo) => {
                        const lang = repo.language as string;
                        counts[lang] = (counts[lang] || 0) + 1;
                    });

                const total = Object.values(counts).reduce((sum, count) => sum + count, 0);
                if (total === 0 || cancelled) return;

                const stats = Object.entries(counts)
                    .map(([name, count]) => ({
                        name,
                        percent: Math.round((count / total) * 100),
                        color: LANGUAGE_COLORS[name] ?? FALLBACK_COLOR,
                    }))
                    .sort((a, b) => b.percent - a.percent)
                    .slice(0, 6);

                if (!cancelled) setGithubLanguages(stats);
            } catch {
                // silently ignore — GitHub tab is omitted when stats are unavailable
            }
        })();

        return () => {
            cancelled = true;
        };
    }, []);

    const tabs = githubLanguages.length > 0 ? [...BASE_TABS, GITHUB_TAB] : BASE_TABS;
    const active = tabs.find((tab) => tab.key === activeTab) ?? tabs[0];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center mt-6"
        >
            <div className="w-full" style={{ maxWidth: 960, padding: '0 16px' }}>
                <StatCardSection isComp={isComp} title={active.label} accentColor={active.accent}>
                    <TabBar>
                        {tabs.map((tab) => (
                            <TabButton
                                key={tab.key}
                                $active={tab.key === active.key}
                                $accent={tab.accent}
                                onClick={() => setActiveTab(tab.key)}
                                whileTap={{ scale: 0.9 }}
                            >
                                {tab.shortLabel}
                            </TabButton>
                        ))}
                    </TabBar>
                    {/* mode="wait" กันไม่ให้เนื้อหาเก่า-ใหม่ fade ทับกันตอนสลับแท็บเร็ว ๆ */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active.key}
                            style={{ marginTop: 16 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {active.key === 'languages' && <SkillChips isComp={isComp} accent={LANGUAGES_ACCENT} skills={languageSkillData} />}
                            {active.key === 'cloud' && <SkillChips isComp={isComp} accent={CLOUD_ACCENT} skills={cloudSkillData} />}
                            {active.key === 'github' && <GithubBars languages={githubLanguages} />}
                        </motion.div>
                    </AnimatePresence>
                </StatCardSection>
            </div>
        </motion.div>
    );
}
