import { useEffect, useState } from "react";
import { Props } from "../interfaces/globalInterfaces";
import { motion } from "framer-motion";

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

const CARD_BG = '#22232a';
const CARD_BORDER = '#3a3b44';

export default function GithubLanguage({ isComp }: Props) {
    const [languages, setLanguages] = useState<LanguageStat[]>([]);

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

                if (!cancelled) setLanguages(stats);
            } catch {
                // silently ignore — section is omitted when stats are unavailable
            }
        })();

        return () => {
            cancelled = true;
        };
    }, []);

    if (languages.length === 0) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center mt-6"
        >
            <div
                className="w-full"
                style={{
                    maxWidth: 960,
                    background: CARD_BG,
                    border: `1px solid ${CARD_BORDER}`,
                    borderRadius: 16,
                    padding: isComp ? '28px 32px' : '20px 16px',
                }}
            >
                <div style={{ fontSize: 15, fontWeight: 600, color: '#d9d9db', marginBottom: 16 }}>
                    Most used languages
                </div>
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
            </div>
        </motion.div>
    );
}
