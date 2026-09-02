// PROTOTYPE — throwaway UI exploration, now on its FOURTH question.
// Round 1 (detail-page narrative style, A/B/C) is decided and shipped for real
// (ADR 0002 + production ProjectDetail.tsx's Security Remediation override) —
// DetailVariantA below is kept only as a reference/fallback for this prototype.
// Round 2 (illustration thumbnail bolted onto the existing timeline-card list)
// was rejected: it read as "same card, different icon," not a real option.
// Round 3 (list page structure — ListLayoutA/B/C, switchable via ?variant=A|B|C)
// is decided and shipped for real: Layout A (editorial split-hero) is now
// production ProjectList.tsx. ListLayoutB/C are kept below only as reference,
// same as DetailVariantB/C — not rendered by this page anymore.
//
// Current question: is the shipped Layout A's COLOR TONE (bright signal-amber
// #ffcc00 accent) right for an HR/recruiter audience, or does it read as too
// loud? Three tone presets (TONES below) applied to the same, already-decided
// Layout A structure — switchable via ?tone=A|B|C. Tone A is the exact color
// currently shipped in production, kept as the baseline to compare against.
// Data: the real Security Remediation project, plus a new anonymized "BCP Testing"
// entry mirroring the Project that will actually ship (see CONTEXT.md's anonymization
// rules — no real company/system names or personal PII in this data, matching what
// production ProjectData.json will contain).

import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Row,
  Col,
  Card,
  Tag,
  Steps,
  Tabs,
  Collapse,
  Statistic,
  Badge,
  Typography,
  ConfigProvider,
} from "antd";
import {
  LeftOutlined,
  RightOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

// The page background is a fixed dark color (globals.css) regardless of OS color
// scheme, so bare AntD Typography on it needs a forced light theme — same pattern
// as CertificateTitle.tsx. Only applied where content isn't already sitting on a
// Card/Collapse's own light surface (those stay on AntD's default dark-on-light text).
// Tag keeps its own light chip surface even inside this wrap, so its text color
// is pinned back to AntD's normal dark default rather than inheriting colorText.
const lightOnDark = {
  token: { colorText: "white", colorTextSecondary: "#a1a1aa" },
  components: { Tag: { defaultColor: "rgba(0, 0, 0, 0.88)" } },
};

// Detail page: every AntD text token forced to white, headings (Title) forced
// to yellow via colorTextHeading — per explicit request, not just "readable."
const detailTheme = {
  token: { colorText: "white", colorTextSecondary: "white", colorTextHeading: "#ffcc00" },
  components: { Tag: { defaultColor: "rgba(0, 0, 0, 0.88)" } },
};

// ---------------------------------------------------------------------------
// Types (mirrors the ADR: one interface, every content section optional)
// ---------------------------------------------------------------------------

interface MetricSnapshot {
  totalVulnerabilities: number;
  effort: number;
  effortUnit: string;
  successRate?: number;
}

interface TimelinePhase {
  phase: string;
  duration: string;
  description: string;
  status: "completed" | "in-progress" | "planned";
}

interface Challenge {
  title: string;
  description: string;
}

interface SolutionGroup {
  category: string;
  items: string[];
}

interface Achievement {
  icon: string;
  label: string;
  value: string;
}

type IllustrationTheme = "security" | "resilience";

interface PrototypeProject {
  id: string;
  title: string;
  subtitle: string;
  company: string;
  role: string;
  status: string;
  startDate: string;
  endDate: string;
  tags: string[];
  theme: IllustrationTheme;
  metrics?: { before: MetricSnapshot; after: MetricSnapshot };
  timeline?: TimelinePhase[];
  challenges?: Challenge[];
  solutions?: SolutionGroup[];
  achievements?: Achievement[];
  techStack?: Record<string, string[]>;
  skills?: string[];
}

// ---------------------------------------------------------------------------
// Data — the real Security Remediation project, plus the new BCP Testing
// project as it's planned to ship (anonymized; see file header).
// ---------------------------------------------------------------------------

const PROJECTS: PrototypeProject[] = [
  {
    id: "security-remediation-2026",
    title: "Security Remediation & Penetration Testing Response",
    subtitle: "Reduced 15 vulnerabilities to 1 in 10 weeks",
    company: "A Bank of Thailand-regulated P2P lending platform",
    role: "Full Stack Developer & Security Remediation Lead",
    status: "Completed & BOT Compliant",
    startDate: "2026-04-09",
    endDate: "2026-06-18",
    tags: ["Security", "Penetration Testing", "Django", "GCP", "Fintech", "Compliance"],
    theme: "security",
    metrics: {
      before: { totalVulnerabilities: 15, effort: 16, effortUnit: "man-days" },
      after: { totalVulnerabilities: 1, effort: 4, effortUnit: "man-days", successRate: 93.3 },
    },
    timeline: [
      { phase: "Initial Penetration Test", duration: "Apr 9–23, 2026", description: "Comprehensive security assessment", status: "completed" },
      { phase: "Report & Analysis", duration: "Apr 30, 2026", description: "Initial findings documented", status: "completed" },
      { phase: "Remediation Sprint", duration: "May–Jun 2026", description: "Fix vulnerabilities by priority", status: "completed" },
      { phase: "Revisited Penetration Test", duration: "Jun 9–11, 2026", description: "Verify fixes and validate remediation", status: "completed" },
      { phase: "Final Report", duration: "Jun 18, 2026", description: "Clearance for production", status: "completed" },
    ],
    challenges: [
      { title: "Multiple High-Risk Vulnerabilities", description: "Found 5 high-risk issues affecting authentication, authorization, and sensitive data exposure" },
      { title: "Regulatory Compliance Pressure", description: "Bank of Thailand compliance requirements for P2P lending platforms" },
      { title: "Complex Architecture", description: "Multiple services (the lending platform API, the internal backoffice system, mobile apps) to secure" },
    ],
    solutions: [
      { category: "Authentication & Authorization", items: ["Implemented middleware for all API endpoints", "Fixed broken access control across services", "Added proper session validation"] },
      { category: "Data Protection", items: ["Removed debug mode from production", "Added input validation and output encoding", "Implemented secure cookie attributes"] },
      { category: "Infrastructure Security", items: ["Updated Django security headers", "Configured TLS properly", "Enhanced logging and monitoring"] },
    ],
    achievements: [
      { icon: "🔒", label: "Security", value: "All high-risk vulnerabilities eliminated" },
      { icon: "📋", label: "Compliance", value: "Bank of Thailand regulation ready" },
      { icon: "⚡", label: "Performance", value: "93% remediation success rate" },
      { icon: "🔄", label: "Verification", value: "Independent security audit passed" },
    ],
    techStack: {
      Backend: ["Python", "Django", "Django Ninja"],
      Infrastructure: ["GCP Cloud Run", "Cloud SQL", "Memorystore"],
      Testing: ["Penetration Testing (STH)", "Burp Suite", "Security Automation"],
    },
    skills: ["Security Vulnerability Analysis", "API Security Hardening", "Django Security Best Practices", "GCP Security Configuration"],
  },
  {
    id: "bcp-testing-2025-2026",
    title: "Business Continuity Plan Testing Program",
    subtitle: "2 consecutive annual BCP drills passed, submitted to BOT both years",
    company: "A Bank of Thailand-regulated P2P lending platform",
    role: "Infrastructure & BCP Test Coordinator",
    status: "Compliant — annual cadence",
    startDate: "2025-07",
    endDate: "2026-07",
    tags: ["Business Continuity", "Disaster Recovery", "GCP", "Fintech", "Compliance"],
    theme: "resilience",
    timeline: [
      { phase: "2025 BCP Test", duration: "Jul 2025", description: "IT infrastructure recovery drill (database, API, CRM failover)", status: "completed" },
      { phase: "2026 BCP Test", duration: "Jul 2026", description: "Expanded to 2 dimensions: IT infrastructure recovery + workplace/personnel continuity (remote-ops & crisis call-tree drill)", status: "completed" },
    ],
    achievements: [
      { icon: "✅", label: "Result", value: "100% pass rate across both annual test cycles" },
      { icon: "⏱️", label: "Recovery", value: "Core services restored within 3–30 min depending on scenario" },
      { icon: "📋", label: "Compliance", value: "BCP test report submitted to and accepted by BOT, 2 years running" },
      { icon: "📞", label: "People", value: "Verified crisis communication (call-tree) and remote-ops continuity across leadership, IT, and operations teams" },
    ],
    techStack: { Infrastructure: ["GCP Cloud SQL", "Cloud Run", "App Engine"], Process: ["Backup & restore drills", "Failover testing", "Crisis communication planning"] },
    skills: ["Disaster Recovery Planning", "Business Continuity Testing", "Cross-team Incident Coordination"],
  },
];

// The real Project list only ever has the 2 entries above. This padded-out
// array exists ONLY so Layout A's left/right zigzag rhythm can be judged
// across a realistic row count — items 3-10 are clearly-labeled placeholders,
// not real work, and never touch production ProjectData.json.
const RHYTHM_PREVIEW_PROJECTS: PrototypeProject[] = [
  ...PROJECTS,
  ...Array.from({ length: 8 }, (_, i) => {
    const n = i + 3;
    const theme: IllustrationTheme = i % 2 === 0 ? "security" : "resilience";
    return {
      id: `placeholder-${n}`,
      title: `Placeholder Project ${n}`,
      subtitle: "Filler row — for previewing the alternating layout rhythm only",
      company: "Placeholder company",
      role: "Placeholder role",
      status: "Placeholder",
      startDate: "20XX-01",
      endDate: "20XX-06",
      tags: ["Placeholder", "Demo"],
      theme,
    };
  }),
];

// ---------------------------------------------------------------------------
// Illustration thumbnails — THIS is the thing being prototyped. Three
// structurally different styles (A/B/C), each themed per-project via
// `theme` (security | resilience). Pure inline SVG, no image assets.
// ---------------------------------------------------------------------------

type IllustrationStyle = "A" | "B" | "C";

const IllustrationA: React.FC<{ theme: IllustrationTheme; rounded?: boolean }> = ({ theme, rounded = true }) => (
  <svg viewBox="0 0 64 64" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <rect width={64} height={64} rx={rounded ? 12 : 0} fill="#111114" />
    <circle cx={32} cy={32} r={22} fill="none" stroke="#ffcc00" strokeWidth={1.5} opacity={0.5} />
    {theme === "security" ? (
      <path
        d="M32 14 L46 20 V32 C46 42 40 48 32 51 C24 48 18 42 18 32 V20 Z"
        fill="none"
        stroke="#ffcc00"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    ) : (
      <g fill="none" stroke="#ffcc00" strokeWidth={2} strokeLinecap="round">
        <path d="M20 26 a12 12 0 1 1 -1 10" />
        <path d="M20 18 v8 h8" />
      </g>
    )}
  </svg>
);

const IllustrationB: React.FC<{ theme: IllustrationTheme; fill?: boolean }> = ({ theme, fill = false }) => {
  const gradientId = `blob-${theme}`;
  return (
    <svg viewBox="0 0 64 64" width="100%" height="100%" preserveAspectRatio={fill ? "xMidYMid slice" : "xMidYMid meet"}>
      {fill && <rect width={64} height={64} fill={`url(#${gradientId})`} />}
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          {theme === "security" ? (
            <>
              <stop offset="0%" stopColor="#ffcc00" />
              <stop offset="100%" stopColor="#5b3df5" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#22d3c9" />
              <stop offset="100%" stopColor="#ffcc00" />
            </>
          )}
        </linearGradient>
      </defs>
      <path
        d="M32 6 C46 6 58 16 56 30 C54 44 44 58 30 56 C16 54 6 42 8 28 C10 14 20 6 32 6 Z"
        fill={`url(#${gradientId})`}
      />
      {theme === "security" ? (
        <g fill="none" stroke="#0b0b0d" strokeWidth={2.5} strokeLinejoin="round">
          <rect x={24} y={30} width={16} height={12} rx={2} />
          <path d="M27 30 v-5 a5 5 0 0 1 10 0 v5" />
        </g>
      ) : (
        <path
          d="M23 26 a10 10 0 1 1 -1 9 M23 20 v7 h7"
          fill="none"
          stroke="#0b0b0d"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
};

// `accent` drives just the primary shape (the one that reads as "brand color"
// at a glance); the secondary shapes stay fixed so the illustration doesn't
// flatten into a single-hue blob when a cooler/quieter tone is applied.
const IllustrationC: React.FC<{ theme: IllustrationTheme; rounded?: boolean; accent?: string }> = ({
  theme,
  rounded = true,
  accent = "#ffcc00",
}) => (
  <svg viewBox="0 0 64 64" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
    <rect width={64} height={64} rx={rounded ? 12 : 0} fill="#151519" />
    {theme === "security" ? (
      <>
        <polygon points="32,10 52,44 12,44" fill={accent} opacity={0.85} transform="rotate(-8 32 32)" />
        <circle cx={38} cy={30} r={14} fill="#5b3df5" opacity={0.55} />
        <rect x={14} y={16} width={18} height={18} fill="#22d3c9" opacity={0.3} transform="rotate(20 23 25)" />
      </>
    ) : (
      <>
        <circle cx={26} cy={26} r={16} fill="#22d3c9" opacity={0.5} />
        <polygon points="46,14 58,38 34,38" fill={accent} opacity={0.8} transform="rotate(12 46 26)" />
        <rect x={20} y={34} width={20} height={20} rx={4} fill="#5b3df5" opacity={0.35} transform="rotate(-15 30 44)" />
      </>
    )}
  </svg>
);

const Illustration: React.FC<{ style: IllustrationStyle; theme: IllustrationTheme; rounded?: boolean; fill?: boolean; accent?: string }> = ({
  style,
  theme,
  rounded,
  fill,
  accent,
}) => {
  if (style === "A") return <IllustrationA theme={theme} rounded={rounded} />;
  if (style === "B") return <IllustrationB theme={theme} fill={fill} />;
  return <IllustrationC theme={theme} rounded={rounded} accent={accent} />;
};

type ListLayoutProps = { projects: PrototypeProject[]; onSelect: (id: string) => void; tone: TonePreset };

// Max tags shown per row before collapsing into a "+N" badge — mirrors the
// same fix already shipped in production ProjectList.tsx, carried into this
// prototype so what you're comparing here is only the tone, not the tags bug.
const MAX_VISIBLE_TAGS = 4;

// ---------------------------------------------------------------------------
// Tone presets — Round 4's actual subject. Same structure (Layout A, already
// decided), three different accent-color answers to "is bright signal-amber
// right for an HR audience?" Tone A is the exact color shipped in production
// today, kept as the baseline every other tone is judged against.
// ---------------------------------------------------------------------------

interface TonePreset {
  key: "A" | "B" | "C";
  name: string;
  description: string;
  accent: string;
  focusRing: string;
}

const TONES: TonePreset[] = [
  {
    key: "A",
    name: "Signal Amber (current, shipped)",
    description: "Bright yellow accent — high energy, high contrast, currently in production.",
    accent: "#ffcc00",
    focusRing: "#ffcc00",
  },
  {
    key: "B",
    name: "Slate Teal",
    description: "Muted cyan-teal accent — calmer, reads as technical/engineering rather than promotional.",
    accent: "#4dd0c4",
    focusRing: "#4dd0c4",
  },
  {
    key: "C",
    name: "Corporate Indigo",
    description: "Cool blue accent — closest to a conventional 'trustworthy fintech' palette.",
    accent: "#6d8cff",
    focusRing: "#6d8cff",
  },
];

// ---------------------------------------------------------------------------
// Layout A — Editorial split-hero. No cards, no timeline dots: each project
// is a full-width horizontal spread (big illustration panel + big type),
// separated by hairlines. Information hierarchy: title/impact first, tags
// and metadata pushed small and secondary. Primary affordance is the whole
// row, not a button.
//
// Row is keyboard-interactive (role="link" + tabIndex + onKeyDown), matching
// the a11y fix already shipped in production ProjectList.tsx — carried in
// here too so the tone comparison is on real, current markup.
// ---------------------------------------------------------------------------

// Click "pop": the row does a quick spring bounce (scale up, overshoot,
// settle) before the detail view swaps in, instead of navigating instantly.
const POP_DURATION_MS = 380;

const ListLayoutA: React.FC<ListLayoutProps> = ({ projects, onSelect, tone }) => {
  const [poppingId, setPoppingId] = useState<string | null>(null);

  const handleOpen = (id: string) => {
    if (poppingId) return;
    setPoppingId(id);
    setTimeout(() => {
      onSelect(id);
      setPoppingId(null);
    }, POP_DURATION_MS);
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-col">
      <div className="text-center mb-10">
        <ConfigProvider theme={{ token: { colorText: tone.accent } }}>
          <Title level={2} className="!mb-2">Projects</Title>
        </ConfigProvider>
        <Text type="secondary" className="text-lg">
          Self-contained pieces of engineering work I've delivered
        </Text>
      </div>

      {projects.map((p, index) => {
        const imageOnRight = index % 2 === 1;
        const isPopping = poppingId === p.id;
        return (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.01 }}
            animate={isPopping ? { scale: [1, 1.06, 0.98, 1.03, 1], opacity: [1, 1, 1, 1, 0] } : { scale: 1, opacity: 1 }}
            transition={isPopping ? { duration: POP_DURATION_MS / 1000, times: [0, 0.35, 0.6, 0.8, 1], ease: "easeInOut" } : { duration: 0.6, delay: index * 0.1 }}
            onClick={() => handleOpen(p.id)}
            role="link"
            tabIndex={0}
            aria-label={`View case study: ${p.title}`}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                handleOpen(p.id);
              }
            }}
            // CSS custom property, not a Tailwind arbitrary value: the accent
            // is only known at render time (picked via ?tone=), and Tailwind
            // needs a static string to scan at build time — `var(--tone-*)`
            // is a static class whose *value* resolves dynamically instead.
            style={{ ["--tone-accent" as any]: tone.accent, ["--tone-ring" as any]: tone.focusRing }}
            className={`group cursor-pointer flex flex-col gap-6 md:gap-10 py-10 border-b border-white/10 first:pt-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--tone-ring)] ${
              imageOnRight ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="md:w-2/5 relative rounded-xl overflow-hidden aspect-[16/10]">
              <Illustration style="C" theme={p.theme} rounded={false} accent={tone.accent} />
              <span
                className="absolute top-3 left-3 text-5xl font-black text-white/20 select-none"
                style={{ fontFamily: "monospace" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <ConfigProvider theme={lightOnDark}>
              <div className="md:w-3/5 flex flex-col justify-center">
                <Text type="secondary" className="uppercase tracking-wide text-xs">
                  {p.company} · {p.startDate} – {p.endDate}
                </Text>
                <Title level={3} className="!mt-1 !mb-2 !text-white group-hover:!text-[var(--tone-accent)] transition-colors">
                  {p.title}
                </Title>
                <Paragraph className="text-lg !mb-3 !text-white !font-bold">
                  {p.subtitle}
                </Paragraph>
                <div className="flex gap-2 flex-wrap mb-3">
                  {p.tags.slice(0, MAX_VISIBLE_TAGS).map((t) => <Tag key={t}>{t}</Tag>)}
                  {p.tags.length > MAX_VISIBLE_TAGS && <Tag>+{p.tags.length - MAX_VISIBLE_TAGS}</Tag>}
                </div>
                <motion.span whileTap={{ scale: 0.9 }} style={{ display: "inline-block" }}>
                  <Text className="!text-[var(--tone-accent)] group-hover:underline">Read the case study →</Text>
                </motion.span>
              </div>
            </ConfigProvider>
          </motion.div>
        );
      })}
    </div>
  );
};

// ---------------------------------------------------------------------------
// Layout B — Poster grid. Illustration fills the entire tile as a background;
// text is overlaid at the bottom on a scrim. Information hierarchy is
// visual-first and scannable (like a media grid), the opposite of a reading
// list. Primary affordance is the tile itself.
// ---------------------------------------------------------------------------

const ListLayoutB: React.FC<ListLayoutProps> = ({ projects, onSelect }) => (
  <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
    {projects.map((p, index) => (
      <motion.div
        key={p.id}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onClick={() => onSelect(p.id)}
        className="group relative cursor-pointer rounded-2xl overflow-hidden aspect-[4/5] shadow-lg hover:shadow-2xl transition-shadow"
      >
        <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-105">
          <Illustration style="B" theme={p.theme} rounded={false} fill />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="absolute top-3 right-3 flex gap-1 flex-wrap justify-end">
          {p.tags.slice(0, 2).map((t) => (
            <span key={t} className="text-xs bg-black/50 text-white px-2 py-0.5 rounded-full backdrop-blur-sm">{t}</span>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="text-xs text-white/70 mb-1">{p.startDate} – {p.endDate}</div>
          <div className="text-white font-semibold text-lg leading-tight mb-1">{p.title}</div>
          {p.achievements?.[0] && (
            <div className="text-[#ffcc00] text-sm">{p.achievements[0].icon} {p.achievements[0].value}</div>
          )}
        </div>
      </motion.div>
    ))}
  </div>
);

// ---------------------------------------------------------------------------
// Layout C — Compact incident-log. Dense, monospace, single-line-first rows;
// no big visuals. Information hierarchy is scan-by-date/status, like a
// changelog. Primary affordance is the row, illustration shrinks to a small
// inline glyph rather than a hero image.
// ---------------------------------------------------------------------------

const ListLayoutC: React.FC<ListLayoutProps> = ({ projects, onSelect }) => (
  <div className="max-w-4xl mx-auto rounded-lg overflow-hidden border border-white/10">
    {projects.map((p, index) => (
      <motion.div
        key={p.id}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        onClick={() => onSelect(p.id)}
        className="group cursor-pointer flex items-start gap-4 px-5 py-4 border-b border-white/10 last:border-b-0 hover:bg-white/5 transition-colors"
        style={{ fontFamily: "monospace" }}
      >
        <div className="w-6 h-6 flex-shrink-0 mt-0.5 rounded overflow-hidden">
          <Illustration style="A" theme={p.theme} rounded={false} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-xs" style={{ color: "#8c8c8c" }}>{p.startDate} → {p.endDate}</span>
            <span className="text-white font-semibold group-hover:text-[#ffcc00]">{p.title}</span>
            <span className="text-xs px-1.5 py-0.5 rounded bg-white/10" style={{ color: "#a1a1aa" }}>{p.status}</span>
          </div>
          <div className="text-sm mt-1" style={{ color: "#d4d4d8" }}>{p.subtitle}</div>
          <div className="flex gap-1 flex-wrap mt-2">
            {p.tags.map((t) => (
              <span key={t} className="text-[11px] px-1.5 py-0.5 rounded" style={{ background: "rgba(255,204,0,0.12)", color: "#ffcc00" }}>{t}</span>
            ))}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

// ---------------------------------------------------------------------------
// Detail — Narrative case study. Already decided (see file header); kept
// fixed regardless of which list layout above is being tried.
// Render effect: sections stagger in top-to-bottom on mount, rather than
// appearing all at once — this is what's being prototyped in this round.
// ---------------------------------------------------------------------------

const detailContainerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const detailItemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const DetailVariantA: React.FC<{ project: PrototypeProject; onBack: () => void }> = ({ project: p, onBack }) => (
  <ConfigProvider theme={detailTheme}>
    <motion.div
      key={p.id}
      variants={detailContainerVariants}
      initial="hidden"
      animate="show"
      className="max-w-3xl mx-auto"
    >
      <motion.div variants={detailItemVariants}>
        <Text onClick={onBack} className="cursor-pointer inline-flex items-center gap-2 mb-6">
          <ArrowLeftOutlined /> All projects
        </Text>
      </motion.div>

      <motion.div variants={detailItemVariants}>
        <Text type="secondary">{p.company} · {p.role}</Text>
        <Title level={2} className="!mt-1">{p.title}</Title>
        <Paragraph className="text-lg">{p.subtitle}</Paragraph>
        <div className="flex gap-2 flex-wrap mb-6">
          {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
      </motion.div>

      {p.metrics && (
        <motion.div variants={detailItemVariants} className="flex gap-8 mb-8 py-4 border-y border-zinc-700">
          <div>
            <Text type="secondary">Before</Text>
            <div className="text-2xl font-bold text-white">{p.metrics.before.totalVulnerabilities} findings</div>
          </div>
          <div>
            <Text type="secondary">After</Text>
            <div className="text-2xl font-bold text-white">{p.metrics.after.totalVulnerabilities} findings</div>
          </div>
        </motion.div>
      )}

      {p.timeline && (
        <motion.div variants={detailItemVariants} className="mb-8">
          <Title level={4}>Timeline</Title>
          <Steps
            direction="vertical"
            size="small"
            items={p.timeline.map((t) => ({
              title: t.phase,
              description: `${t.duration} — ${t.description}`,
              status: t.status === "completed" ? "finish" : "process",
            }))}
          />
        </motion.div>
      )}

      {p.challenges && p.solutions && (
        <motion.div variants={detailItemVariants} className="mb-8 flex flex-col gap-6">
          <Title level={4}>Challenges & Solutions</Title>
          {p.challenges.map((c, i) => (
            <div key={c.title}>
              <Paragraph><Text strong>{c.title}.</Text> {c.description}</Paragraph>
              {p.solutions?.[i] && (
                <ul className="list-disc pl-6 text-white">
                  {p.solutions[i].items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </div>
          ))}
        </motion.div>
      )}

      {p.achievements && (
        <motion.div variants={detailItemVariants} className="mb-8">
          <Title level={4}>Achievements</Title>
          <ul className="flex flex-col gap-2">
            {p.achievements.map((a) => (
              <li key={a.label}>{a.icon} <Text strong>{a.label}:</Text> {a.value}</li>
            ))}
          </ul>
        </motion.div>
      )}

      {(p.techStack || p.skills) && (
        <motion.div variants={detailItemVariants} className="flex gap-2 flex-wrap">
          {p.techStack && Object.values(p.techStack).flat().map((t) => <Tag key={t}>{t}</Tag>)}
          {p.skills?.map((s) => <Tag key={s} color="blue">{s}</Tag>)}
        </motion.div>
      )}
    </motion.div>
  </ConfigProvider>
);

// ---------------------------------------------------------------------------
// Variant B — Dashboard (KPI-first, grid list, tabbed detail)
// ---------------------------------------------------------------------------


const DetailVariantB: React.FC<{ project: PrototypeProject; onBack: () => void }> = ({ project: p, onBack }) => (
  <div className="max-w-5xl mx-auto">
    <ConfigProvider theme={lightOnDark}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <Text onClick={onBack} className="cursor-pointer inline-flex items-center gap-2 mb-2">
            <ArrowLeftOutlined /> Back to dashboard
          </Text>
          <Title level={2} className="!mt-0 !mb-1">{p.title}</Title>
          <Text type="secondary">{p.company} · {p.role} · {p.startDate} – {p.endDate}</Text>
        </div>
        <Badge status="success" text={p.status} />
      </div>
    </ConfigProvider>

    {p.metrics && (
      <Row gutter={16} className="mb-6">
        <Col span={6}><Card><Statistic title="Findings before" value={p.metrics.before.totalVulnerabilities} /></Card></Col>
        <Col span={6}><Card><Statistic title="Findings after" value={p.metrics.after.totalVulnerabilities} /></Card></Col>
        <Col span={6}><Card><Statistic title="Effort" value={p.metrics.after.effort} suffix={p.metrics.after.effortUnit} /></Card></Col>
        <Col span={6}><Card><Statistic title="Success rate" value={p.metrics.after.successRate ?? "—"} suffix={p.metrics.after.successRate ? "%" : ""} /></Card></Col>
      </Row>
    )}

    <ConfigProvider theme={lightOnDark}>
      <Tabs
        items={[
          p.timeline && {
            key: "timeline",
            label: "Timeline",
            children: (
              <Steps
                items={p.timeline.map((t) => ({ title: t.phase, description: t.description, status: t.status === "completed" ? "finish" : "process" }))}
              />
            ),
          },
          (p.challenges || p.solutions) && {
            key: "challenges",
            label: "Challenges & Solutions",
            children: (
              <Row gutter={24}>
                <Col span={12}>
                  <Title level={5}>Challenges</Title>
                  {p.challenges?.map((c) => <Paragraph key={c.title}><Text strong>{c.title}</Text> — {c.description}</Paragraph>)}
                </Col>
                <Col span={12}>
                  <Title level={5}>Solutions</Title>
                  {p.solutions?.map((s) => (
                    <div key={s.category} className="mb-3">
                      <Text strong>{s.category}</Text>
                      <ul className="list-disc pl-5">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
                    </div>
                  ))}
                </Col>
              </Row>
            ),
          },
          p.techStack && {
            key: "stack",
            label: "Tech Stack",
            children: Object.entries(p.techStack).map(([cat, items]) => (
              <div key={cat} className="mb-3">
                <Text strong>{cat}: </Text>
                {items.map((i) => <Tag key={i}>{i}</Tag>)}
              </div>
            )),
          },
          p.achievements && {
            key: "achievements",
            label: "Achievements",
            children: (
              <Row gutter={16}>
                {p.achievements.map((a) => (
                  <Col span={12} key={a.label}>
                    <div className="border border-zinc-600 rounded-lg p-3">
                      {a.icon} <Text strong>{a.label}</Text><div className="text-white">{a.value}</div>
                    </div>
                  </Col>
                ))}
              </Row>
            ),
          },
        ].filter(Boolean) as any}
      />
    </ConfigProvider>
  </div>
);

// ---------------------------------------------------------------------------
// Variant C — Visual showcase (poster list, sticky split detail)
// ---------------------------------------------------------------------------


const DetailVariantC: React.FC<{ project: PrototypeProject; onBack: () => void }> = ({ project: p, onBack }) => (
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
    <ConfigProvider theme={lightOnDark}>
      <div className="lg:w-72 lg:sticky lg:top-6 self-start flex flex-col gap-4">
        <Text onClick={onBack} className="cursor-pointer inline-flex items-center gap-2">
          <ArrowLeftOutlined /> Back
        </Text>
        <Title level={3} className="!mb-0">{p.title}</Title>
        <Badge status="success" text={p.status} />
        <Text type="secondary">{p.role}<br />{p.company}</Text>
        <Text type="secondary">{p.startDate} – {p.endDate}</Text>
        <div className="flex gap-1 flex-wrap">{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        {p.achievements && (
          <div className="flex flex-col gap-1 mt-2">
            {p.achievements.map((a) => <div key={a.label} className="text-white">{a.icon} {a.label}</div>)}
          </div>
        )}
      </div>
    </ConfigProvider>

    <div className="flex-1 flex flex-col gap-8">
      {p.timeline && (
        <div>
          <ConfigProvider theme={lightOnDark}>
            <Title level={4}>Timeline</Title>
          </ConfigProvider>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {p.timeline.map((t) => (
              <Card key={t.phase} className="min-w-[220px] flex-shrink-0">
                <Text strong>{t.phase}</Text>
                <div><Text type="secondary">{t.duration}</Text></div>
                <Paragraph className="!mb-0 !mt-1">{t.description}</Paragraph>
              </Card>
            ))}
          </div>
        </div>
      )}

      {p.solutions && (
        <div>
          <ConfigProvider theme={lightOnDark}>
            <Title level={4}>Solutions</Title>
          </ConfigProvider>
          <Collapse items={p.solutions.map((s) => ({
            key: s.category,
            label: s.category,
            children: <ul className="list-disc pl-5">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>,
          }))} />
        </div>
      )}

      {p.techStack && (
        <ConfigProvider theme={lightOnDark}>
          <div>
            <Title level={4}>Tech Stack</Title>
            <div className="flex flex-col gap-2">
              {Object.entries(p.techStack).map(([cat, items]) => (
                <div key={cat}><Text strong>{cat}: </Text>{items.map((i) => <Tag key={i}>{i}</Tag>)}</div>
              ))}
            </div>
          </div>
        </ConfigProvider>
      )}
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Switcher — now cycles TONE (Round 4's question), not list structure
// (Round 3's question, already answered). ListLayoutB/C above are kept as
// reference only and are no longer reachable from this switcher, same as
// DetailVariantB/C are defined but not routed to.
// ---------------------------------------------------------------------------

type ToneKey = TonePreset["key"];

const ToneSwitcher: React.FC<{ current: ToneKey; onChange: (v: ToneKey) => void }> = ({ current, onChange }) => {
  const index = TONES.findIndex((t) => t.key === current);
  const tone = TONES[index];
  const cycle = (dir: 1 | -1) => onChange(TONES[(index + dir + TONES.length) % TONES.length].key);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      const editable = (e.target as HTMLElement)?.isContentEditable;
      if (tag === "INPUT" || tag === "TEXTAREA" || editable) return;
      if (e.key === "ArrowLeft") cycle(-1);
      if (e.key === "ArrowRight") cycle(1);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  });

  if (!(import.meta as any).env.DEV) return null;

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-1 bg-black text-white px-4 py-2 rounded-2xl shadow-2xl border border-zinc-500"
      style={{ fontFamily: "monospace" }}
    >
      <div className="flex items-center gap-4">
        <LeftOutlined onClick={() => cycle(-1)} className="cursor-pointer" />
        <span className="flex items-center gap-2">
          <span
            className="inline-block w-3 h-3 rounded-full"
            style={{ background: tone.accent }}
          />
          tone {tone.key} — {tone.name}
        </span>
        <RightOutlined onClick={() => cycle(1)} className="cursor-pointer" />
      </div>
      <span className="text-xs text-zinc-400">{tone.description}</span>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const ProjectPrototype: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const toneKey = (searchParams.get("tone") as ToneKey) || "A";
  const tone = TONES.find((t) => t.key === toneKey) ?? TONES[0];
  const [view, setView] = useState<"list" | "detail">("list");
  const [selectedId, setSelectedId] = useState(PROJECTS[0].id);
  const selected = RHYTHM_PREVIEW_PROJECTS.find((p) => p.id === selectedId) ?? PROJECTS[0];

  const setTone = (v: ToneKey) => setSearchParams({ tone: v });

  return (
    <main className="main-content" style={{ paddingBottom: 100 }}>
      {view === "list" ? (
        // Structure is fixed to the shipped Layout A; only the tone changes.
        <ListLayoutA projects={RHYTHM_PREVIEW_PROJECTS} tone={tone} onSelect={(id) => { setSelectedId(id); setView("detail"); }} />
      ) : (
        // Detail narrative style is already decided — fixed here regardless
        // of which tone is being tried.
        <DetailVariantA project={selected} onBack={() => setView("list")} />
      )}
      <ToneSwitcher current={toneKey} onChange={setTone} />
    </main>
  );
};

export default ProjectPrototype;
