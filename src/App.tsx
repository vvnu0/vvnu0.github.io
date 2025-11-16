import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { Mail, Github, Linkedin, ExternalLink, Download } from "lucide-react";

/* ============================== Constants =============================== */
const INTRO_MS = 6500; // ~6.5s (4.5s + 2s)
const FADE_MS = 3000; // crossfade duration in ms (3s)

const PROFILE = {
    name: "Vishnu Nair",
    role: "Software Engineer",
    tagline:
        "I build reliable systems and developer tools — low-latency services, tidy APIs, and data platforms that ship.",
    email: "nairvishnumail@gmail.com",
    location: "Fremont, CA",
    socials: {
        github: "https://github.com/vvnu0",
        linkedin: "https://linkedin.com/in/vishnunair0/",
    },
    introVideo: {
        src: "/WIN_20251019_18_31_08_Pro.mp4",
        poster: "/intro-poster.jpg", // optional placeholder image
    },
} as const;

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
] as const;

const LINKS = [
    { label: "Resume", href: "/resume.pdf", icon: Download },
    { label: "GitHub", href: PROFILE.socials.github, icon: Github },
    { label: "LinkedIn", href: PROFILE.socials.linkedin, icon: Linkedin },
    { label: "Email", href: `mailto:${PROFILE.email}`, icon: Mail },
] as const;

const NL =
    "text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition";

/* ============================== Utilities ================================= */
const isBrowser = typeof window !== "undefined" && typeof document !== "undefined";

function ensureLinkOnce(href: string, key: string) {
    if (!isBrowser) return;
    if (!document.querySelector(`link[data-key="${key}"]`)) {
        const link = document.createElement("link");
        link.setAttribute("data-key", key);
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
    }
}

function ensureScriptOnce(src: string, key: string) {
    return new Promise<void>((resolve) => {
        if (!isBrowser) return resolve();
        if ((window as any)[key]) return resolve();
        const s = document.createElement("script");
        s.src = src;
        s.async = true;
        s.onload = () => {
            (window as any)[key] = true;
            resolve();
        };
        document.body.appendChild(s);
    });
}

/* ============================== Scramble Title ============================= */
function ScrambleTitle({
    text,
    start = false,
    className = "",
}: {
    text: string;
    start?: boolean; // begin scrambling when this flips true
    className?: string;
}) {
    const [out, setOut] = useState<string>(text.replace(/[^ ]/g, " "));
    const raf = useRef<number | null>(null);
    const running = useRef(false);
    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}<>/?|";

    // Slower schedule for longer reveal
    const buildSchedule = useCallback((len: number) => {
        const now = performance.now();
        const BASE = 1800;
        const STEP = 120;
        const JITTER = 900;
        return Array.from({ length: len }, (_, i) => now + BASE + i * STEP + Math.random() * JITTER);
    }, []);

    const play = useCallback(() => {
        if (running.current) return;
        running.current = true;
        const target = text;
        const locks = buildSchedule(target.length);

        const tick = (t: number) => {
            let done = true;
            let buf = "";
            for (let i = 0; i < target.length; i++) {
                const ch = target[i];
                if (ch === " ") {
                    buf += " ";
                    continue;
                }
                if (t >= locks[i]) buf += ch;
                else {
                    done = false;
                    buf += chars[(Math.random() * chars.length) | 0];
                }
            }
            setOut(buf);
            if (!done) raf.current = requestAnimationFrame(tick);
            else {
                setOut(target);
                running.current = false;
            }
        };

        if (raf.current) cancelAnimationFrame(raf.current);
        raf.current = requestAnimationFrame(tick);
    }, [text, buildSchedule, chars]);

    useEffect(() => {
        if (start) play();
        return () => {
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, [start, play]);

    return (
        <span
            className={`cursor-default select-none ${className}`}
            onMouseEnter={play}
            onClick={play}
            aria-label={text}
        >
            {out}
        </span>
    );
}

/* =============================== Intro Overlay ============================= */
function IntroOverlay({ onDismiss, fading }: { onDismiss: () => void; fading: boolean }) {
    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black intro-overlay ${fading ? "fade-out" : ""
                }`}
            onClick={onDismiss}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onDismiss()}
            aria-label="Dismiss intro"
            data-testid="intro-overlay"
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700|Dosis:200,400,600');
        .intro-overlay { opacity: 1; transition: opacity ${FADE_MS}ms ease; }
        .intro-overlay.fade-out { opacity: 0; }
        .intro-title {
          font-family: Dosis, sans-serif; font-weight: 200; position: absolute; text-align: center;
          color: #fff; top: 50%; width: 100%; margin-top: -55px; text-transform: uppercase;
          letter-spacing: 1px; transform-style: preserve-3d; transform: translate3d(0,0,0); opacity: 0;
          animation: introAnim 3.2s ease-out forwards 1s;
        }
        .intro-title strong { display: block; font-weight: 400; }
        @keyframes introAnim {
          0% { text-shadow: 0 0 50px #fff; letter-spacing: 80px; opacity: 0; transform: rotateY(-90deg); }
          50% { text-shadow: 0 0 1px #fff; opacity: 0.8; transform: rotateY(0deg); }
          75% { text-shadow: 0 0 1px #fff; opacity: 0.8; transform: rotateY(0deg) translateZ(60px); }
          100% { text-shadow: 0 0 1px #fff; opacity: 0.8; letter-spacing: 8px; transform: rotateY(0deg) translateZ(100px); }
        }
      `}</style>

            <h1 className="intro-title">
                Welcome <strong>stranger</strong>
            </h1>
        </div>
    );
}

/* =============================== Small UI bits ============================= */
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
                    {hint ? <span className="text-xs text-zinc-500 dark:text-zinc-400">{hint}</span> : null}
                </div>
                {children}
            </div>
        </section>
    );
}

// Lightweight SVG sparkline (no recharts needed)
function Sparkline({ values }: { values: number[] }) {
    const points = useMemo(() => {
        if (!values || values.length === 0) return "";

        const width = 120;
        const height = 40;
        const padX = 2;
        const padY = 2;

        const min = Math.min(...values);
        const max = Math.max(...values);
        const span = max - min || 1; // avoid divide-by-zero
        const n = values.length;

        return values
            .map((v, i) => {
                const t = n === 1 ? 0.5 : i / (n - 1); // single point centered
                const x = padX + t * (width - 2 * padX);
                const norm = (v - min) / span;
                const y = height - padY - norm * (height - 2 * padY);
                return `${x},${y}`;
            })
            .join(" ");
    }, [values]);

    if (!points) {
        return (
            <svg width={120} height={40} aria-label="flat sparkline">
                <line
                    x1={2}
                    y1={20}
                    x2={118}
                    y2={20}
                    stroke="currentColor"
                    strokeWidth={1}
                    strokeOpacity={0.3}
                />
            </svg>
        );
    }

    return (
        <svg width={120} height={40} viewBox="0 0 120 40" aria-label="small trend chart">
            <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinejoin="round"
                strokeLinecap="round"
                points={points}
            />
        </svg>
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
                        <h3 className="truncate text-base font-semibold text-zinc-900 dark:text-zinc-100">{p.title}</h3>
                        <Badge>{p.year}</Badge>
                    </div>
                    <p className="mt-1 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">{p.description}</p>
                    <div className="mt-3 flex items-center justify-between">
                        <div className="flex flex-wrap gap-1.5">
                            {p.stack.map((s) => (
                                <Badge key={s}>{s}</Badge>
                            ))}
                        </div>
                        <Sparkline values={p.metrics} />
                    </div>
                    <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400">{p.outcome}</p>
                </div>
            </div>
            <ExternalLink
                className="absolute right-3 top-3 h-4 w-4 text-zinc-400 transition group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-300"
                aria-hidden
            />
        </a>
    );
}

/* ============================== Music Player =============================== */
function MusicPlayer() {
    useEffect(() => {
        if (!isBrowser) return;

        // Load Font Awesome + jQuery once
        ensureLinkOnce(
            "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css",
            "fa5-css"
        );
        let disposed = false;
        let buffInterval: any = null;
        let audio: HTMLAudioElement | null = null;
        let cleanupFn: (() => void) | void;

        const win = window as any;
        // Prevent multiple simultaneous initializations (StrictMode / remounts)
        if (win.__vvnu0_music_player_initialized) return;
        win.__vvnu0_music_player_initialized = true;

        const init = async () => {
            await ensureScriptOnce(
                "https://code.jquery.com/jquery-3.7.1.min.js",
                "jquery-3-7-1-loaded"
            );
            if (disposed) return;

            const $ = (window as any).jQuery || (window as any).$;
            if (!$) return;

            const playerTrack = $("#player-track");
            const bgArtwork = $("#player-bg-artwork");
            const albumName = $("#album-name");
            const trackName = $("#track-name");
            const albumArt = $("#album-art");
            const sArea = $("#seek-bar-container");
            const seekBar = $("#seek-bar");
            const trackTime = $("#track-time");
            const seekTime = $("#seek-time");
            const sHover = $("#s-hover");
            const playPauseButton = $("#play-pause-button");
            const tProgress = $("#current-time");
            const tTime = $("#track-length");
            const playPreviousTrackButton = $("#play-previous");
            const playNextTrackButton = $("#play-next");

            const albums = [
                "Tip Toe",
                "Harvey",
                "Invincible",
                "Sunflower",
                "Mona Lisa",
            ];
            const trackNames = [
                "HYBS - Tip Toe",
                "Her's - Harvey",
                "OneRepublic - Invincible",
                "Post Malone - Sunflower",
                "Val Fritz & Peter Fenn - Mona Lisa",
            ];
            const albumArtworks = ["_1", "_2", "_3", "_4", "_5"];
            const trackUrl = [
                "https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/TipToe.mp3",
                "https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/Harvey.mp3",
                "https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/Invincible.mp3",
                "https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/Sunflower.mp3",
                "https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/MonaLisa.mp3",
            ];

            let bgArtworkUrl: string | undefined;
            let i = playPauseButton.find("i");
            let seekT = 0;
            let seekLoc = 0;
            let seekBarPos: any;
            let cM = 0;
            let ctMinutes: any;
            let ctSeconds: any;
            let curMinutes: any;
            let curSeconds: any;
            let durMinutes: any;
            let durSeconds: any;
            let playProgress = 0;
            let bTime: any;
            let nTime: any = 0;
            let tFlag = false;
            let currIndex = -1;
            let currAlbum: string;
            let currTrackName: string;
            let currArtwork: string;

            const playPause = () => {
                if (!audio) return;
                setTimeout(() => {
                    if (!audio) return;
                    if (audio.paused) {
                        playerTrack.addClass("active");
                        albumArt.addClass("active");
                        checkBuffering();
                        i.attr("class", "fas fa-pause");
                        audio.play();
                    } else {
                        playerTrack.removeClass("active");
                        albumArt.removeClass("active");
                        clearInterval(buffInterval);
                        albumArt.removeClass("buffering");
                        i.attr("class", "fas fa-play");
                        audio.pause();
                    }
                }, 300);
            };

            const showHover = (event: MouseEvent) => {
                if (!audio || !audio.duration) return;
                seekBarPos = sArea.offset();
                seekT = event.clientX - seekBarPos.left;
                seekLoc = audio.duration * (seekT / sArea.outerWidth());

                sHover.width(seekT);

                cM = seekLoc / 60;

                ctMinutes = Math.floor(cM);
                ctSeconds = Math.floor(seekLoc - ctMinutes * 60);

                if (ctMinutes < 0 || ctSeconds < 0) return;

                if (ctMinutes < 10) ctMinutes = "0" + ctMinutes;
                if (ctSeconds < 10) ctSeconds = "0" + ctSeconds;

                if (isNaN(ctMinutes) || isNaN(ctSeconds)) seekTime.text("--:--");
                else seekTime.text(ctMinutes + ":" + ctSeconds);

                seekTime.css({ left: seekT, "margin-left": "-21px" }).fadeIn(0);
            };

            const hideHover = () => {
                sHover.width(0);
                seekTime.text("00:00").css({ left: "0px", "margin-left": "0px" }).fadeOut(0);
            };

            const playFromClickedPos = () => {
                if (!audio) return;
                audio.currentTime = seekLoc;
                seekBar.width(seekT);
                hideHover();
            };

            const updateCurrTime = () => {
                if (!audio || !audio.duration) return;
                nTime = new Date();
                nTime = nTime.getTime();

                if (!tFlag) {
                    tFlag = true;
                    trackTime.addClass("active");
                }

                curMinutes = Math.floor(audio.currentTime / 60);
                curSeconds = Math.floor(audio.currentTime - curMinutes * 60);

                durMinutes = Math.floor(audio.duration / 60);
                durSeconds = Math.floor(audio.duration - durMinutes * 60);

                playProgress = (audio.currentTime / audio.duration) * 100;

                if (curMinutes < 10) curMinutes = "0" + curMinutes;
                if (curSeconds < 10) curSeconds = "0" + curSeconds;

                if (durMinutes < 10) durMinutes = "0" + durMinutes;
                if (durSeconds < 10) durSeconds = "0" + durSeconds;

                if (isNaN(curMinutes) || isNaN(curSeconds)) tProgress.text("00:00");
                else tProgress.text(curMinutes + ":" + curSeconds);

                if (isNaN(durMinutes) || isNaN(durSeconds)) tTime.text("00:00");
                else tTime.text(durMinutes + ":" + durSeconds);

                if (
                    isNaN(curMinutes) ||
                    isNaN(curSeconds) ||
                    isNaN(durMinutes) ||
                    isNaN(durSeconds)
                )
                    trackTime.removeClass("active");
                else trackTime.addClass("active");

                seekBar.width(playProgress + "%");

                if (playProgress === 100) {
                    i.attr("class", "fa fa-play");
                    seekBar.width(0);
                    tProgress.text("00:00");
                    albumArt.removeClass("buffering").removeClass("active");
                    clearInterval(buffInterval);
                }
            };

            const checkBuffering = () => {
                clearInterval(buffInterval);
                buffInterval = setInterval(() => {
                    if (nTime === 0 || bTime - nTime > 1000) albumArt.addClass("buffering");
                    else albumArt.removeClass("buffering");

                    bTime = new Date();
                    bTime = bTime.getTime();
                }, 100);
            };

            const selectTrack = (flag: number) => {
                if (flag === 0 || flag === 1) ++currIndex;
                else --currIndex;

                if (currIndex > -1 && currIndex < albumArtworks.length) {
                    if (flag === 0) i.attr("class", "fa fa-play");
                    else {
                        albumArt.removeClass("buffering");
                        i.attr("class", "fa fa-pause");
                    }

                    seekBar.width(0);
                    trackTime.removeClass("active");
                    tProgress.text("00:00");
                    tTime.text("00:00");

                    currAlbum = albums[currIndex];
                    currTrackName = trackNames[currIndex];
                    currArtwork = albumArtworks[currIndex];

                    if (!audio) audio = new Audio();
                    audio.src = trackUrl[currIndex];

                    nTime = 0;
                    bTime = new Date();
                    bTime = bTime.getTime();

                    if (flag !== 0) {
                        audio.play();
                        playerTrack.addClass("active");
                        albumArt.addClass("active");

                        clearInterval(buffInterval);
                        checkBuffering();
                    }

                    albumName.text(currAlbum);
                    trackName.text(currTrackName);
                    albumArt.find("img.active").removeClass("active");
                    ("#" + currArtwork) && (document.getElementById(currArtwork)?.classList.add("active"));

                    bgArtworkUrl = (document.getElementById(currArtwork) as HTMLImageElement | null)?.src;

                    if (bgArtworkUrl) {
                        bgArtwork.css({ "background-image": "url(" + bgArtworkUrl + ")" });
                    }
                } else {
                    if (flag === 0 || flag === 1) --currIndex;
                    else ++currIndex;
                }
            };

            const initPlayer = () => {
                audio = new Audio();
                selectTrack(0);
                if (!audio) return;
                audio.loop = false;

                playPauseButton.on("click", playPause);
                sArea.on("mousemove", (e: any) => showHover(e.originalEvent));
                sArea.on("mouseout", hideHover);
                sArea.on("click", playFromClickedPos);
                $(audio).on("timeupdate", updateCurrTime);
                playPreviousTrackButton.on("click", () => selectTrack(-1));
                playNextTrackButton.on("click", () => selectTrack(1));
            };

            initPlayer();

            // cleanup function returned to caller
            return () => {
                if (audio) {
                    (audio as any).pause?.();
                    $(audio).off("timeupdate", updateCurrTime);
                }
                playPauseButton.off("click", playPause);
                sArea.off("mousemove");
                sArea.off("mouseout");
                sArea.off("click");
                playPreviousTrackButton.off("click");
                playNextTrackButton.off("click");
                clearInterval(buffInterval);
            };
        };

        // Run init and capture its cleanup function. If init finishes after
        // this effect has been torn down we'll call the cleanup immediately.
        (async () => {
            const c = await init();
            if (disposed) {
                if (c) c();
                win.__vvnu0_music_player_initialized = false;
            } else {
                cleanupFn = c;
            }
        })();

        return () => {
            disposed = true;
            clearInterval(buffInterval);
            if (cleanupFn) {
                try {
                    cleanupFn();
                } catch (e) {
                    // swallow cleanup errors
                }
            } else {
                // if init hasn't produced a cleanup yet, allow future inits
                win.__vvnu0_music_player_initialized = false;
            }
        };
    }, []);

    return (
        <div className="relative flex w-full justify-center md:justify-end">
            <style>{`
        #player-container {
          width: 430px;
          height: 100px;
          margin: 0 auto;
        }
        #player-bg-artwork,
        #player-bg-layer {
          display: none !important;
        }
        #player {
          position: relative;
          height: 100%;
          z-index: 3;
        }
        #player-track {
          position: absolute;
          top: 0;
          right: 15px;
          left: 15px;
          padding: 13px 22px 10px 184px;
          background-color: #000;
          border-radius: 15px 15px 0 0;
          transition: 0.3s ease top;
          z-index: 1;
        }
        #player-track.active {
          top: -92px;
        }
        #album-name {
          color: #ffffff;
          font-size: 17px;
          font-weight: bold;
        }
        #track-name {
          color: #dddddd;
          font-size: 13px;
          margin: 2px 0 13px 0;
        }
        #track-time {
          height: 12px;
          margin-bottom: 3px;
          overflow: hidden;
        }
        #current-time {
          float: left;
        }
        #track-length {
          float: right;
        }
        #current-time,
        #track-length {
          color: transparent;
          font-size: 11px;
          background-color: #ffe8ee;
          border-radius: 10px;
          transition: 0.3s ease all;
        }
        #track-time.active #current-time,
        #track-time.active #track-length {
          color: #f86d92;
          background-color: transparent;
        }
        #seek-bar-container,
        #seek-bar {
          position: relative;
          height: 4px;
          border-radius: 4px;
        }
        #seek-bar-container {
          background-color: #ffe8ee;
          cursor: pointer;
        }
        #seek-time {
          position: absolute;
          top: -29px;
          color: #fff;
          font-size: 12px;
          white-space: pre;
          padding: 5px 6px;
          border-radius: 4px;
          display: none;
        }
        #s-hover {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          opacity: 0.2;
          z-index: 2;
        }
        #seek-time,
        #s-hover {
          background-color: #3b3d50;
        }
        #seek-bar {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 0;
          background-color: #fd6d94;
          transition: 0.2s ease width;
          z-index: 1;
        }
        #player-content {
          position: relative;
          height: 100%;
          background-color: #000;
          border: 2px solid #fff;
          box-shadow: 0 30px 80px rgba(255, 255, 255, 0.25);
          border-radius: 15px;
          z-index: 2;
        }
        #album-art {
          position: absolute;
          top: -40px;
          width: 115px;
          height: 115px;
          margin-left: 40px;
          transform: rotateZ(0);
          transition: 0.3s ease all;
          box-shadow: 0 0 0 10px #fff;
          border-radius: 50%;
          overflow: hidden;
        }
        #album-art.active {
          top: -60px;
          box-shadow: 0 0 0 4px #fff7f7, 0 30px 50px -15px rgba(255, 255, 255, 0.35);
        }
        #album-art:before {
          content: "";
          position: absolute;
          top: 50%;
          right: 0;
          left: 0;
          width: 20px;
          height: 20px;
          margin: -10px auto 0 auto;
          background-color: #d6dee7;
          border-radius: 50%;
          box-shadow: inset 0 0 0 2px #fff;
          z-index: 2;
        }
        #album-art img {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          z-index: -1;
        }
        #album-art img.active {
          opacity: 1;
          z-index: 1;
        }
        #album-art.active img.active {
          z-index: 1;
          animation: rotateAlbumArt 3s linear 0s infinite forwards;
        }
        @keyframes rotateAlbumArt {
          0% {
            transform: rotateZ(0);
          }
          100% {
            transform: rotateZ(360deg);
          }
        }
        #buffer-box {
          position: absolute;
          top: 50%;
          right: 0;
          left: 0;
          height: 13px;
          color: #1f1f1f;
          font-size: 13px;
          text-align: center;
          font-weight: bold;
          line-height: 1;
          padding: 6px;
          margin: -12px auto 0 auto;
          background-color: rgba(255, 255, 255, 0.19);
          opacity: 0;
          z-index: 2;
        }
        #album-art img,
        #buffer-box {
          transition: 0.1s linear all;
        }
        #album-art.buffering img {
          opacity: 0.25;
        }
        #album-art.buffering img.active {
          opacity: 0.8;
          filter: blur(2px);
        }
        #album-art.buffering #buffer-box {
          opacity: 1;
        }
        #player-controls {
          width: 250px;
          height: 100%;
          margin: 0 5px 0 141px;
          float: right;
          overflow: hidden;
        }
        .control {
        width: 33.333%;
        float: left;
        padding: 12px 0;

        /* center the button inside each column */
        display: flex;
        justify-content: center;
        align-items: center;
        }

        .button {
        /* make the visual square itself centered and even */
        width: 72px;
        height: 72px;
        padding: 0;
        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #111;
        border-radius: 16px;
        cursor: pointer;
        }

        .button i {
        display: block;
        color: #ffffff;
        font-size: 26px;
        line-height: 1;
        text-align: center;
        }
        .button,
        .button i {
          transition: 0.2s ease all;
        }
        .button:hover {
          background-color: #333;
        }
        .button:hover i {
          color: #fff;
        }
      `}</style>

            <div id="player-container">
                <div id="player-bg-artwork"></div>
                <div id="player-bg-layer"></div>
                <div id="player">
                    <div id="player-track">
                        <div id="album-name"></div>
                        <div id="track-name"></div>
                        <div id="track-time">
                            <div id="current-time"></div>
                            <div id="track-length"></div>
                        </div>
                        <div id="seek-bar-container">
                            <div id="seek-time"></div>
                            <div id="s-hover"></div>
                            <div id="seek-bar"></div>
                        </div>
                    </div>
                    <div id="player-content">
                        <div id="album-art">
                            <img
                                src="https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/tiptoe.jpeg"
                                className="active"
                                id="_1"
                            />
                            <img
                                src="https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/Harvey.jpg"
                                id="_2"
                            />
                            <img
                                src="https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/Invincible.jpg"
                                id="_3"
                            />
                            <img
                                src="https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/sunflower.jpeg"
                                id="_4"
                            />
                            <img
                                src="https://raw.githubusercontent.com/vvnu0/vvnu0.github.io/main/public/MonaLisa.jpeg"
                                id="_5"
                            />
                            <div id="buffer-box">Buffering ...</div>
                        </div>
                        <div id="player-controls">
                            <div className="control">
                                <div className="button" id="play-previous">
                                    <i className="fas fa-backward"></i>
                                </div>
                            </div>
                            <div className="control">
                                <div className="button" id="play-pause-button">
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                            <div className="control">
                                <div className="button" id="play-next">
                                    <i className="fas fa-forward"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ============================== Companies Ticker =========================== */
function CompaniesTicker() {
    useEffect(() => {
        if (!isBrowser) return;

        // Fonts & Swiper styles (once)
        ensureLinkOnce(
            "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
            "swiper-css"
        );
        ensureLinkOnce(
            "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600;800&display=swap",
            "fonts-bebas-inter"
        );
        ensureLinkOnce(
            "https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=IBM+Plex+Sans:wght@600;700&family=Oswald:wght@600;700&family=EB+Garamond:wght@600;700&display=swap",
            "fonts-brand-fallbacks"
        );

        let disposed = false;
        const sliders: any[] = [];

        const init = async () => {
            await ensureScriptOnce(
                "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
                "swiper-js-loaded"
            );
            if (disposed) return;
            const Sw = (window as any).Swiper;
            if (!Sw) return;

            const isDesktop = () => window.innerWidth > 767.9;
            let gap = isDesktop() ? 0.0285 * window.innerWidth : 15;

            ["#horizontal-ticker-rtl", "#horizontal-ticker-ltr"].forEach((query, index) => {
                const el = document.querySelector(query);
                if (!el) return;
                const inst = new Sw(el, {
                    loop: true,
                    slidesPerView: "auto",
                    spaceBetween: gap,
                    speed: 8000,
                    allowTouchMove: false,
                    autoplay: {
                        delay: 0,
                        reverseDirection: index === 0,
                        disableOnInteraction: false,
                    },
                });
                sliders.push(inst);
            });

            const onResize = () => {
                gap = isDesktop() ? 0.0285 * window.innerWidth : 15;
                sliders.forEach((slider) => {
                    slider.params.spaceBetween = gap;
                    slider.update();
                });
            };
            window.addEventListener("resize", onResize);

            const cleanup = () => window.removeEventListener("resize", onResize);
            (sliders as any)._cleanupResize = cleanup;

            // Brand styles / fonts
            const brandStyles: Record<string, { bg: string; text: string }> = {
                amazon: { bg: "#CC7A00", text: "#111111" },
                coinbase: { bg: "#003BB3", text: "#FFFFFF" },
                NASA: { bg: "#083071", text: "#FFFFFF" },
                "MIT Lincoln Lab": { bg: "#EDEDED", text: "#002B52" },
                "Cornell Data Science": { bg: "#5A2FA0", text: "#000000" },
                "Beats by Dre": { bg: "#B81831", text: "#000000" },
                "Millennium Management": { bg: "#000000", text: "#0026C2" },
                "NumberOne AI": { bg: "#0B1220", text: "#FFFFFF" },
            };

            const companyFonts: Record<string, string> = {
                "Beats by Dre": "'Abeat by Kai', Zarautz, Opificio, Oswald, Montserrat, Inter, system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                amazon:
                    "'Golger Sans Serif', Montserrat, Inter, system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                coinbase:
                    "'Henderson Sans', 'IBM Plex Sans', Inter, system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                NASA: "'Henderson Sans', 'IBM Plex Sans', Inter, system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                "Millennium Management":
                    "'Henderson Sans', 'IBM Plex Sans', Inter, system-ui, -apple-system, 'Segoe UI', Arial, sans-serif",
                "Cornell Data Science": "Palatino, 'Palatino Linotype', 'EB Garamond', 'Times New Roman', serif",
            };

            document.querySelectorAll<HTMLElement>(".horizontal-ticker__slide").forEach((slide) => {
                const name = slide.getAttribute("data-company") || "";
                const alt = slide.querySelector<HTMLElement>(".logo.alt");
                const base = slide.querySelector<HTMLElement>(".logo");
                const s = brandStyles[name];
                const f = companyFonts[name];
                if (alt && s) {
                    alt.style.background = s.bg;
                    alt.style.color = s.text;
                }
                if (f) {
                    if (base) base.style.fontFamily = f;
                    if (alt) alt.style.fontFamily = f;
                }
            });
        };

        init();

        return () => {
            disposed = true;
            (sliders as any)._cleanupResize?.();
            sliders.forEach((s) => s.destroy?.());
        };
    }, []);

    return (
        <section className="not-prose">
            <style>{`
        .base-template__wrapper { max-width: 100dvw; padding: 64px 20px 60px; box-sizing: border-box; text-align: center; }
        .base-template__title { font-family: 'Bebas Neue', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; font-weight: 400; text-transform: uppercase; letter-spacing: 0.12em; margin: 0 0 10px; font-size: clamp(28px, 6vw, 68px); line-height: 0.95; color: #ffffff; text-shadow: 0 2px 8px rgba(0,0,0,.45); }
        .base-template__text { font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; font-weight: 400; opacity: .9; margin-bottom: 36px; line-height: 1.5; font-size: clamp(14px, 2vw, 22px); letter-spacing: 0.02em; color: rgba(255,255,255,0.88); }
        .swiper { width: 100%; }
        .swiper-wrapper { transition-timing-function: linear !important; }
        .horizontal-ticker { margin: 0 -20px; display: flex; flex-direction: column; row-gap: 2.85vw; }
        @media (max-width: 767.9px){ .horizontal-ticker { row-gap: 15px; } }
        .horizontal-ticker__slide { position: relative; width: 15.625vw; aspect-ratio: 300/205; border-radius: 14px; overflow: hidden; backdrop-filter: blur(50px); display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 30px rgba(0,0,0,.35) inset, 0 1px 0 rgba(255,255,255,.06) inset; }
        @media (max-width: 767.9px){ .horizontal-ticker__slide { width: 240px; aspect-ratio: auto; } }
        .horizontal-ticker__slide .logo, .horizontal-ticker__slide .logo.alt { position: absolute; inset: 0; display: grid; place-items: center; padding: 18px; font-weight: 800; text-align: center; line-height: 1.1; font-size: clamp(16px, 1.35vw, 24px); }
        .horizontal-ticker__slide .logo { opacity: 1; transition: opacity .6s ease-out, transform .6s ease-out; color: #e7e7e7; background: rgba(255,255,255,.04); }
        .horizontal-ticker__slide .logo.alt { opacity: 0; transition: opacity .6s ease-out, transform .6s ease-out; color: #fff; background: linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.02)); backdrop-filter: blur(60px); }
        @media (hover:hover) and (pointer:fine){ .horizontal-ticker__slide:hover .logo { opacity: 0; transform: scale(1.02); } .horizontal-ticker__slide:hover .logo.alt { opacity: 1; transform: scale(1.02); } }
      `}</style>

            <div className="base-template__wrapper">
                <h2 className="base-template__title text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                    Where I've Built Things
                </h2>
                <div className="base-template__text mx-auto max-w-2xl text-zinc-600 dark:text-zinc-400">
                    A seamless continuous ticker featuring places I've worked and interned.
                </div>

                <div className="base-template__content">
                    <div className="horizontal-ticker">
                        {/* RTL Slider */}
                        <div id="horizontal-ticker-rtl" className="swiper horizontal-ticker__slider">
                            <div className="swiper-wrapper">
                                {["amazon", "coinbase", "Millennium Management", "Cornell Data Science", "amazon", "coinbase", "Millennium Management", "Cornell Data Science"].map((company, i) => (
                                    <div
                                        key={`rtl-${i}-${company}`}
                                        className="swiper-slide horizontal-ticker__slide"
                                        data-company={company}
                                    >
                                        <span className="logo">{company}</span>
                                        <span className="logo alt">{company}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* LTR Slider */}
                        <div id="horizontal-ticker-ltr" className="swiper horizontal-ticker__slider">
                            <div className="swiper-wrapper">
                                {["Beats by Dre", "NumberOne AI", "NASA", "MIT Lincoln Lab", "Beats by Dre", "NumberOne AI", "NASA", "MIT Lincoln Lab"].map((company, i) => (
                                    <div
                                        key={`ltr-${i}-${company}`}
                                        className="swiper-slide horizontal-ticker__slide"
                                        data-company={company}
                                    >
                                        <span className="logo">{company}</span>
                                        <span className="logo alt">{company}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ============================== Radar Charts =============================== */
function RadarCharts() {
    useEffect(() => {
        if (!isBrowser) return;

        // Load Nunito font + ZingChart once
        ensureLinkOnce(
            "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap",
            "nunito-font"
        );

        let disposed = false;

        (async () => {
            await ensureScriptOnce(
                "https://cdn.zingchart.com/zingchart.min.js",
                "zingchart-lib-loaded"
            );
            if (disposed) return;

            const win = window as any;
            const zingchart = win.zingchart;
            const ZC = win.ZC;
            if (!zingchart || !ZC) return;

            ZC.LICENSE = ["7b185ca19b4be2cba68fdcd369c663a9"];

            const white = "#fff";
            const transparent = "transparent";
            const lightPink = "#C3A9C6";
            const lightBlue = "#53688B";

            const labelsPerson = [
                "Intellect",
                "Emotional Stability",
                "Assertiveness",
                "Sociable",
                "Dutifulness",
                "Self-Confidence",
                "Sensitivity",
                "Distrust",
                "Imagination",
                "Reserve",
                "Anxiety",
                "Complexity",
                "Self-reliance",
                "Orderliness",
                "Emotionality",
                "Warmth",
            ];
            const valuesPerson = [100, 90, 65, 80, 80, 85, 80, 45, 90, 10, 20, 95, 55, 60, 10, 80];

            const labelsTech = ["C++", "HTML", "Javascript", "Node.js", "SQL", "Python", "Java", "CSS"];
            const valuesTech = [5, 3, 4, 3, 4, 5, 5, 1];

            function baseConfig(kLabels: string[], vMin: number, vMax: number, vStep: number) {
                return {
                    type: "radar",
                    globals: { fontFamily: "Nunito" },
                    backgroundColor: transparent,
                    gui: { contextMenu: { visible: false }, logo: { visible: false } },
                    logo: { visible: false },
                    legend: { visible: false },
                    plot: { aspect: "area", alphaArea: 0.6 },
                    scaleK: {
                        labels: kLabels,
                        item: { fontColor: white },
                        guide: {
                            lineStyle: "solid",
                            lineColor: white,
                            backgroundColor: transparent,
                        },
                        tick: { lineColor: white },
                    },
                    scaleV: {
                        minValue: vMin,
                        maxValue: vMax,
                        step: vStep,
                        item: { visible: false },
                        guide: {
                            lineStyle: "solid",
                            lineColor: white,
                            backgroundColor: transparent,
                        },
                    },
                };
            }

            const chartOneData = baseConfig(labelsPerson, 0, 100, 20);
            (chartOneData as any).series = [
                { values: valuesPerson, backgroundColor: lightPink, lineColor: lightPink },
            ];

            const chartTwoData = baseConfig(labelsTech, 0, 5, 1);
            (chartTwoData as any).series = [
                { values: valuesTech, backgroundColor: lightBlue, lineColor: lightBlue },
            ];

            // Render charts – height controlled via CSS on the containers
            zingchart.render({
                id: "chartOne",
                data: chartOneData,
                height: "100%",
                width: "100%",
            });
            zingchart.render({
                id: "chartTwo",
                data: chartTwoData,
                height: "100%",
                width: "100%",
            });

            function assertOk(cond: boolean, msg: string) {
                if (!cond) console.error("Test failed:", msg);
                else console.log("✓", msg);
            }

            function attachChecks(
                id: string,
                cfg: any,
                color: string,
                expectLen: number,
                vMin: number,
                vMax: number
            ) {
                zingchart.bind(id, "complete", function () {
                    try {
                        assertOk(cfg.title === undefined, id + ": No title configured");
                        assertOk(cfg.legend && cfg.legend.visible === false, id + ": Legend hidden");
                        assertOk(
                            Array.isArray(cfg.series) && cfg.series.length === 1,
                            id + ": One series"
                        );
                        assertOk(cfg.series[0].lineColor === color, id + ": Correct color");
                        const el = document.getElementById(id);
                        assertOk(!!el && el.children.length > 0, id + ": Container populated");
                        assertOk(
                            cfg.scaleV.minValue === vMin && cfg.scaleV.maxValue === vMax,
                            id + ": Axis range"
                        );
                        assertOk(
                            cfg.scaleK.labels.length === expectLen &&
                            cfg.series[0].values.length === expectLen,
                            id + ": Labels/values length"
                        );
                    } catch (e) {
                        console.error(id + " assertion error:", e);
                    }
                });
            }

            attachChecks("chartOne", chartOneData, lightPink, 16, 0, 100);
            attachChecks("chartTwo", chartTwoData, lightBlue, 8, 0, 5);
        })();

        return () => {
            disposed = true;
            const win = window as any;
            const zingchart = win.zingchart;
            if (zingchart && typeof zingchart.exec === "function") {
                try {
                    zingchart.exec("chartOne", "destroy");
                    zingchart.exec("chartTwo", "destroy");
                } catch {
                    /* ignore */
                }
            }
        };
    }, []);

    return (
        <div>
            <style>{`
  .radar-root {
    --purple: #000000;
    background-color: var(--purple);
    border-radius: 16px;
    padding: 16px;
  }

  .radar-main {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .radar-block {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .radar-heading {
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 600;
    color: rgba(248, 250, 252, 0.75);
    padding-left: 2px;
    line-height: 1;
    margin-bottom: -2px;
  }

  /* Skills header only */
  .radar-block:last-of-type .radar-heading {
    margin-bottom: -50px;
  }

  .radar-section {
    width: 100%;
    height: 420px;
  }

  @media (max-width: 750px) {
    .radar-section {
      height: 360px;
    }
  }
`}</style>
            <div className="radar-root">
                <div className="radar-main">
                    {/* Top / pink chart */}
                    <div className="radar-block">
                        <div className="radar-heading">Personality</div>
                        <section
                            id="chartOne"
                            className="radar-section"
                            role="img"
                            aria-label="Radar chart with 16 personality traits (pink)"
                        />
                    </div>

                    {/* Bottom / blue chart */}
                    <div className="radar-block">
                        <div className="radar-heading">Skills</div>
                        <section
                            id="chartTwo"
                            className="radar-section"
                            role="img"
                            aria-label="Radar chart with 8 tech skills scored 1–5 (dark blue)"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ============================== About I Can ================================ */

function AboutICan() {
    const ref = React.useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // 1) Load Geist font once (scoped component uses it)
        ensureLinkOnce(
            "https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap",
            "geist-font"
        );

        // 2) Set data-attributes + CSS variables on the wrapper (scoped, not global)
        const el = ref.current;
        if (!el) return;

        el.dataset.theme = "dark";
        el.dataset.syncScrollbar = "true";
        el.dataset.animate = "true";
        el.dataset.snap = "true";

        const start = Math.floor(Math.random() * 101);
        const end = Math.floor(900 + Math.random() * 101);
        el.style.setProperty("--start", String(start));
        el.style.setProperty("--hue", String(start));
        el.style.setProperty("--end", String(end));

        // 3) Fallback only if CSS View Timelines aren’t supported
        const supportsViewTimeline =
            CSS.supports("(animation-timeline: scroll()) and (animation-range: 0% 100%)");

        let cleanup: (() => void) | undefined;

        if (!supportsViewTimeline) {
            // Load GSAP UMDs (attach to window)
            const load = async () => {
                await ensureScriptOnce(
                    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js",
                    "gsap-loaded-3-12-5"
                );
                await ensureScriptOnce(
                    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js",
                    "gsap-st-loaded-3-12-5"
                );

                const w = window as any;
                const gsap = w.gsap;
                const ScrollTrigger = w.ScrollTrigger;
                if (!gsap || !ScrollTrigger) return;
                gsap.registerPlugin(ScrollTrigger);

                const items = Array.from(el.querySelectorAll<HTMLLIElement>("[data-ican] ul li, ul li"));
                if (items.length) gsap.set(items, { opacity: (i: number) => (i !== 0 ? 0.2 : 1) });

                // Dim/brighten the list as you scroll
                const dimmer = gsap.timeline()
                    .to(items.slice(1), { opacity: 1, stagger: 0.5 })
                    .to(items.slice(0, items.length - 1), { opacity: 0.2, stagger: 0.5 }, 0);

                ScrollTrigger.create({
                    trigger: items[0],
                    endTrigger: items[items.length - 1],
                    start: "center center",
                    end: "center center",
                    animation: dimmer,
                    scrub: 0.2,
                    scroller: document.scrollingElement as Element | undefined,
                });

                // Animate --hue across the scroll
                const scroller = gsap.fromTo(
                    el,
                    { "--hue": start } as any,
                    {
                        "--hue": end,
                        ease: "none",
                        scrollTrigger: {
                            trigger: items[0],
                            endTrigger: items[items.length - 1],
                            start: "center center",
                            end: "center center",
                            scrub: 0.2,
                            scroller: document.scrollingElement as Element | undefined,
                        },
                    } as any
                );

                // Chroma on near the start…
                gsap.fromTo(
                    el,
                    { "--chroma": 0 } as any,
                    {
                        "--chroma": 0.3,
                        ease: "none",
                        scrollTrigger: {
                            scrub: 0.2,
                            trigger: items[0],
                            start: "center center+=40",
                            end: "center center",
                            scroller: document.scrollingElement as Element | undefined,
                        },
                    } as any
                );
                // …and off near the end
                gsap.fromTo(
                    el,
                    { "--chroma": 0.3 } as any,
                    {
                        "--chroma": 0,
                        ease: "none",
                        scrollTrigger: {
                            scrub: 0.2,
                            trigger: items[items.length - 2],
                            start: "center center",
                            end: "center center-=40",
                            scroller: document.scrollingElement as Element | undefined,
                        },
                    } as any
                );

                cleanup = () => {
                    try {
                        ScrollTrigger.getAll().forEach((t: any) => t.kill());
                        dimmer.kill?.();
                        (scroller as any).kill?.();
                    } catch { }
                };
            };

            load();
        }

        return () => {
            cleanup?.();
        };
    }, []);

    return (
        <div
            ref={ref}
            data-ican=""
            className="not-prose"
            style={{
                // full-bleed like your original snippet
                width: "100vw",
                marginLeft: "calc(50% - 50vw)",
                marginRight: "calc(50% - 50vw)",
            }}
        >
            {/* SCOPED styles — prefixed with [data-ican] so nothing leaks */}
            <style>{`
/* ---------- Variables & feature toggles ---------- */
[data-ican] {
  --hue: 0;
  --chroma: 0;
  --lightness: 65%;
  --base-chroma: 0.3;
  --start: 0;
  --end: 360;
  color-scheme: light dark;
  font-family: 'Geist', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
}
[data-ican][data-theme='dark'] { --lightness: 75%; }
@media (prefers-color-scheme: dark) { [data-ican] { --lightness: 75%; } }

/* Scoped “grid” background that the original put on <body>::before */
[data-ican]::before {
  --size: 45px;
  --line: color-mix(in hsl, canvasText, transparent 70%);
  content: '';
  position: fixed; inset: 0;
  background:
    linear-gradient(90deg, var(--line) 1px, transparent 1px var(--size)) 50% 50% / var(--size) var(--size),
    linear-gradient(var(--line) 1px, transparent 1px var(--size)) 50% 50% / var(--size) var(--size);
  mask: linear-gradient(-20deg, transparent 50%, white);
  pointer-events: none; z-index: 0;
}

/* ---------- Layout (stick layer) ---------- */
[data-ican] .content {
  display: grid;
  grid-template-columns: auto minmax(0, 1.5fr) min(32vw, 440px);
  column-gap: 1.25rem;
  align-items: start;
  padding: 0 5rem 0 5rem;
  min-height: 80vh;
}
@media (max-width: 900px) {
  [data-ican] .content {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
}

[data-ican] h2 {
  position: sticky;
  top: calc(50% - 0.5lh);
  margin: 0;
  height: fit-content;
  font-weight: 600;
}

[data-ican] .media {
  position: sticky;
  top: 40vh;
  align-self: start;
  justify-self: end;
  margin-left: 2.75rem;
}
@media (max-width: 900px) {
  [data-ican] .media {
    position: static;
    margin-top: 1rem;
    justify-self: stretch;
  }
}

[data-ican] .media video {
  width: 100%;
  max-width: 500px;
  aspect-ratio: 16 / 9;
  height: auto;
  display: block;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,.25);
  object-fit: cover;
}

/* ---------- Scrollbar sync (scoped) ---------- */
[data-ican][data-sync-scrollbar='true'] {
  scrollbar-color: oklch(var(--lightness) var(--chroma) var(--hue)) #0000;
}
@supports (animation-timeline: scroll()) and (animation-range: 0% 100%) {
  [data-ican][data-sync-scrollbar='true'][data-animate='true'] {
    timeline-scope: --list;
    scrollbar-color: oklch(var(--lightness) var(--chroma, 0) var(--hue)) #0000;
    animation-name: ican-change, ican-chroma-on, ican-chroma-off;
    animation-fill-mode: both;
    animation-timing-function: linear;
    animation-range: entry 50% exit 50%, entry 40% entry 50%, exit 30% exit 40%;
    animation-timeline: --list;
  }
  [data-ican] ul { view-timeline: --list; }
  @keyframes ican-change { to { --hue: var(--end); } }
  @keyframes ican-chroma-on { to { --chroma: 0.3; } }
  @keyframes ican-chroma-off { to { --chroma: 0; } }
}

/* ---------- Headings & list (effect layer) ---------- */
[data-ican] ul {
  --count: 22; /* default; overridden via inline style */
  --step: calc((var(--end) - var(--start)) / (var(--count) - 1));
  font-weight: 600;
  padding-inline: 0;
  margin: 0;
  list-style-type: none;
}
[data-ican] li { margin-block: 0.2lh; }
[data-ican] li:not(:last-of-type) {
  color: oklch(var(--lightness) var(--base-chroma) calc(var(--start) + (var(--step) * var(--i))));
}
/* Gradient text look */
[data-ican] h2,
[data-ican] li:last-of-type {
  background: linear-gradient(canvasText 50%, color-mix(in oklch, canvas, canvasText 25%));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* View-timeline driven per-item brighten */
@supports (animation-timeline: view()) and (animation-range: 0% 100%) {
  [data-ican][data-animate='true'] li {
    opacity: 0.2;
    animation-name: ican-brighten;
    animation-fill-mode: both;
    animation-timing-function: linear;
    animation-range: cover calc(50% - 1lh) calc(50% + 1lh);
    animation-timeline: view();
  }
  [data-ican][data-animate='true'] li:first-of-type { --start-opacity: 1; }
  [data-ican][data-animate='true'] li:last-of-type { --brightness: 1; --end-opacity: 1; }

  @keyframes ican-brighten {
    0%   { opacity: var(--start-opacity, 0.2); }
    50%  { opacity: 1; filter: brightness(var(--brightness, 1.2)); }
    100% { opacity: var(--end-opacity, 0.2); }
  }
}

/* Utility from your snippet */
[data-ican] .sr-only {
  position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border-width: 0;
}
      `}</style>

            {/* CONTENT */}
            <section className="content fluid">
                <h2 className="fluid" style={{ ["--font-level" as any]: 4 }}>
                    <span aria-hidden="true">I can&nbsp;</span>
                    <span className="sr-only">I can ship things.</span>
                </h2>

                <ul aria-hidden="true" style={{ ["--count" as any]: 22 }}>
                    <li style={{ ["--i" as any]: 0 }}>design.</li>
                    <li style={{ ["--i" as any]: 1 }}>prototype.</li>
                    <li style={{ ["--i" as any]: 2 }}>solve.</li>
                    <li style={{ ["--i" as any]: 3 }}>build.</li>
                    <li style={{ ["--i" as any]: 4 }}>develop.</li>
                    <li style={{ ["--i" as any]: 5 }}>debug.</li>
                    <li style={{ ["--i" as any]: 6 }}>learn.</li>
                    <li style={{ ["--i" as any]: 7 }}>cook.</li>
                    <li style={{ ["--i" as any]: 8 }}>ship.</li>
                    <li style={{ ["--i" as any]: 9 }}>prompt.</li>
                    <li style={{ ["--i" as any]: 10 }}>collaborate.</li>
                    <li style={{ ["--i" as any]: 11 }}>create.</li>
                    <li style={{ ["--i" as any]: 12 }}>inspire.</li>
                    <li style={{ ["--i" as any]: 13 }}>follow.</li>
                    <li style={{ ["--i" as any]: 14 }}>innovate.</li>
                    <li style={{ ["--i" as any]: 15 }}>test.</li>
                    <li style={{ ["--i" as any]: 16 }}>optimize.</li>
                    <li style={{ ["--i" as any]: 17 }}>teach.</li>
                    <li style={{ ["--i" as any]: 18 }}>visualize.</li>
                    <li style={{ ["--i" as any]: 19 }}>transform.</li>
                    <li style={{ ["--i" as any]: 20 }}>scale.</li>
                    <li style={{ ["--i" as any]: 21 }}>do it.</li>
                </ul>

                <aside className="media" aria-label="Demo video">
                    <video
                        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                        poster="https://images.unsplash.com/photo-1520975954732-35dd222996f2?q=80&w=1600&auto=format&fit=crop"
                        controls
                        playsInline
                        preload="metadata"
                    />
                </aside>
            </section>
        </div>
    );
}

/* ================================== AboutScroller ==================================== */

function AboutScroller() {
    const rootRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!isBrowser || !rootRef.current) return;

        // Bring over the demo’s font + (optionally) normalize.css without touching global site styles
        ensureLinkOnce(
            "https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap",
            "geist-font"
        );
        // If you want the normalize layer too, uncomment the next line:
        // ensureLinkOnce("https://unpkg.com/normalize.css@8.0.1/normalize.css", "normalize-css");

        const root = rootRef.current;
        // Mirror the demo’s data-* flags, *scoped* to this component (not documentElement)
        root.dataset.theme = "dark";
        root.dataset.syncScrollbar = "true";
        root.dataset.animate = "true";
        root.dataset.snap = "true";

        // Randomized hue range like the original
        const start = Math.floor(Math.random() * 101);
        const end = Math.floor(900 + Math.random() * 101);
        root.style.setProperty("--start", String(start));
        root.style.setProperty("--hue", String(start));
        root.style.setProperty("--end", String(end));

        // Fallback if CSS View Timelines aren’t supported: load GSAP + ScrollTrigger (UMD) once
        const supportsTimelines = CSS.supports(
            "(animation-timeline: scroll()) and (animation-range: 0% 100%)"
        );

        let cleanup: (() => void) | undefined;

        (async () => {
            if (supportsTimelines) return;

            await ensureScriptOnce(
                "https://cdn.jsdelivr.net/npm/gsap@3.12.0/dist/gsap.min.js",
                "gsap-3-12"
            );
            await ensureScriptOnce(
                "https://cdn.jsdelivr.net/npm/gsap@3.12.0/dist/ScrollTrigger.min.js",
                "gsap-st-3-12"
            );

            const gsap = (window as any).gsap;
            const ScrollTrigger = (window as any).ScrollTrigger;
            if (!gsap || !ScrollTrigger) return;

            gsap.registerPlugin(ScrollTrigger);

            const items = root.querySelectorAll<HTMLLIElement>(".aboutfx ul li");
            if (items.length) gsap.set(items, { opacity: (i: number) => (i !== 0 ? 0.2 : 1) });

            const list = Array.from(items);

            const dimmer = gsap
                .timeline()
                .to(list.slice(1), { opacity: 1, stagger: 0.5 })
                .to(list.slice(0, list.length - 1), { opacity: 0.2, stagger: 0.5 }, 0);

            ScrollTrigger.create({
                trigger: list[0],
                endTrigger: list[list.length - 1],
                start: "center center",
                end: "center center",
                animation: dimmer,
                scrub: 0.2,
            });

            const scroller = gsap.timeline().fromTo(
                root,
                { "--hue": start } as any,
                { "--hue": end, ease: "none" } as any
            );

            ScrollTrigger.create({
                trigger: list[0],
                endTrigger: list[list.length - 1],
                start: "center center",
                end: "center center",
                animation: scroller,
                scrub: 0.2,
            });

            gsap.fromTo(
                root,
                { "--chroma": 0 } as any,
                {
                    "--chroma": 0.3,
                    ease: "none",
                    scrollTrigger: {
                        scrub: 0.2,
                        trigger: list[0],
                        start: "center center+=40",
                        end: "center center",
                    },
                } as any
            );

            gsap.fromTo(
                root,
                { "--chroma": 0.3 } as any,
                {
                    "--chroma": 0,
                    ease: "none",
                    scrollTrigger: {
                        scrub: 0.2,
                        trigger: list[list.length - 2],
                        start: "center center",
                        end: "center center-=40",
                    },
                } as any
            );

            cleanup = () => {
                (window as any).ScrollTrigger?.getAll().forEach((t: any) => t.kill());
                gsap.globalTimeline?.clear?.();
            };
        })();

        return () => cleanup?.();
    }, []);

    return (
        <div ref={rootRef} className="aboutfx not-prose">
            {/* === Scoped CSS from your demo, namespaced under .aboutfx to avoid clashes === */}
            <style>{`
    /* ---------- Variables & base (scoped) ---------- */
    .aboutfx { 
    --font-size-min: 14; --font-size-max: 20; --font-ratio-min: 1.1; --font-ratio-max: 1.33; 
    --font-width-min: 375; --font-width-max: 1500;
    --start: 0; --end: 360; --lightness: 65%; --base-chroma: 0.3;
    color-scheme: light dark;
    font-family: 'Geist', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
    }
    .aboutfx[data-theme='light'] { color-scheme: light only; --lightness: 65%; }
    .aboutfx[data-theme='dark'] { color-scheme: dark only; --lightness: 75%; }

    .aboutfx .sr-only { position: absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }

    .aboutfx .fluid {
    --fluid-min: calc(var(--font-size-min) * pow(var(--font-ratio-min), var(--font-level, 0)));
    --fluid-max: calc(var(--font-size-max) * pow(var(--font-ratio-max), var(--font-level, 0)));
    --fluid-preferred: calc((var(--fluid-max) - var(--fluid-min)) / (var(--font-width-max) - var(--font-width-min)));
    --fluid-type: clamp((var(--fluid-min) / 16) * 1rem, ((var(--fluid-min) / 16) * 1rem) - (((var(--fluid-preferred) * var(--font-width-min)) / 16) * 1rem) + (var(--fluid-preferred) * 100vi), (var(--fluid-max) / 16) * 1rem);
    font-size: var(--fluid-type);
    }

    /* ---------- Scrollbar sync (scoped) ---------- */
    @property --hue { initial-value: 0; syntax: '<number>'; inherits: false; }
    @property --chroma { initial-value: 0; syntax: '<number>'; inherits: true; }

    .aboutfx[data-sync-scrollbar='true'] {
    scrollbar-color: oklch(var(--lightness) var(--chroma) var(--hue)) #0000;
    }

    @supports (animation-timeline: scroll()) and (animation-range: 0% 100%) {
    .aboutfx[data-sync-scrollbar='true'][data-animate='true'] {
        timeline-scope: --list;
        scrollbar-color: oklch(var(--lightness) var(--chroma, 0) var(--hue)) #0000;
        animation-name: aboutfx-change, aboutfx-chroma-on, aboutfx-chroma-off;
        animation-fill-mode: both;
        animation-timing-function: linear;
        animation-range: entry 50% exit 50%, entry 40% entry 50%, exit 30% exit 40%;
        animation-timeline: --list;
    }
    .aboutfx[data-sync-scrollbar='true'][data-animate='true'] ul { view-timeline: --list; }
    }
    @keyframes aboutfx-change { to { --hue: var(--end); } }
    @keyframes aboutfx-chroma-on { to { --chroma: 0.3; } }
    @keyframes aboutfx-chroma-off { to { --chroma: 0; } }

    /* ---------- Effect layer (scoped) ---------- */
    .aboutfx ul { --step: calc((var(--end) - var(--start)) / (var(--count) - 1)); }
    .aboutfx li:not(:last-of-type) {
    color: oklch(var(--lightness) var(--base-chroma) calc(var(--start) + (var(--step) * var(--i))));
    }

    @supports (animation-timeline: scroll()) and (animation-range: 0% 100%) {
    .aboutfx[data-animate='true'] li {
        opacity: 0.2;
        animation-name: aboutfx-brighten;
        animation-fill-mode: both;
        animation-timing-function: linear;
        animation-range: cover calc(50% - 1lh) calc(50% + 1lh);
        animation-timeline: view();
    }
    .aboutfx[data-animate='true'] li:first-of-type { --start-opacity: 1; }
    .aboutfx[data-animate='true'] li:last-of-type { --brightness: 1; --end-opacity: 1; }

    @keyframes aboutfx-brighten {
        0% { opacity: var(--start-opacity, 0.2); }
        50% { opacity: 1; filter: brightness(var(--brightness, 1.2)); }
        100% { opacity: var(--end-opacity, 0.2); }
    }
    }

    /* ---------- Layout (scoped) ---------- */
    .aboutfx .aboutfx-header { min-height: 40vh; display: grid; place-items: center; width: 100%; padding-inline: 1.5rem; }
    .aboutfx .aboutfx-header h1 { 
    --font-size-min: 24; --font-level: 8; text-wrap: pretty; line-height: 0.8; margin: 0; 
    background: linear-gradient(canvasText 60%, color-mix(in oklch, canvas, canvasText)); 
    -webkit-background-clip: text; background-clip: text; color: #0000;
    }

    .aboutfx .aboutfx-main { width: 100%; }
    .aboutfx .aboutfx-content { 
    --font-level: 6; 
    display: flex; gap: 2.5rem; line-height: 1.25; width: 100%; padding-left: 1.5rem; 
    }
    .aboutfx .aboutfx-content h2 { 
    position: sticky; top: calc(50% - 0.5lh); font-size: inherit; margin: 0; display: inline-block; 
    height: fit-content; font-weight: 600; 
    background: linear-gradient(canvasText 50%, color-mix(in oklch, canvas, canvasText 25%));
    -webkit-background-clip: text; background-clip: text; color: #0000;
    }
    .aboutfx ul { font-weight: 600; padding-inline: 0; margin: 0; list-style-type: none; }
    .aboutfx li:last-of-type { 
    background: linear-gradient(canvasText 50%, color-mix(in oklch, canvas, canvasText 25%));
    -webkit-background-clip: text; background-clip: text; color: #0000; 
    }

    .aboutfx .aboutfx-fin { min-height: 60vh; display: grid; place-items: center; width: 100%; justify-content: center; }

    /* Keep your site's black background visible behind this block */
    .aboutfx { background: transparent; }
        `}</style>

            {/* Markup ported from your HTML, with scoped class names */}
            <div className="aboutfx-main">
                <section className="aboutfx-content fluid">
                    <h2>
                        <span aria-hidden="true">I can&nbsp;</span>
                        <span className="sr-only">you can ship things.</span>
                    </h2>

                    <ul aria-hidden="true" style={{ ["--count" as any]: 22 }}>
                        {[
                            "solve.", "build.", "inspire.", "learn.", "ship.",
                            "collaborate.", "create.", "innovate.", "optimize.", "teach.",
                            "visualize.", "scale.", "do it."
                        ].map((t, i) => (
                            <li key={i} style={{ ["--i" as any]: i }}>{t}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}

/* ================================== Cat ==================================== */
function LongcatWithVideo() {
    useEffect(() => {
        if (!isBrowser) return;

        const root = document.querySelector(".longcat-root") as HTMLElement | null;
        if (!root) return;

        const rightEye = root.querySelector(".right-eye") as HTMLDivElement | null;
        const leftEye = root.querySelector(".left-eye") as HTMLDivElement | null;

        const spriteOffset = -135; // base rotation eyes were drawn with in CSS

        const updateEyeRotation = (e: MouseEvent) => {
            [rightEye, leftEye].forEach((eye) => {
                if (!eye) return;
                const rect = eye.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;
                const dx = e.clientX - cx;
                const dy = e.clientY - cy;
                const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
                const adjusted = angle + spriteOffset;
                eye.style.transform = `rotate(${adjusted}deg)`;
            });
        };

        window.addEventListener("mousemove", updateEyeRotation);

        return () => {
            window.removeEventListener("mousemove", updateEyeRotation);
        };
    }, []);

    return (
        <div className="longcat-root flex justify-end mt-50">
            <style>{`
        .longcat-root {
          /* pulled from your :root block, scoped here */
          --dur: 1s;
          --hair: rgba(232, 232, 232, 1);
          --hairT: rgba(232, 232, 232, 0);
          --hairDark: rgba(209, 209, 209, 1);
          --hairDarkT: rgba(209, 209, 209, 0);
          --hairDarker: rgba(162, 162, 162, 1);
          --ear: rgba(240, 192, 192, 1);
          --earT: rgba(240, 192, 192, 0);
          --mouth: rgba(224, 112, 112, 1);
          --spacer: rgba(162, 162, 162, 1);
          --spacerT: rgba(162, 162, 162, 0);
          --pawPrint: rgba(139, 139, 139, 1);
          --pawPrintT: rgba(139, 139, 139, 0);
          --belly: rgba(197, 197, 197, 1);
          --whisker: rgba(255, 255, 255, 1);
          --whiskerRad: 0.2em;

          position: relative;
          width: 100%;

        margin-top: 11rem;        /* push cat+video down in the About section */
        display: flex;
        justify-content: flex-end; /* push content toward the right of the column */
        }

        .longcat-root * {
          box-sizing: border-box;
        }

        .longcat {
        font-size: 0.5em;
        margin-left: auto;   /* push cat to the right */
        margin-right: 0;
        margin-top: 2.5rem;  /* also nudge it lower inside the block */
        width: 34.5em;
        height: 100%;
        min-height: 24rem;
        transition: height 0.1s ease-out;
        position: relative;
        z-index: 1;

          /* 👇 extra horizontal + vertical nudge */
        margin-right: -35rem;   /* shifts cat further right */
        margin-top: 2.8rem;  
        }

        /* === CAT PIECES (same as your template, just scoped) === */

        .right-ear,
        .left-ear,
        .right-arm,
        .right-paw,
        .head,
        .right-cheek,
        .left-cheek,
        .left-arm,
        .left-paw,
        .tail,
        .tail-outer,
        .tail-outer::after {
          background-color: var(--hair);
        }

        .right-arm,
        .right-paw,
        .right-eye,
        .left-eye,
        .head,
        .right-leg,
        .left-leg {
          border-radius: 50%;
        }

        .right-ear {
          background-image: radial-gradient(
            75% 225% at 25% 100%,
            var(--ear),
            var(--ear) 50%,
            var(--earT) 51%
          );
          border-radius: 4em 4em 0 0 / 16em 16em 0 0;
          width: 2em;
          height: 4em;
          top: 1em;
          left: 11.5em;
          transform: rotate(-40deg);
          position: absolute;
        }

        .left-ear {
          background-image: radial-gradient(
            75% 188% at 50% 100%,
            var(--ear),
            var(--ear) 50%,
            transparent 51%
          );
          border-radius: 8em 8em 0 0 / 16em 16em 0 0;
          width: 3em;
          height: 4em;
          left: 20.5em;
          transform: rotate(30deg);
          position: absolute;
        }

        .right-arm {
          z-index: 3;
          background-image: linear-gradient(
            var(--hairDarkT),
            var(--hairDarkT) 30%,
            var(--hairDark) 31%
          );
          width: 13em;
          height: 4.5em;
          top: 7em;
          left: 3.5em;
          transform: rotate(15deg);
          position: absolute;
        }

        .right-paw {
          z-index: 3;
          background-image:
            radial-gradient(
              2.4em 2.6em at 1.8em 1.3em,
              var(--hairDark),
              var(--hairDark) 50%,
              var(--hairDarkT) 51%
            ),
            radial-gradient(
              2.4em 2.3em at 2.1em 1em,
              var(--spacer),
              var(--spacer) 50%,
              var(--hairDarkT) 51%
            ),
            radial-gradient(
              2.4em 2.6em at 3.8em 1.3em,
              var(--hairDark),
              var(--hairDark) 50%,
              var(--hairDarkT) 51%
            ),
            radial-gradient(
              2.4em 2.4em at 4.1em 1.2em,
              var(--spacer),
              var(--spacer) 50%,
              var(--spacerT) 51%
            ),
            radial-gradient(
              2.4em 2.6em at 4.9em 1.3em,
              var(--hairDark),
              var(--hairDark) 50%,
              var(--hairDarkT) 51%
            ),
            radial-gradient(
              2.4em 2.4em at 5.2em 1.2em,
              var(--spacer),
              var(--spacer) 50%,
              var(--spacerT) 51%
            ),
            linear-gradient(
              var(--hairDark),
              var(--hairDark) 72%,
              var(--hairDarkT) 73%
            );
          border-radius: 3em;
          width: 7.2em;
          height: 3.6em;
          top: 0.8em;
          left: 0;
          transform: rotate(165deg);
          transform-origin: 1.8em 1.8em;
          position: absolute;
        }

        .head {
          z-index: 3;
          background-image:
            radial-gradient(
              2em 2em at 38% 53%,
              var(--hair),
              var(--hair) 50%,
              var(--hairT) 51%
            ),
            radial-gradient(
              95% 80% at 45% 63%,
              var(--hairDark),
              var(--hairDark) 50%,
              var(--hairDarkT) 51%
            );
          width: 12em;
          height: 9em;
          top: 2.8em;
          left: 12em;
          transform: rotate(-5deg);
          position: absolute;
        }

        .right-eye,
        .left-eye {
          background-color: rgb(0, 0, 0);
          box-shadow: 0 0.2em 0 0.2em rgb(160, 160, 80) inset;
          width: 2em;
          height: 2em;
          top: 2.5em;
          transition: transform 0.1s linear;
          transform: rotate(-135deg);
          position: absolute;
        }

        .right-eye {
          left: 1.5em;
        }

        .left-eye {
          left: 5.5em;
        }

        .nose-mouth {
          background-color: var(--mouth);
          background-image:
            radial-gradient(
              0.5em 0.5em at 0.8em 0.7em,
              rgb(0, 0, 0),
              rgb(0, 0, 0) 50%,
              transparent 60%
            ),
            radial-gradient(
              0.5em 0.5em at 1.6em 0.7em,
              rgb(0, 0, 0),
              rgb(0, 0, 0) 50%,
              transparent 60%
            ),
            radial-gradient(
              1.6em 0.1em at 1.2em 2.2em,
              rgb(0, 0, 0),
              rgb(0, 0, 0) 50%,
              transparent 60%
            );
          border-radius: 50% 50% 33% 33%;
          width: 2.5em;
          height: 2.5em;
          top: 4.5em;
          left: 3.2em;
          position: absolute;
        }

        .right-cheek,
        .left-cheek {
          background-color: var(--hairDark);
          background-image:
            radial-gradient(
              var(--whiskerRad) var(--whiskerRad) at 0.6em 0.6em,
              var(--spacer),
              var(--spacer) 50%,
              var(--spacerT) 60%
            ),
            radial-gradient(
              var(--whiskerRad) var(--whiskerRad) at 1.2em 0.3em,
              var(--spacer),
              var(--spacer) 50%,
              var(--spacerT) 60%
            ),
            radial-gradient(
              var(--whiskerRad) var(--whiskerRad) at 1.8em 0.6em,
              var(--spacer),
              var(--spacer) 50%,
              var(--spacerT) 60%
            ),
            radial-gradient(
              var(--whiskerRad) var(--whiskerRad) at 0.6em 1.2em,
              var(--spacer),
              var(--spacer) 50%,
              var(--spacerT) 60%
            ),
            radial-gradient(
              var(--whiskerRad) var(--whiskerRad) at 1.2em 0.9em,
              var(--spacer),
              var(--spacer) 50%,
              var(--spacerT) 60%
            ),
            radial-gradient(
              var(--whiskerRad) var(--whiskerRad) at 1.8em 1.2em,
              var(--spacer),
              var(--spacer) 50%,
              var(--spacerT) 60%
            ),
            radial-gradient(
              var(--whiskerRad) var(--whiskerRad) at 1.2em 1.5em,
              var(--spacer),
              var(--spacer) 50%,
              var(--spacerT) 60%
            );
          border-radius: 50%;
          width: 2.5em;
          height: 2em;
          top: 5em;
          position: absolute;
        }

        .right-cheek {
          left: 2em;
          transform: rotate(-8deg);
        }

        .left-cheek {
          left: 4.4em;
          transform: rotate(8deg);
        }

        .left-arm {
          z-index: 3;
          background-image: linear-gradient(
            var(--hairDarkT),
            var(--hairDarkT) 30%,
            var(--hairDark) 31%
          );
          border-radius: 50%;
          width: 10.5em;
          height: 4.5em;
          top: 6.5em;
          left: 18.9em;
          transform: rotate(40deg);
          position: absolute;
        }

        .left-paw {
          z-index: 3;
          background-image:
            radial-gradient(
              0.6em 0.9em at 20% 60%,
              var(--pawPrint),
              var(--pawPrint) 50%,
              var(--pawPrintT) 55%
            ),
            radial-gradient(
              0.6em 0.9em at 38% 40%,
              var(--pawPrint),
              var(--pawPrint) 50%,
              var(--pawPrintT) 55%
            ),
            radial-gradient(
              0.6em 0.9em at 60% 40%,
              var(--pawPrint),
              var(--pawPrint) 50%,
              var(--pawPrintT) 55%
            ),
            radial-gradient(
              0.6em 0.9em at 80% 60%,
              var(--pawPrint),
              var(--pawPrint) 50%,
              var(--pawPrintT) 55%
            ),
            radial-gradient(
              1.5em 1.5em at 50% 75%,
              var(--pawPrint),
              var(--pawPrint) 50%,
              var(--pawPrintT) 55%
            ),
            radial-gradient(
              87% 87% at 54% 55%,
              var(--hairDark),
              var(--hairDark) 50%,
              var(--pawPrintT) 51%
            );
          border-radius: 3em;
          width: 4.5em;
          height: 4.5em;
          top: 0;
          left: -1em;
          transform: rotate(-50deg);
          position: absolute;
        }

        .whisker {
          border-top: 0.1em solid rgb(255, 255, 255);
          width: 6em;
          height: 0;
          position: absolute;
        }

        .whisker:nth-child(n + 6):nth-child(-n + 10) {
          transform-origin: 100% 0;
        }

        .whisker:nth-child(n + 11):nth-child(-n + 15) {
          transform-origin: 0 0;
        }

        .whisker:nth-child(6) {
          transform: rotate(5deg);
          top: 5.2em;
          left: -2.8em;
        }

        .whisker:nth-child(7) {
          transform: rotate(-3deg);
          top: 5.6em;
          left: -3.4em;
        }

        .whisker:nth-child(8) {
          transform: rotate(-13deg);
          top: 5.9em;
          left: -2.8em;
        }

        .whisker:nth-child(9) {
          transform: rotate(-20deg);
          top: 6.2em;
          left: -3.4em;
        }

        .whisker:nth-child(10) {
          transform: rotate(-29deg);
          top: 6.5em;
          left: -2.7em;
        }

        .whisker:nth-child(11) {
          transform: rotate(5deg);
          top: 5.2em;
          left: 5.7em;
        }

        .whisker:nth-child(12) {
          transform: rotate(7deg);
          top: 5.6em;
          left: 6.2em;
        }

        .whisker:nth-child(13) {
          transform: rotate(12deg);
          top: 5.8em;
          left: 5.6em;
        }

        .whisker:nth-child(14) {
          transform: rotate(18deg);
          top: 6.2em;
          left: 6.2em;
        }

        .whisker:nth-child(15) {
          transform: rotate(21deg);
          top: 6.5em;
          left: 5.5em;
        }

        .torso {
          animation: hang var(--dur) linear infinite alternate;
          background-color: var(--belly);
          border-radius: 2.5em / 16em 16em 2em 2em;
          box-shadow: -0.3em 0 0 2em var(--hairDark) inset;
          top: 8.4em;
          left: 13.5em;
          min-height: 28em;
          height: calc(100% - 32em);
          width: 11.5em;
          position: absolute;
          transform-origin: 5.7em 0;
          transition: height 0.25s ease-out;
        }

        .bottom {
          background-color: var(--belly);
          border-radius: 0 0 8em 8em / 0 0 16em 16em;
          box-shadow: -0.3em -2em 0 2em var(--hairDark) inset;
          top: calc(100% - 2em);
          width: 100%;
          height: 10em;
          position: relative;
        }

        .bottom::after {
          content: "";
          display: block;
          width: 100%;
          height: 6em;
        }

        .tail,
        .tail-outer {
          background-image: linear-gradient(
            var(--hairDarkT),
            var(--hairDarkT) 30%,
            var(--hairDark) 31%
          );
          border-radius: 0 2em 2em 0;
          height: 4em;
          position: absolute;
        }

        .tail {
          animation: wagTail calc(var(--dur) * 2) ease-in infinite alternate;
          width: 10em;
          top: 0;
          left: 50%;
          transform: rotate(30deg);
          transform-origin: 0 2em;
          z-index: -1;
        }

        .tail-outer {
          animation: wagOuterTail calc(var(--dur) * 2) ease-in infinite alternate;
          transform: rotate(-30deg);
          transform-origin: 0 2em;
          width: 8em;
          left: 8em;
        }

        .tail-outer::after {
          background-image: linear-gradient(
            160deg,
            var(--hairDarkT),
            var(--hairDarkT) 40%,
            var(--hairDark) 41%
          );
          border-left: 0.1em solid var(--hairDarker);
          border-radius: 50%;
          content: "";
          display: block;
          margin-left: auto;
          height: 4em;
          width: 4em;
        }

        .right-leg,
        .left-leg,
        .right-lower-leg,
        .left-lower-leg,
        .right-foot,
        .left-foot {
          background-color: var(--hairDark);
          z-index: -2;
          position: absolute;
        }

        .right-leg,
        .left-leg {
          animation: pivotLeg var(--dur) linear infinite alternate;
          top: 2em;
          height: 13em;
          width: 5.5em;
          transform-origin: 2.7em 2.7em;
        }

        .left-leg {
          right: 0;
        }

        .right-lower-leg,
        .left-lower-leg {
          border-radius: 15% 15% 50% 50%;
          top: 73%;
          height: 9em;
          width: 4.4em;
          transform-origin: 2.2em 2.2em;
        }

        .right-lower-leg {
          left: 0.6em;
          transform: rotate(-5deg);
        }

        .left-lower-leg {
          left: 0.3em;
          transform: rotate(5deg);
        }

        .right-foot,
        .left-foot {
          background-image:
            radial-gradient(
              0.3em 1.5em at 25% 93%,
              var(--spacer),
              var(--spacer) 50%,
              transparent 60%
            ),
            radial-gradient(
              0.3em 1.5em at 50% 93%,
              var(--spacer),
              var(--spacer) 50%,
              transparent 60%
            ),
            radial-gradient(
              0.3em 1.5em at 75% 93%,
              var(--spacer),
              var(--spacer) 50%,
              transparent 60%
            );
          border-radius: 2em;
          transform-origin: 1em 1em;
          top: 67%;
          left: 0.5em;
          height: 8.4em;
          width: 3.5em;
        }

        .right-foot {
          transform: rotate(15deg);
        }

        .left-foot {
          transform: rotate(-15deg);
        }

        .barrier {
          width: 100%;
          height: 1.5em;
        }

        @keyframes hang {
          from {
            transform: rotate(0.5deg);
          }
          to {
            transform: rotate(-0.5deg);
          }
        }

        @keyframes pivotLeg {
          from {
            transform: rotate(1.5deg);
          }
          to {
            transform: rotate(-1.5deg);
          }
        }

        @keyframes wagTail {
          from,
          50% {
            transform: rotate(30deg);
          }
          to {
            transform: rotate(20deg);
          }
        }

        @keyframes wagOuterTail {
          from,
          50% {
            transform: rotate(-30deg);
          }
          to {
            transform: rotate(-60deg);
          }
        }

        /* TEMPLATE-STYLE VIDEO, BUT SAFE INSIDE THE COLUMN */
        .longcat-video-wrapper {
        position: absolute;
        top: 18vh;           /* was 11.5vh – lower on screen */
        left: 50%;
        transform: translateX(-50%);
        width: min(60vw, 100%);
        max-width: 800px;
        aspect-ratio: 16 / 9;
        overflow: hidden;
        border-radius: 1.5rem;
        z-index: 2;
        }

        .longcat-video-wrapper video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 1024px) {
          .longcat {
            font-size: 0.45em;
          }
          .longcat-video-wrapper {
            top: 12vh;
            width: 100%;
            max-width: 600px;
          }
        }

      `}</style>

            <div className="longcat">
                <div className="right-ear" />
                <div className="left-ear" />
                <div className="right-arm">
                    <div className="right-paw" />
                </div>
                <div className="torso">
                    <div className="bottom">
                        <div className="tail">
                            <div className="tail-outer" />
                        </div>
                        <div className="right-leg">
                            <div className="right-lower-leg">
                                <div className="right-foot" />
                            </div>
                        </div>
                        <div className="left-leg">
                            <div className="left-lower-leg">
                                <div className="left-foot" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="head">
                    <div className="right-eye" />
                    <div className="left-eye" />
                    <div className="nose-mouth" />
                    <div className="right-cheek" />
                    <div className="left-cheek" />
                    {/* Whiskers */}
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="whisker" />
                    ))}
                </div>
                <div className="left-arm">
                    <div className="left-paw" />
                </div>
            </div>

            {/* Template-style video overlaying the cat */}
            <div className="longcat-video-wrapper border border-zinc-200 shadow-sm dark:border-zinc-800">
                <video
                    src={PROFILE.introVideo?.src}
                    poster={PROFILE.introVideo?.poster}
                    controls
                    playsInline
                />
            </div>

            <div className="barrier" />
        </div>
    );
}

/* ================================== App ==================================== */
export default function App() {
    const [intro, setIntro] = useState(true);
    const [fading, setFading] = useState(false);

    // Intro timers
    useEffect(() => {
        const t1 = setTimeout(() => setFading(true), INTRO_MS); // start fade
        const t2 = setTimeout(() => setIntro(false), INTRO_MS + FADE_MS); // remove overlay
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, []);

    const overlay = intro ? (
        <IntroOverlay
            onDismiss={() => {
                if (fading) return;
                setFading(true);
                setTimeout(() => setIntro(false), FADE_MS);
            }}
            fading={fading}
        />
    ) : null;

    return (
        <div className="dark">
            {overlay}
            <a
                href="#content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 rounded bg-indigo-600 px-3 py-2 text-white"
            >
                Skip to content
            </a>

            <div
                className="min-h-dvh bg-black text-zinc-800 transition dark:text-zinc-100"
                style={{ opacity: fading || !intro ? 1 : 0, transition: `opacity ${FADE_MS}ms ease` }}
            >
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
                            <a className={NL} href="#about">
                                About
                            </a>
                            <a className={NL} href="#projects">
                                Projects
                            </a>
                            <a className={NL} href="#contact">
                                Contact
                            </a>
                            <a
                                className="rounded-xl border border-zinc-300 px-3 py-1.5 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700"
                                href={LINKS[0].href}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Resume
                            </a>
                        </nav>
                    </div>
                </header>

                {/* Main */}
                <main id="content">
                    {/* Hero */}
                    <section className="mx-auto max-w-5xl px-4 py-16 md:py-24">
                        <div className="grid items-center gap-10 md:grid-cols-2">
                            <div>
                                <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                                    <span className="align-baseline">Soft</span>
                                    {/* Only scramble this segment */}
                                    <ScrambleTitle text="ware Engineer" start={fading} />
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
                                    {LINKS.filter((l) => l.label !== "Email").map(({ label, href, icon: Icon }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700"
                                        >
                                            <Icon className="h-4 w-4" /> {label}
                                        </a>
                                    ))}
                                </div>
                                <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                                    Based in {PROFILE.location}
                                </p>
                            </div>

                            {/* Music Player on the right, where the video used to be */}
                            <MusicPlayer />
                        </div>
                    </section>

                    {/* About */}
                    <style>{`
  .video-wrapper {
    /* template geometry, but column-safe */
    position: relative;
    width: min(60vw, 100%);
    max-width: 800px;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-radius: 1.5rem;
    z-index: 1;
  }

  .video-wrapper video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`}</style>

                    <Section id="about" title="About" hint="Crisp bio + focus areas">
                        <AboutScroller />

                        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] items-start">
                            {/* LEFT: stacked Personality + Skills charts */}
                            <RadarCharts />

                            {/* RIGHT: longcat + big template-style video */}
                            <LongcatWithVideo />
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
                            <div className="hidden md:block" aria-hidden />
                        </div>
                    </Section>

                    {/* Companies Ticker */}
                    <CompaniesTicker />
                </main>

                {/* Footer */}
                <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                    <div className="mx-auto max-w-5xl px-4">
                        <p>
                            © {new Date().getFullYear()} {PROFILE.name}. Built with React + Tailwind. Theme-aware, accessible, and
                            deploy-ready.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
