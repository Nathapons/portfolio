// PROTOTYPE — throwaway UI exploration for the future /project + /project/:id pages.
// Plan: three radically different variants of the Project list+detail flow, switchable
// via ?variant=A|B|C, mounted on a new dev-only route (/project-prototype) since no
// Project page exists yet (sub-shape B). List/detail navigation here is local component
// state, not real nested routing — that's a routing decision for the real implementation,
// not what this prototype is answering. Data shape mirrors the ADR (single interface,
// optional sections) and the real ProjectData.json; two extra projects are fabricated
// placeholders so the list view has something to lay out. Not for production.

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
  CalendarOutlined,
  ProjectOutlined,
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
  metrics?: { before: MetricSnapshot; after: MetricSnapshot };
  timeline?: TimelinePhase[];
  challenges?: Challenge[];
  solutions?: SolutionGroup[];
  achievements?: Achievement[];
  techStack?: Record<string, string[]>;
  skills?: string[];
}

// ---------------------------------------------------------------------------
// Mock data — real project data plus two fabricated placeholders for list variety
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
    id: "analytics-dashboard-revamp",
    title: "Realtime Analytics Dashboard Revamp",
    subtitle: "Cut dashboard load time from 8s to under 1s",
    company: "A mid-size e-commerce platform",
    role: "Frontend Lead",
    status: "Shipped",
    startDate: "2025-11-01",
    endDate: "2026-01-20",
    tags: ["React", "Performance", "Data Viz", "TypeScript"],
    achievements: [
      { icon: "⚡", label: "Speed", value: "8x faster initial load" },
      { icon: "📊", label: "Adoption", value: "Used by 4 internal teams daily" },
    ],
    techStack: { Frontend: ["React", "TypeScript", "D3.js"], Infrastructure: ["CDN caching", "Web Workers"] },
    skills: ["Performance Profiling", "Data Visualization", "Frontend Architecture"],
  },
  {
    id: "internal-tooling-automation",
    title: "Internal Tooling Automation Suite",
    subtitle: "Automated 6 manual ops workflows into one CLI",
    company: "A logistics coordination startup",
    role: "Full Stack Developer",
    status: "In active use",
    startDate: "2025-06-15",
    endDate: "2025-09-10",
    tags: ["Automation", "Node.js", "DevEx"],
    achievements: [
      { icon: "🛠️", label: "Efficiency", value: "~20 hours/week of manual ops removed" },
    ],
    techStack: { Backend: ["Node.js", "TypeScript"], Tooling: ["GitHub Actions", "CLI"] },
    skills: ["Developer Experience", "Process Automation"],
  },
];

// ---------------------------------------------------------------------------
// Shared list — timeline dot + Card, matching WorkExperience.tsx's pattern.
// All three variants use this same list now (per feedback); only the detail
// view still differs per variant.
// ---------------------------------------------------------------------------

const ListCards: React.FC<{ projects: PrototypeProject[]; onSelect: (id: string) => void }> = ({ projects, onSelect }) => (
  <div className="max-w-4xl mx-auto relative">
    <div
      className="absolute top-1 bottom-1 w-[2px]"
      style={{ left: 3, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
    />
    <div className="flex flex-col gap-6">
      {projects.map((p, index) => (
        <div key={p.id} className="grid grid-cols-[8px_1fr] gap-3">
          <div className="pt-2">
            <div
              role="img"
              aria-label={`${p.title}, ${p.startDate} – ${p.endDate}`}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#ffcc00" }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card
              hoverable
              onClick={() => onSelect(p.id)}
              className="shadow-lg hover:shadow-xl transition-shadow"
            >
              <Title level={5} className="!mt-0 !mb-0">{p.title}</Title>
              <Paragraph className="!mb-0"><ProjectOutlined className="mr-2" />{p.company}</Paragraph>
              <Paragraph className="!mb-1">
                <CalendarOutlined className="mr-2" />
                <time style={{ fontSize: 14, fontWeight: 400, color: "#8c8c8c" }}>{p.startDate} – {p.endDate}</time>
              </Paragraph>
              <Paragraph className="!mb-2">{p.subtitle}</Paragraph>
              <div>
                {p.tags.map((t) => <Tag key={t} color="blue" className="mb-1">{t}</Tag>)}
              </div>
            </Card>
          </motion.div>
        </div>
      ))}
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Variant A — Narrative case study (single column, editorial, story-first)
// ---------------------------------------------------------------------------

const ListVariantA = ListCards;

const DetailVariantA: React.FC<{ project: PrototypeProject; onBack: () => void }> = ({ project: p, onBack }) => (
  <ConfigProvider theme={lightOnDark}>
    <div className="max-w-3xl mx-auto">
      <Text onClick={onBack} className="cursor-pointer inline-flex items-center gap-2 mb-6">
        <ArrowLeftOutlined /> All projects
      </Text>
      <Text type="secondary">{p.company} · {p.role}</Text>
      <Title level={2} className="!mt-1">{p.title}</Title>
      <Paragraph className="text-lg">{p.subtitle}</Paragraph>
      <div className="flex gap-2 flex-wrap mb-6">
        {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
      </div>

      {p.metrics && (
        <div className="flex gap-8 mb-8 py-4 border-y border-zinc-700">
          <div>
            <Text type="secondary">Before</Text>
            <div className="text-2xl font-bold text-white">{p.metrics.before.totalVulnerabilities} findings</div>
          </div>
          <div>
            <Text type="secondary">After</Text>
            <div className="text-2xl font-bold text-white">{p.metrics.after.totalVulnerabilities} findings</div>
          </div>
        </div>
      )}

      {p.timeline && (
        <div className="mb-8">
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
        </div>
      )}

      {p.challenges && p.solutions && (
        <div className="mb-8 flex flex-col gap-6">
          <Title level={4}>Challenges & Solutions</Title>
          {p.challenges.map((c, i) => (
            <div key={c.title}>
              <Paragraph><Text strong>{c.title}.</Text> {c.description}</Paragraph>
              {p.solutions?.[i] && (
                <ul className="list-disc pl-6 text-zinc-300">
                  {p.solutions[i].items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {p.achievements && (
        <div className="mb-8">
          <Title level={4}>Achievements</Title>
          <ul className="flex flex-col gap-2">
            {p.achievements.map((a) => (
              <li key={a.label}>{a.icon} <Text strong>{a.label}:</Text> {a.value}</li>
            ))}
          </ul>
        </div>
      )}

      {(p.techStack || p.skills) && (
        <div className="flex gap-2 flex-wrap">
          {p.techStack && Object.values(p.techStack).flat().map((t) => <Tag key={t}>{t}</Tag>)}
          {p.skills?.map((s) => <Tag key={s} color="blue">{s}</Tag>)}
        </div>
      )}
    </div>
  </ConfigProvider>
);

// ---------------------------------------------------------------------------
// Variant B — Dashboard (KPI-first, grid list, tabbed detail)
// ---------------------------------------------------------------------------

const ListVariantB = ListCards;

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

const ListVariantC = ListCards;

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
// Switcher
// ---------------------------------------------------------------------------

const VARIANTS = [
  { key: "A", name: "Narrative case study" },
  { key: "B", name: "Dashboard" },
  { key: "C", name: "Visual showcase" },
] as const;

type VariantKey = (typeof VARIANTS)[number]["key"];

const PrototypeVariantSwitcher: React.FC<{ current: VariantKey; onChange: (v: VariantKey) => void }> = ({ current, onChange }) => {
  const index = VARIANTS.findIndex((v) => v.key === current);
  const cycle = (dir: 1 | -1) => onChange(VARIANTS[(index + dir + VARIANTS.length) % VARIANTS.length].key);

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
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-black text-white px-4 py-2 rounded-full shadow-2xl border border-zinc-500"
      style={{ fontFamily: "monospace" }}
    >
      <LeftOutlined onClick={() => cycle(-1)} className="cursor-pointer" />
      <span>{current} — {VARIANTS[index].name}</span>
      <RightOutlined onClick={() => cycle(1)} className="cursor-pointer" />
    </div>
  );
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const ProjectPrototype: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const variant = (searchParams.get("variant") as VariantKey) || "A";
  const [view, setView] = useState<"list" | "detail">("list");
  const [selectedId, setSelectedId] = useState(PROJECTS[0].id);
  const selected = PROJECTS.find((p) => p.id === selectedId)!;

  const setVariant = (v: VariantKey) => setSearchParams({ variant: v });

  return (
    <main className="main-content" style={{ paddingBottom: 100 }}>
      {view === "list" ? (
        <>
          {variant === "A" && <ListVariantA projects={PROJECTS} onSelect={(id) => { setSelectedId(id); setView("detail"); }} />}
          {variant === "B" && <ListVariantB projects={PROJECTS} onSelect={(id) => { setSelectedId(id); setView("detail"); }} />}
          {variant === "C" && <ListVariantC projects={PROJECTS} onSelect={(id) => { setSelectedId(id); setView("detail"); }} />}
        </>
      ) : (
        <>
          {variant === "A" && <DetailVariantA project={selected} onBack={() => setView("list")} />}
          {variant === "B" && <DetailVariantB project={selected} onBack={() => setView("list")} />}
          {variant === "C" && <DetailVariantC project={selected} onBack={() => setView("list")} />}
        </>
      )}
      <PrototypeVariantSwitcher current={variant} onChange={setVariant} />
    </main>
  );
};

export default ProjectPrototype;
