import React, { useEffect, useMemo, useRef, useState } from "react";
import {
    Moon,
    Sun,
    Mail,
    Github,
    Linkedin,
    ExternalLink,
    Download,
    Volume2,
    VolumeX,
} from "lucide-react";
import { LineChart, Line } from "recharts";

// --- Profile / Data ----------------------------------------------------------
const PROFILE = {
    name: "Vishnu Nair",
    role: "Software Engineer • Systems & Data (CS @ Cornell ’26)",
    tagline:
        "I build reliable systems and developer tools — low-latency services, tidy APIs, and data platforms that ship.",
    email: "nairvishnumail@gmail.com",
    location: "Ithaca, NY",
    socials: {
        github: "https://github.com/vvnu0",
        linkedin: "https://linkedin.com/in/vishnunair0/",
    },
    introVideo: {
        src: "/WIN_20251019_18_31_08_Pro.mp4",
        poster: "/intro-poster.jpg", // optional placeholder image
    },
};

const PROJECTS = [
    {
        title: "SharprAI – Real-Time Video Upscaler",
        description:
            "Browser extension + cloud pipeline that upscales video segments in near real-time using HLS.",
        year: 2025,
        stack: ["TypeScript", "Chrome Ext", "AWS", "HLS"],
        image:
            "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
        link: "https://github.com/vvnu0",
        metrics: [8, 12, 9, 14, 18, 21, 19, 24, 28, 33, 29, 35],
        outcome: "30% smoother playback at 1.5× bitrate; 200ms median segment latency",
    },
    {
        title: "LLM Guidance Counselor",
        description:
            "An AI assistant that suggests clubs, courses, and scholarships for first-gen students.",
        year: 2024,
        stack: ["Python", "FastAPI", "RAG", "Postgres"],
        image:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
        link: "https://github.com/vvnu0",
        metrics: [2, 4, 6, 5, 9, 12, 11, 15, 16, 18, 22, 25],
        outcome: "Cut advising backlog by ~25% in pilot; NPS +34",
    },
    {
        title: "Redis-Compatible KV Store",
        description:
            "In-memory key-value store implementing RESP with a focus on correctness and benchmarks.",
        year: 2024,
        stack: ["C", "RESP", "Unix Sockets"],
        image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
        link: "https://github.com/vvnu0",
        metrics: [1, 3, 5, 8, 13, 21, 34, 29, 31, 28, 36, 40],
        outcome: ">1.2M ops/s on M2 — 99p latency under 4ms",
    },
];

const EXPERIENCE = [
    {
        company: "Cornell Data Science",
        role: "SWE/ML Officer",
        time: "2024–Present",
        bullets: [
            "Shipped services and tooling for production ML; focused on reliability and performance.",
            "Partnered with Sandia National Laboratories and Millennium on deployment workflows.",
        ],
    },
    {
        company: "NASA / MIT Lincoln Lab (Projects)",
        role: "Research & Engineering",
        time: "2023–2024",
        bullets: [
            "Prototyped ML and data systems for ecological monitoring and safety protocols.",
            "Built pipelines and dashboards to turn raw telemetry into decisions.",
        ],
    },
];

const LINKS = [
    { label: "Resume", href: "/resume.pdf", icon: Download },
    { label: "GitHub", href: PROFILE.socials.github, icon: Github },
    { label: "LinkedIn", href: PROFILE.socials.linkedin, icon: Linkedin },
    { label: "Email", href: `mailto:${PROFILE.email}`, icon: Mail },
];

// --- Small UI bits ----------------------------------------------------------
function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-white/5 border-zinc-200 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
            {children}
        </span>
    );
}

function Section({
    id,
    title,
    children,
    hint,
}: {
    id: string;
    title: string;
    children: React.ReactNode;
    hint?: string;
}) {
    return (
        <section id={id} className="scroll-mt-24 py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4">
                <div className="mb-8 flex items-end justify-between gap-4">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                        {title}
                    </h2>
                    {hint ? (
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">
                            {hint}
                        </span>
                    ) : null}
                </div>
                {children}
            </div>
        </section>
    );
}

function Sparkline({ values }: { values: number[] }) {
    const data = useMemo(() => values.map((v, i) => ({ i, v })), [values]);
    return (
        <LineChart width={120} height={40} data={data} aria-label="small trend chart">
            <Line type="monotone" dataKey="v" strokeWidth={2} dot={false} />
        </LineChart>
    );
}

function ProjectCard({ p }: { p: (typeof PROJECTS)[number] }) {
    return (
        <a
            href={p.link}
            target="_blank"
            rel="noreferrer noopener"
            className="group relative block overflow-hidden rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-zinc-800 dark:bg-zinc-900/60"
        >
            <div className="flex gap-4">
                <div className="relative h-24 w-36 shrink-0 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
                    <img
                        src={p.image}
                        alt={`${p.title} thumbnail`}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                    />
                </div>
                <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                        <h3 className="truncate text-base font-semibold text-zinc-900 dark:text-zinc-100">
                            {p.title}
                        </h3>
                        <Badge>{p.year}</Badge>
                    </div>
                    <p className="mt-1 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {p.description}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                        <div className="flex flex-wrap gap-1.5">
                            {p.stack.map((s) => (
                                <Badge key={s}>{s}</Badge>
                            ))}
                        </div>
                        <Sparkline values={p.metrics} />
                    </div>
                    <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400">
                        {p.outcome}
                    </p>
                </div>
            </div>
            <ExternalLink
                className="absolute right-3 top-3 h-4 w-4 text-zinc-400 transition group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-300"
                aria-hidden
            />
        </a>
    );
}

// --- Page -------------------------------------------------------------------
export default function App() {
    const [dark, setDark] = useState(true);
    const [soundOn, setSoundOn] = useState(false);
    const vref = useRef<HTMLVideoElement | null>(null);

    // Lightweight sanity checks (acts like quick tests in dev)
    useEffect(() => {
        console.assert(
            Array.isArray(PROJECTS) && PROJECTS.length > 0,
            "Expected at least one project"
        );
        const required = [
            "title",
            "description",
            "year",
            "stack",
            "image",
            "link",
            "metrics",
            "outcome",
        ];
        console.assert(
            required.every((k) => k in PROJECTS[0]),
            "Project missing required keys"
        );
        console.assert(
            LINKS.every((l) => (l as any).label && (l as any).href),
            "Each link needs label and href"
        );
    }, []);

    useEffect(() => {
        if (vref.current) vref.current.muted = !soundOn;
    }, [soundOn]);

    return (
        <div className={dark ? "dark" : ""}>
            <a
                href="#content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 rounded bg-indigo-600 px-3 py-2 text-white"
            >
                Skip to content
            </a>

            <div className="min-h-dvh bg-gradient-to-b from-zinc-50 to-white text-zinc-800 transition dark:from-zinc-950 dark:to-zinc-900 dark:text-zinc-100">
                {/* Header */}
                <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800/70 dark:bg-zinc-950/50">
                    <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
                        <div className="flex items-center gap-3">
                            <div
                                className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500"
                                aria-hidden
                            />
                            <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white">
                                {PROFILE.name}
                            </span>
                        </div>
                        <nav className="hidden items-center gap-6 md:flex">
                            <a className="nav-link" href="#about">About</a>
                            <a className="nav-link" href="#projects">Projects</a>
                            <a className="nav-link" href="#experience">Experience</a>
                            <a className="nav-link" href="#contact">Contact</a>
                            <a
                                className="rounded-xl border border-zinc-300 px-3 py-1.5 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700"
                                href={LINKS[0].href}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Resume
                            </a>
                        </nav>
                        <div className="flex items-center gap-2">
                            <button
                                aria-label="Toggle theme"
                                onClick={() => setDark((d) => !d)}
                                className="rounded-xl border border-zinc-300 p-2 shadow-sm transition hover:rotate-6 dark:border-zinc-700"
                            >
                                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                            </button>
                        </div>
                    </div>
                </header>

                {/* Main */}
                <main id="content">
                    {/* Hero */}
                    <section className="mx-auto max-w-5xl px-4 py-16 md:py-24">
                        <div className="grid items-center gap-10 md:grid-cols-2">
                            <div>
                                <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                                    {PROFILE.role}
                                </h1>
                                <p className="mt-4 max-w-prose text-zinc-600 dark:text-zinc-400">
                                    {PROFILE.tagline}
                                </p>
                                <div className="mt-6 flex flex-wrap items-center gap-3">
                                    <a
                                        href={`mailto:${PROFILE.email}`}
                                        className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                                    >
                                        <Mail className="h-4 w-4" /> Email me
                                    </a>
                                    {LINKS.filter((l) => l.label !== "Email").map(
                                        ({ label, href, icon: Icon }) => (
                                            <a
                                                key={label}
                                                href={href}
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700"
                                            >
                                                <Icon className="h-4 w-4" /> {label}
                                            </a>
                                        )
                                    )}
                                </div>
                                <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                                    Based in {PROFILE.location}
                                </p>
                            </div>

                            {PROFILE.introVideo ? (
                                <div className="relative overflow-hidden rounded-2xl border border-zinc-200 shadow-sm dark:border-zinc-800">
                                    <video
                                        ref={vref}
                                        className="aspect-video h-full w-full object-cover"
                                        src={PROFILE.introVideo.src}
                                        poster={PROFILE.introVideo.poster}
                                        controls
                                        playsInline
                                        muted
                                    />
                                    <div className="absolute bottom-3 left-3 flex gap-2">
                                        <button
                                            onClick={() => setSoundOn((s) => !s)}
                                            className="inline-flex items-center gap-2 rounded-xl bg-white/90 px-3 py-1.5 text-xs font-medium shadow-sm backdrop-blur transition dark:bg-zinc-900/80"
                                            aria-pressed={soundOn}
                                            aria-label={soundOn ? "Mute video" : "Unmute video"}
                                        >
                                            {soundOn ? (
                                                <>
                                                    <Volume2 className="h-4 w-4" /> Sound on
                                                </>
                                            ) : (
                                                <>
                                                    <VolumeX className="h-4 w-4" /> Silent
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </section>

                    {/* About */}
                    <Section id="about" title="About" hint="Crisp bio + focus areas">
                        <div className="prose max-w-none dark:prose-invert">
                            <p>
                                I’m {PROFILE.name}, a builder who enjoys the full stack: data plumbing, APIs, and delightful
                                front-ends. I care about correctness, performance, and small UX details that earn trust.
                            </p>
                            <p>
                                Recently I’ve been focused on streaming systems, LLM tooling, and lightweight developer
                                platforms. I value clear docs, measurable impact, and teams that mentor generously.
                            </p>
                        </div>
                    </Section>

                    {/* Projects */}
                    <Section id="projects" title="Projects" hint="Case studies → outcomes">
                        <div className="grid gap-5 sm:grid-cols-2">
                            {PROJECTS.map((p) => (
                                <ProjectCard key={p.title} p={p} />
                            ))}
                        </div>
                    </Section>

                    {/* Experience */}
                    <Section id="experience" title="Experience" hint="Selected roles">
                        <ol className="relative space-y-6 border-l border-zinc-200 pl-6 dark:border-zinc-800">
                            {EXPERIENCE.map((e) => (
                                <li key={e.company} className="ml-2">
                                    <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full border border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-900" />
                                    <div className="rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                            <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                                                {e.role} · {e.company}
                                            </p>
                                            <span className="text-xs text-zinc-500 dark:text-zinc-400">{e.time}</span>
                                        </div>
                                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
                                            {e.bullets.map((b, i) => (
                                                <li key={i}>{b}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </Section>

                    {/* Contact */}
                    <Section id="contact" title="Contact" hint="I read every note">
                        <div className="grid gap-6 md:grid-cols-2">
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60"
                                aria-label="contact form"
                            >
                                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">
                                    Name
                                </label>
                                <input
                                    className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-950"
                                    placeholder="Ada Lovelace"
                                    required
                                />
                                <label className="mt-4 block text-sm font-medium text-zinc-700 dark:text-zinc-200">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-950"
                                    placeholder="ada@example.com"
                                    required
                                />
                                <label className="mt-4 block text-sm font-medium text-zinc-700 dark:text-zinc-200">
                                    Message
                                </label>
                                <textarea
                                    className="mt-1 h-28 w-full resize-y rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-950"
                                    placeholder="Hi! I'd love to collaborate on…"
                                    required
                                />
                                <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                                    Send
                                </button>
                                <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                                    Or email me directly at{" "}
                                    <a className="underline" href={`mailto:${PROFILE.email}`}>
                                        {PROFILE.email}
                                    </a>
                                </p>
                            </form>

                            <div className="rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
                                <h3 className="text-sm font-semibold">Links</h3>
                                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                                    {LINKS.map(({ label, href, icon: Icon }) => (
                                        <li key={label}>
                                            <a
                                                className="flex items-center gap-2 rounded-xl border border-zinc-300 px-3 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700"
                                                href={href}
                                                target="_blank"
                                                rel="noreferrer noopener"
                                            >
                                                <Icon className="h-4 w-4" /> {label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Section>
                </main>

                {/* Footer */}
                <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                    <div className="mx-auto max-w-5xl px-4">
                        <p>
                            © {new Date().getFullYear()} {PROFILE.name}. Built with React + Tailwind. Theme-aware, accessible, and deploy-ready.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
