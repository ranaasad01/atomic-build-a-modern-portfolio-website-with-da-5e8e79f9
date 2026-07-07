"use client";
import { useRef, useState } from "react";
import Link from "next/link";

import { motion, useReducedMotion, type Variants } from "framer-motion";

import { ArrowRight, Code2 as Github, MessageCircle as Twitter, Briefcase as Linkedin, Mail, ExternalLink, Code, Sparkles, Star, CheckCircle, Terminal, Layout, Activity, FileCode, GitBranch, Eye } from 'lucide-react';

import {

  APP_NAME,

  APP_TAGLINE,

  APP_EMAIL,

} from "@/lib/data";

import {

  fadeInUp,

  fadeIn,

  staggerContainer,

  scaleIn,

  slideInLeft,

  slideInRight,

} from "@/lib/motion";

// ─── Inline data ────────────────────────────────────────────────────────────

const projects = [

  {

    id: "1",

    title: "Luminary UI",

    description:

      "A component library built for design-system teams. Ships with 80+ accessible primitives, dark-mode tokens, and a Figma plugin that syncs in real time.",

    tags: ["React", "TypeScript", "Radix UI", "Storybook"],

    image: "https://assets-us-01.kc-usercontent.com/90e79cae-25c6-00b5-6f5b-27efe5c250ab/76b96548-694f-46d7-a2f4-5b6f1b865f2d/UX%20Design.jpg?h=474&fm=webp",

    link: "#",

    featured: true,

  },

  {

    id: "2",

    title: "Orbit Analytics",

    description:

      "Real-time SaaS dashboard for e-commerce brands. Processes 2M+ events per day with sub-second latency using edge streaming.",

    tags: ["Next.js", "Supabase", "Recharts", "Tailwind"],

    image: "https://media.licdn.com/dms/image/v2/C4D0BAQGpxO-qmVX71w/company-logo_200_200/company-logo_200_200/0/1631343009150?e=2147483647&v=beta&t=83RkzALMJjbqpSvBJ8YVr9M9rqEaXa2HUVTnwDjd9xI",

    link: "#",

    featured: true,

  },

  {

    id: "3",

    title: "Pulse CMS",

    description:

      "Headless content platform with a visual block editor, multi-locale support, and a GraphQL API. Used by 40+ editorial teams.",

    tags: ["Node.js", "GraphQL", "PostgreSQL", "React"],

    image: "https://picsum.photos/seed/6efc5829ef14/800/600",

    link: "#",

    featured: false,

  },

  {

    id: "4",

    title: "Vanta Motion",

    description:

      "Open-source animation toolkit for Framer Motion. Provides 30 production-ready presets, a visual timeline editor, and export to CSS keyframes.",

    tags: ["Framer Motion", "TypeScript", "Vite", "Open Source"],

    image: "https://medvanta.com/files/image/auto-1200-any-fit/VantaMotion_0.webp",

    link: "#",

    featured: false,

  },

];

const skills = [

  { name: "React & Next.js", category: "Frontend", icon: Layout, level: 98 },

  { name: "TypeScript", category: "Language", icon: FileCode, level: 95 },

  { name: "Node.js & APIs", category: "Backend", icon: Terminal, level: 90 },

  { name: "UI / Motion Design", category: "Design", icon: Sparkles, level: 88 },

  { name: "Database & SQL", category: "Backend", icon: Activity, level: 82 },

  { name: "DevOps & CI/CD", category: "Infra", icon: GitBranch, level: 78 },

];

const experiences = [

  {

    id: "1",

    role: "Senior Frontend Engineer",

    company: "Vercel",

    period: "2022 — Present",

    description:

      "Lead the design-system guild, shipping the v3 component library adopted by 120+ internal teams. Reduced bundle size by 34% through tree-shaking and RSC migration.",

  },

  {

    id: "2",

    role: "Full-Stack Engineer",

    company: "Linear",

    period: "2020 — 2022",

    description:

      "Built the real-time collaboration layer powering live cursors and conflict-free editing for 50k+ daily active users. Owned the public API and webhook infrastructure.",

  },

  {

    id: "3",

    role: "Frontend Developer",

    company: "Framer",

    period: "2018 — 2020",

    description:

      "Developed the canvas renderer and interaction engine for Framer's no-code editor. Shipped the first version of the component marketplace.",

  },

];

const testimonials = [

  {

    id: "1",

    quote:

      "Alex shipped our entire design system in six weeks. The quality and attention to detail were unlike anything I had seen from a contractor.",

    author: "Sarah Chen",

    role: "Head of Design, Notion",

    avatar: "https://cdn.tatlerasia.com/tatlerasia/i/2023/10/18163147-untitled-design-4_cover_1600x938.jpg",

  },

  {

    id: "2",

    quote:

      "Working with Alex felt like having a senior engineer and a product designer in one. Every decision was thoughtful and well-reasoned.",

    author: "Marcus Webb",

    role: "CTO, Raycast",

    avatar: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/1024/512/031614-42-NFL-Bears-JMarcus-Webb-OB-555229a2ff24f410VgnVCM100000d7c1a8c0____.jpg?ve=1&tl=1",

  },

  {

    id: "3",

    quote:

      "The performance improvements Alex delivered cut our LCP by half. Our conversion rate went up 18% the week after launch.",

    author: "Priya Nair",

    role: "VP Engineering, Loom",

    avatar: "https://images.ctfassets.net/vztl6s0hp3ro/26BxtJGxXUMSWAQfPZfbVC/3838688bab3369fc3e6ee9bf9629a427/The-entry-level-listing-asking-for_-3-plus-years-of-experience.jpg",

  },

];

const stats = [

  { value: "8+", label: "Years of experience" },

  { value: "60+", label: "Projects shipped" },

  { value: "30+", label: "Happy clients" },

  { value: "12M+", label: "Users reached" },

];

const services = [

  {

    icon: Layout,

    title: "Product Engineering",

    description:

      "End-to-end feature development from architecture to deployment. I write code that scales and teams can maintain.",

  },

  {

    icon: Sparkles,

    title: "Design Systems",

    description:

      "Accessible, token-driven component libraries that bridge design and engineering. Built to last.",

  },

  {

    icon: Activity,

    title: "Performance Audits",

    description:

      "Deep-dive analysis of Core Web Vitals, bundle composition, and rendering paths. Actionable fixes, measurable results.",

  },

  {

    icon: Code,

    title: "Technical Consulting",

    description:

      "Architecture reviews, tech-stack decisions, and team mentorship. Honest advice without the agency overhead.",

  },

];

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {

  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-widest mb-4"
      data-atomic-id="apzw12w"
      style={{
        color: "#ef4444"
      }}>Not Available for new projects</span>
  );

}

function GradientText({ children }: { children: React.ReactNode }) {

  return (
    <span
      className="bg-gradient-to-r from-white via-white to-purple-300 bg-clip-text text-transparent"
      data-atomic-id="aveeent">
      {children}
    </span>
  );

}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {

  const shouldReduce = useReducedMotion();

  const [formState, setFormState] = useState({

    name: "",

    email: "",

    message: "",

  });

  const [submitted, setSubmitted] = useState(false);

  const motionProps = (variants: Variants) =>

    shouldReduce

      ? {}

      : {

          variants,

          initial: "hidden" as const,

          whileInView: "visible" as const,

          viewport: { once: true, margin: "-80px" },

        };

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    setSubmitted(true);

  };

  return (
    <main
      className="bg-[#0a0a0a] text-white overflow-x-hidden"
      data-atomic-id="a10q77d3">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        data-atomic-id="a1ogh7gc">

        {/* Background glow */}

        <div className="absolute inset-0 pointer-events-none" data-atomic-id="awnujjj">

          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-purple-600/10 blur-[120px]"
            data-atomic-id="a12mu2j6" />

          <div
            className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-indigo-600/8 blur-[80px]"
            data-atomic-id="a12o8wno" />

          {/* Subtle grid */}

          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{

              backgroundImage:

                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",

              backgroundSize: "60px 60px",

            }}
            data-atomic-id="a12r2kwo" />

        </div>

        <div
          className="relative max-w-6xl mx-auto px-6 pt-32 pb-24 grid md:grid-cols-2 gap-16 items-center"
          data-atomic-id="awp9do1"
          style={{
            backgroundColor: "#22c55e"
          }}>

          {/* Left: copy */}

          <motion.div

            variants={staggerContainer}

            initial="hidden"

            animate="visible"

            className="flex flex-col"

          >

            <motion.div variants={fadeInUp}>

              <SectionLabel>

                <Sparkles size={11} />

                Available for new projects

              </SectionLabel>

            </motion.div>

            <motion.h1

              variants={fadeInUp}

              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-balance mb-6"

            >

              <GradientText>Creative</GradientText>

              <br data-atomic-id="aikgpw1" />

              developer

              <br data-atomic-id="aiki9cj" />

              <span className="text-white/30" data-atomic-id="a1evbxdf">&amp; builder.</span>

            </motion.h1>

            <motion.p

              variants={fadeInUp}

              className="text-white/50 text-lg leading-relaxed max-w-md mb-10 text-pretty"

            >

              I&apos;m {APP_NAME}, a {APP_TAGLINE.toLowerCase()} who turns

              complex problems into elegant, fast, and accessible digital

              products. Eight years shipping software that people love to use.

            </motion.p>

            <motion.div

              variants={fadeInUp}

              className="flex flex-wrap items-center gap-4"

            >

              <Link

                href="#projects"

                onClick={(e) => {

                  e.preventDefault();

                  document

                    .querySelector("#projects")

                    ?.scrollIntoView({ behavior: "smooth" });

                }}

                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-500 text-white font-semibold text-sm hover:bg-purple-400 transition-all duration-300 shadow-[0_0_24px_rgba(168,85,247,0.35)] hover:shadow-[0_0_36px_rgba(168,85,247,0.55)]"

              >

                View my work

                <ArrowRight

                  size={15}

                  className="group-hover:translate-x-1 transition-transform duration-200"

                />

              </Link>

              <Link

                href="#contact"

                onClick={(e) => {

                  e.preventDefault();

                  document

                    .querySelector("#contact")

                    ?.scrollIntoView({ behavior: "smooth" });

                }}

                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white/70 font-semibold text-sm hover:border-white/30 hover:text-white transition-all duration-300"

              >

                Get in touch

              </Link>

            </motion.div>

            {/* Social row */}

            <motion.div

              variants={fadeInUp}

              className="flex items-center gap-4 mt-10"

            >

              {[

                { icon: Github, href: "https://github.com", label: "GitHub" },

                {

                  icon: Twitter,

                  href: "https://twitter.com",

                  label: "Twitter",

                },

                {

                  icon: Linkedin,

                  href: "https://linkedin.com",

                  label: "LinkedIn",

                },

                { icon: Mail, href: `mailto:${APP_EMAIL}`, label: "Email" },

              ].map(({ icon: Icon, href, label }, __atomicIdx) => (<a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={

                  href.startsWith("http") ? "noopener noreferrer" : undefined

                }
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-purple-400 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300"
                data-atomic-id="a1hn9yfq"
                data-atomic-instance={__atomicIdx}>
                <Icon size={15} />
              </a>))}

            </motion.div>

          </motion.div>

          {/* Right: visual card */}

          <motion.div

            variants={slideInRight}

            initial="hidden"

            animate="visible"

            className="hidden md:flex justify-center items-center"

          >

            <div className="relative w-full max-w-sm" data-atomic-id="a1kyz7z1">

              {/* Glow ring */}

              <div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-600/20 to-indigo-600/10 blur-2xl"
                data-atomic-id="a1ncla2q" />

              <div
                className="relative rounded-2xl overflow-hidden border border-white/8 shadow-[0_8px_64px_rgba(0,0,0,0.6)]"
                data-atomic-id="a1ne0478">

                <img
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/198143ff-55cc-44d3-a66f-e19c60f91635/ddutnwl-8f83b483-9f4f-41f4-b79a-41e45d67f9ae.jpg/v1/fill/w_821,h_973,q_70,strp/alex_mercer_portrait_by_maironru_ddutnwl-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA0NiIsInBhdGgiOiIvZi8xOTgxNDNmZi01NWNjLTQ0ZDMtYTY2Zi1lMTljNjBmOTE2MzUvZGR1dG53bC04ZjgzYjQ4My05ZjRmLTQxZjQtYjc5YS00MWU0NWQ2N2Y5YWUuanBnIiwid2lkdGgiOiI8PTg4MyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.I8v4Uzq6CdpcLr4WQiaFXRz860wN0yPXIssFD8pjdpk"
                  alt={`${APP_NAME} — ${APP_TAGLINE}`}
                  className="w-full aspect-[4/5] object-cover"
                  data-atomic-id="aj1gqf5" />

                {/* Overlay badge */}

                <div
                  className="absolute bottom-4 left-4 right-4 bg-[#0f0f0f]/80 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3"
                  data-atomic-id="aj4aadn">

                  <span
                    className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] flex-shrink-0"
                    data-atomic-id="a1ygg09p" />

                  <div data-atomic-id="a10m2r1s">

                    <p
                      className="text-white text-sm font-semibold leading-none mb-0.5"
                      data-atomic-id="ayefrgg">

                      {APP_NAME}

                    </p>

                    <p className="text-white/40 text-xs" data-atomic-id="ayeft4y">{APP_TAGLINE}</p>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Scroll indicator */}

        <motion.div

          initial={{ opacity: 0, y: 10 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ delay: 1.4, duration: 0.6 }}

          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"

        >

          <span
            className="text-white/20 text-xs tracking-widest uppercase"
            data-atomic-id="arrnhzb">

            Scroll

          </span>

          <motion.div

            animate={{ y: [0, 6, 0] }}

            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}

            className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"

          />

        </motion.div>

      </section>
      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section
        className="border-y border-white/5 bg-white/[0.02]"
        data-atomic-id="a1bofw1s">

        <motion.div

          variants={staggerContainer}

          {...motionProps(staggerContainer)}

          className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8"

        >

          {stats.map((stat, __atomicIdx) => (<motion.div

            key={stat.label}

            variants={fadeInUp}

            className="flex flex-col items-center text-center"

          >
            <span
              className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-1"
              data-atomic-id="afmy07l"
              data-atomic-instance={__atomicIdx}
              style={__atomicIdx === 3 ? {
                color: "#ef4444"
              } : undefined}>

              {stat.value}

            </span>
            <span
              className="text-white/35 text-sm"
              data-atomic-id="agxjmc3"
              data-atomic-instance={__atomicIdx}>{stat.label}</span>
          </motion.div>))}

        </motion.div>

      </section>
      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section id="about" className="py-28 md:py-36" data-atomic-id="a1m7q7hn">

        <div className="max-w-6xl mx-auto px-6" data-atomic-id="acew6ws">

          <div
            className="grid md:grid-cols-2 gap-16 items-start"
            data-atomic-id="a1n89upr">

            {/* Left: image + experience timeline */}

            <motion.div

              variants={slideInLeft}

              {...motionProps(slideInLeft)}

              className="space-y-6"

            >

              <div
                className="relative rounded-2xl overflow-hidden border border-white/8 shadow-[0_4px_40px_rgba(0,0,0,0.5)]"
                data-atomic-id="a1n517jb">

                <img
                  src="https://titoaistorageaccount.blob.core.windows.net/titoai-storage/assets/5e8e79f9-d63d-43f9-9f01-a11e18e461ec/b8ebbaa064f94aaea3346ff09df95dee.png?v=1783412987615"
                  alt="Alex Mercer's workspace"
                  className="w-full aspect-video object-cover"
                  data-atomic-id="a15j7wuc" />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent"
                  data-atomic-id="a15kmmoc" />

              </div>

              {/* Experience timeline */}

              <div className="space-y-4" data-atomic-id="a1n7uvsb">

                {experiences.map((exp, i) => (

                  <motion.div

                    key={exp.id}

                    variants={fadeInUp}

                    {...motionProps(fadeInUp)}

                    className="relative pl-6 border-l border-white/8 group"

                  >

                    <span
                      className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-purple-500 border-2 border-[#0a0a0a] group-hover:scale-125 transition-transform duration-200"
                      data-atomic-id="ao4kbt7"
                      data-atomic-instance={i} />

                    <div
                      className="flex items-baseline justify-between gap-2 mb-0.5"
                      data-atomic-id="asr2ihq"
                      data-atomic-instance={i}>

                      <p
                        className="text-white font-semibold text-sm"
                        data-atomic-id="a1mkm1bi"
                        data-atomic-instance={i}>

                        {exp.role}

                      </p>

                      <span
                        className="text-white/25 text-xs flex-shrink-0"
                        data-atomic-id="a1si3sj6"
                        data-atomic-instance={i}>

                        {exp.period}

                      </span>

                    </div>

                    <p
                      className="text-purple-400 text-xs font-medium mb-1"
                      data-atomic-id="a1dnvlyl"
                      data-atomic-instance={i}>

                      {exp.company}

                    </p>

                    <p
                      className="text-white/40 text-xs leading-relaxed"
                      data-atomic-id="a1dnvnn3"
                      data-atomic-instance={i}>

                      {exp.description}

                    </p>

                  </motion.div>

                ))}

              </div>

            </motion.div>

            {/* Right: copy + services */}

            <motion.div

              variants={staggerContainer}

              {...motionProps(staggerContainer)}

              className="flex flex-col"

            >

              <motion.div variants={fadeInUp}>

                <SectionLabel>About me</SectionLabel>

              </motion.div>

              <motion.h2

                variants={fadeInUp}

                className="font-display text-4xl md:text-5xl font-bold tracking-tight text-balance mb-6"

              >

                Building at the intersection of{" "}

                <GradientText>craft and code</GradientText>

              </motion.h2>

              <motion.p

                variants={fadeInUp}

                className="text-white/50 leading-relaxed mb-4 text-pretty"

              >

                I started writing code at 16, building browser games nobody

                asked for. Today I help startups and scale-ups ship products

                that are fast, accessible, and genuinely delightful to use.

              </motion.p>

              <motion.p

                variants={fadeInUp}

                className="text-white/50 leading-relaxed mb-10 text-pretty"

              >

                My background spans frontend architecture, design systems, and

                full-stack product work. I care deeply about the details that

                most people skip: keyboard navigation, sub-100ms interactions,

                and copy that actually communicates.

              </motion.p>

              {/* Services grid */}

              <motion.div

                variants={staggerContainer}

                className="grid grid-cols-1 sm:grid-cols-2 gap-4"

              >

                {services.map((svc, __atomicIdx) => (<motion.div

                  key={svc.title}

                  variants={scaleIn}

                  whileHover={{ y: -3, transition: { duration: 0.2 } }}

                  className="p-5 rounded-xl bg-white/[0.03] border border-white/8 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.2)]"

                >
                  <svc.icon

                    size={20}

                    className="text-purple-400 mb-3"

                  />
                  <p
                    className="text-white font-semibold text-sm mb-1"
                    data-atomic-id="a1p9suv0"
                    data-atomic-instance={__atomicIdx}>

                    {svc.title}

                  </p>
                  <p
                    className="text-white/40 text-xs leading-relaxed"
                    data-atomic-id="a1p9swji"
                    data-atomic-instance={__atomicIdx}>

                    {svc.description}

                  </p>
                </motion.div>))}

              </motion.div>

            </motion.div>

          </div>

        </div>

      </section>
      {/* ── PROJECTS ─────────────────────────────────────────────────────── */}
      <section
        id="projects"
        className="py-28 md:py-36 bg-white/[0.015] border-y border-white/5"
        data-atomic-id="a19fow33">

        <div className="max-w-6xl mx-auto px-6" data-atomic-id="apynbls">

          <motion.div

            variants={staggerContainer}

            {...motionProps(staggerContainer)}

            className="flex flex-col items-center text-center mb-16"

          >

            <motion.div variants={fadeInUp}>

              <SectionLabel>Selected work</SectionLabel>

            </motion.div>

            <motion.h2

              variants={fadeInUp}

              className="font-display text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4"

            >

              Projects I&apos;m proud of

            </motion.h2>

            <motion.p

              variants={fadeInUp}

              className="text-white/40 max-w-lg text-pretty leading-relaxed"

            >

              A curated selection of products, tools, and experiments built

              over the past eight years.

            </motion.p>

          </motion.div>

          {/* Featured: large 2-col */}

          <motion.div

            variants={staggerContainer}

            {...motionProps(staggerContainer)}

            className="grid md:grid-cols-2 gap-6 mb-6"

          >

            {projects

              .filter((p) => p.featured)

              .map((project, __atomicIdx) => (<motion.article

              key={project.id}

              variants={scaleIn}

              whileHover={{ y: -4, transition: { duration: 0.25 } }}

              className="group relative rounded-2xl overflow-hidden border border-white/8 bg-white/[0.03] hover:border-purple-500/30 transition-all duration-300 shadow-[0_4px_32px_rgba(0,0,0,0.3)]"

            >
              <div
                className="relative overflow-hidden aspect-video"
                data-atomic-id="azun9mg"
                data-atomic-instance={__atomicIdx}>

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-atomic-id="a148pqb9"
                  data-atomic-instance={__atomicIdx} />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent"
                  data-atomic-id="a14a4g59"
                  data-atomic-instance={__atomicIdx} />

              </div>
              <div
                className="p-6"
                data-atomic-id="azw23qy"
                data-atomic-instance={__atomicIdx}>

                <div
                  className="flex flex-wrap gap-2 mb-3"
                  data-atomic-id="a1b0l6d9"
                  data-atomic-instance={__atomicIdx}>

                  {project.tags.map((tag, __atomicIdx) => (<span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium"
                    data-atomic-id="ayy27dm"
                    data-atomic-instance={__atomicIdx}>
                    {tag}
                  </span>))}

                </div>

                <h3
                  className="text-white font-bold text-xl mb-2"
                  data-atomic-id="amy7rxz"
                  data-atomic-instance={__atomicIdx}>

                  {project.title}

                </h3>

                <p
                  className="text-white/45 text-sm leading-relaxed mb-4"
                  data-atomic-id="az4um1a"
                  data-atomic-instance={__atomicIdx}>

                  {project.description}

                </p>

                <a
                  href={project.link ?? "#"}
                  className="inline-flex items-center gap-1.5 text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors duration-200 group/link"
                  data-atomic-id="az4unpd"
                  data-atomic-instance={__atomicIdx}>

                  View project

                  <ExternalLink

                    size={13}

                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"

                  />

                </a>

              </div>
            </motion.article>))}

          </motion.div>

          {/* Smaller: 2-col list */}

          <motion.div

            variants={staggerContainer}

            {...motionProps(staggerContainer)}

            className="grid md:grid-cols-2 gap-4"

          >

            {projects

              .filter((p) => !p.featured)

              .map((project, __atomicIdx) => (<motion.article

              key={project.id}

              variants={fadeInUp}

              whileHover={{ x: 4, transition: { duration: 0.2 } }}

              className="group flex gap-5 p-5 rounded-xl border border-white/8 bg-white/[0.02] hover:border-purple-500/25 hover:bg-purple-500/5 transition-all duration-300"

            >
              <div
                className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-white/8"
                data-atomic-id="a12bctx8"
                data-atomic-instance={__atomicIdx}>

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400"
                  data-atomic-id="a14qa0ah"
                  data-atomic-instance={__atomicIdx} />

              </div>
              <div
                className="flex-1 min-w-0"
                data-atomic-id="a12cro1q"
                data-atomic-instance={__atomicIdx}>

                <h3
                  className="text-white font-semibold text-base mb-1"
                  data-atomic-id="a5qsry1"
                  data-atomic-instance={__atomicIdx}>

                  {project.title}

                </h3>

                <p
                  className="text-white/40 text-xs leading-relaxed mb-2 line-clamp-2"
                  data-atomic-id="a1qlfe34"
                  data-atomic-instance={__atomicIdx}>

                  {project.description}

                </p>

                <div
                  className="flex flex-wrap gap-1.5"
                  data-atomic-id="a1bkz4lh"
                  data-atomic-instance={__atomicIdx}>

                  {project.tags.slice(0, 3).map((tag, __atomicIdx) => (<span
                    key={tag}
                    className="px-2 py-0.5 rounded-full bg-white/5 text-white/40 text-xs"
                    data-atomic-id="amyp6ci"
                    data-atomic-instance={__atomicIdx}>
                    {tag}
                  </span>))}

                </div>

              </div>
              <a
                href={project.link ?? "#"}
                aria-label={`View ${project.title}`}
                className="flex-shrink-0 self-start mt-1 text-white/20 hover:text-purple-400 transition-colors duration-200"
                data-atomic-id="a1aqj2gu"
                data-atomic-instance={__atomicIdx}>

                <Eye size={16} />

              </a>
            </motion.article>))}

          </motion.div>

        </div>

      </section>
      {/* ── SKILLS ───────────────────────────────────────────────────────── */}
      <section id="skills" className="py-28 md:py-36" data-atomic-id="awnnkoj">

        <div className="max-w-6xl mx-auto px-6" data-atomic-id="a13iegas">

          <div
            className="grid md:grid-cols-[1fr_1.4fr] gap-16 items-start"
            data-atomic-id="avf8tdz">

            {/* Left: heading */}

            <motion.div

              variants={staggerContainer}

              {...motionProps(staggerContainer)}

            >

              <motion.div variants={fadeInUp}>

                <SectionLabel>Expertise</SectionLabel>

              </motion.div>

              <motion.h2

                variants={fadeInUp}

                className="font-display text-4xl md:text-5xl font-bold tracking-tight text-balance mb-6"

              >

                Tools I reach for{" "}

                <GradientText>every day</GradientText>

              </motion.h2>

              <motion.p

                variants={fadeInUp}

                className="text-white/45 leading-relaxed text-pretty mb-8"

              >

                Eight years of building has given me strong opinions about the

                right tool for the job. Here&apos;s where I spend most of my

                time.

              </motion.p>

              <motion.div

                variants={fadeInUp}

                className="flex flex-wrap gap-2"

              >

                {[

                  "React",

                  "Next.js",

                  "TypeScript",

                  "Tailwind CSS",

                  "Framer Motion",

                  "Node.js",

                  "PostgreSQL",

                  "Figma",

                  "Vercel",

                  "Docker",

                ].map((tech) => (

                  <motion.span

                    key={tech}

                    whileHover={{ scale: 1.05 }}

                    className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/8 text-white/60 text-xs font-medium hover:border-purple-500/30 hover:text-purple-300 transition-all duration-200 cursor-default"

                  >

                    {tech}

                  </motion.span>

                ))}

              </motion.div>

            </motion.div>

            {/* Right: skill bars */}

            <motion.div

              variants={staggerContainer}

              {...motionProps(staggerContainer)}

              className="space-y-5"

            >

              {skills.map((skill, __atomicIdx) => (<motion.div key={skill.name} variants={fadeInUp}>
                <div
                  className="flex items-center justify-between mb-2"
                  data-atomic-id="a1tzag0x"
                  data-atomic-instance={__atomicIdx}>

                  <div
                    className="flex items-center gap-2.5"
                    data-atomic-id="a5r3d50"
                    data-atomic-instance={__atomicIdx}>

                    <skill.icon size={15} className="text-purple-400" />

                    <span
                      className="text-white text-sm font-medium"
                      data-atomic-id="a1agr2hk"
                      data-atomic-instance={__atomicIdx}>

                      {skill.name}

                    </span>

                    <span
                      className="text-white/25 text-xs"
                      data-atomic-id="a1brcom2"
                      data-atomic-instance={__atomicIdx}>

                      {skill.category}

                    </span>

                  </div>

                  <span
                    className="text-white/40 text-xs font-mono"
                    data-atomic-id="a1d2s94l"
                    data-atomic-instance={__atomicIdx}>

                    {skill.level}%

                  </span>

                </div>
                <div
                  className="h-1.5 rounded-full bg-white/5 overflow-hidden"
                  data-atomic-id="a1u0pa5f"
                  data-atomic-instance={__atomicIdx}>

                  <motion.div

                    initial={{ width: 0 }}

                    whileInView={{ width: `${skill.level}%` }}

                    viewport={{ once: true }}

                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}

                    className="h-full rounded-full bg-gradient-to-r from-purple-600 to-purple-400"

                  />

                </div>
              </motion.div>))}

            </motion.div>

          </div>

        </div>

      </section>
      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section
        className="py-28 md:py-36 bg-white/[0.015] border-y border-white/5 overflow-hidden"
        data-atomic-id="a1gy2rny">

        <div className="max-w-6xl mx-auto px-6" data-atomic-id="a1nxmj0f">

          <motion.div

            variants={staggerContainer}

            {...motionProps(staggerContainer)}

            className="flex flex-col items-center text-center mb-16"

          >

            <motion.div variants={fadeInUp}>

              <SectionLabel>

                <Star size={11} />

                Social proof

              </SectionLabel>

            </motion.div>

            <motion.h2

              variants={fadeInUp}

              className="font-display text-4xl md:text-5xl font-bold tracking-tight text-balance"

            >

              What clients say

            </motion.h2>

          </motion.div>

          <motion.div

            variants={staggerContainer}

            {...motionProps(staggerContainer)}

            className="grid md:grid-cols-3 gap-6"

          >

            {testimonials.map((t, i) => (

              <motion.div

                key={t.id}

                variants={scaleIn}

                whileHover={{ y: -5, transition: { duration: 0.25 } }}

                className={`relative p-7 rounded-2xl border border-white/8 bg-white/[0.03] hover:border-purple-500/25 transition-all duration-300 shadow-[0_4px_32px_rgba(0,0,0,0.25)] ${

                  i === 1 ? "md:mt-6" : ""

                }`}

              >

                {/* Quote mark */}

                <span
                  className="absolute top-5 right-6 text-purple-500/20 font-display text-6xl leading-none select-none"
                  data-atomic-id="a1lz8t5y"
                  data-atomic-instance={i}>

                  &ldquo;

                </span>

                <div
                  className="flex gap-1 mb-4"
                  data-atomic-id="a1wisdjt"
                  data-atomic-instance={i}>

                  {Array.from({ length: 5 }).map((_, si) => (

                    <Star

                      key={si}

                      size={13}

                      className="text-purple-400 fill-purple-400"

                    />

                  ))}

                </div>

                <p
                  className="text-white/65 text-sm leading-relaxed mb-6 relative z-10"
                  data-atomic-id="alww148"
                  data-atomic-instance={i}>

                  &ldquo;{t.quote}&rdquo;

                </p>

                <div
                  className="flex items-center gap-3"
                  data-atomic-id="a1wlm1st"
                  data-atomic-instance={i}>

                  <div
                    className="w-10 h-10 rounded-full overflow-hidden border border-white/10 flex-shrink-0"
                    data-atomic-id="ab4txog"
                    data-atomic-instance={i}>

                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="w-full h-full object-cover"
                      data-atomic-id="a1e1g43h"
                      data-atomic-instance={i} />

                  </div>

                  <div data-atomic-id="ab68rsy" data-atomic-instance={i}>

                    <p
                      className="text-white text-sm font-semibold leading-none mb-0.5"
                      data-atomic-id="awnxxsi"
                      data-atomic-instance={i}>

                      {t.author}

                    </p>

                    <p
                      className="text-white/35 text-xs"
                      data-atomic-id="awnxzh0"
                      data-atomic-instance={i}>{t.role}</p>

                  </div>

                </div>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>
      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-28 md:py-36 relative overflow-hidden"
        data-atomic-id="a1461g9e">

        {/* Background glow */}

        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-purple-600/8 blur-[100px] pointer-events-none"
          data-atomic-id="a2hofut" />

        <div className="relative max-w-6xl mx-auto px-6" data-atomic-id="a2j39zb">

          <div
            className="grid md:grid-cols-2 gap-16 items-start"
            data-atomic-id="a1yelj56">

            {/* Left: copy */}

            <motion.div

              variants={staggerContainer}

              {...motionProps(staggerContainer)}

            >

              <motion.div variants={fadeInUp}>

                <SectionLabel>Get in touch</SectionLabel>

              </motion.div>

              <motion.h2

                variants={fadeInUp}

                className="font-display text-4xl md:text-5xl font-bold tracking-tight text-balance mb-6"

              >

                Let&apos;s build something{" "}

                <GradientText>great together</GradientText>

              </motion.h2>

              <motion.p

                variants={fadeInUp}

                className="text-white/45 leading-relaxed text-pretty mb-10"

              >

                I&apos;m currently open to senior engineering roles, fractional

                CTO engagements, and select consulting projects. If you have

                something interesting, I&apos;d love to hear about it.

              </motion.p>

              <motion.div variants={staggerContainer} className="space-y-4">

                {[

                  {

                    icon: Mail,

                    label: "Email",

                    value: APP_EMAIL,

                    href: `mailto:${APP_EMAIL}`,

                  },

                  {

                    icon: Github,

                    label: "GitHub",

                    value: "github.com/alexmercer",

                    href: "https://github.com",

                  },

                  {

                    icon: Linkedin,

                    label: "LinkedIn",

                    value: "linkedin.com/in/alexmercer",

                    href: "https://linkedin.com",

                  },

                ].map((item, __atomicIdx) => (<motion.a

                  key={item.label}

                  variants={fadeInUp}

                  href={item.href}

                  target={

                    item.href.startsWith("http") ? "_blank" : undefined

                  }

                  rel={

                    item.href.startsWith("http")

                      ? "noopener noreferrer"

                      : undefined

                  }

                  whileHover={{ x: 4 }}

                  className="flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-white/[0.02] hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 group"

                >
                  <div
                    className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0"
                    data-atomic-id="a1p0u32h"
                    data-atomic-instance={__atomicIdx}>

                    <item.icon size={16} className="text-purple-400" />

                  </div>
                  <div data-atomic-id="a1p28x6z" data-atomic-instance={__atomicIdx}>

                    <p
                      className="text-white/35 text-xs mb-0.5"
                      data-atomic-id="ax3p96j"
                      data-atomic-instance={__atomicIdx}>

                      {item.label}

                    </p>

                    <p
                      className="text-white text-sm font-medium group-hover:text-purple-300 transition-colors duration-200"
                      data-atomic-id="ax3pav1"
                      data-atomic-instance={__atomicIdx}>

                      {item.value}

                    </p>

                  </div>
                  <ArrowRight

                    size={14}

                    className="ml-auto text-white/20 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-200"

                  />
                </motion.a>))}

              </motion.div>

            </motion.div>

            {/* Right: form */}

            <motion.div

              variants={slideInRight}

              {...motionProps(slideInRight)}

              className="relative"

            >

              <div
                className="p-8 rounded-2xl border border-white/8 bg-white/[0.03] shadow-[0_8px_48px_rgba(0,0,0,0.4)]"
                data-atomic-id="atxwuu">

                {submitted ? (

                  <motion.div

                    initial={{ opacity: 0, scale: 0.9 }}

                    animate={{ opacity: 1, scale: 1 }}

                    className="flex flex-col items-center justify-center py-12 text-center"

                  >

                    <div
                      className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4"
                      data-atomic-id="a9jx98v">

                      <CheckCircle size={28} className="text-emerald-400" />

                    </div>

                    <h3 className="text-white font-bold text-xl mb-2" data-atomic-id="a19hpuvd">

                      Message sent!

                    </h3>

                    <p
                      className="text-white/45 text-sm leading-relaxed"
                      data-atomic-id="ac52ja8">

                      Thanks for reaching out. I&apos;ll get back to you within

                      24 hours.

                    </p>

                  </motion.div>

                ) : (

                  <form onSubmit={handleSubmit} className="space-y-5" data-atomic-id="aecwxo8">

                    <div data-atomic-id="a17b2xje">

                      <label
                        htmlFor="name"
                        className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider"
                        data-atomic-id="a1jbdx4a">

                        Your name

                      </label>

                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>

                          setFormState((s) => ({ ...s, name: e.target.value }))

                        }
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-purple-500/5 transition-all duration-200"
                        data-atomic-id="aqy98qk" />

                    </div>

                    <div data-atomic-id="a17chrnw">

                      <label
                        htmlFor="email"
                        className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider"
                        data-atomic-id="a19dipt8">

                        Email address

                      </label>

                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>

                          setFormState((s) => ({

                            ...s,

                            email: e.target.value,

                          }))

                        }
                        placeholder="jane@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-purple-500/5 transition-all duration-200"
                        data-atomic-id="ah0e1fi" />

                    </div>

                    <div data-atomic-id="a17dwlse">

                      <label
                        htmlFor="message"
                        className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider"
                        data-atomic-id="azfnii6">

                        Message

                      </label>

                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) =>

                          setFormState((s) => ({

                            ...s,

                            message: e.target.value,

                          }))

                        }
                        placeholder="Tell me about your project..."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-purple-500/5 transition-all duration-200 resize-none"
                        data-atomic-id="a112akr2" />

                    </div>

                    <motion.button

                      type="submit"

                      whileHover={{ scale: 1.02 }}

                      whileTap={{ scale: 0.98 }}

                      className="w-full py-3.5 rounded-xl bg-purple-500 text-white font-semibold text-sm hover:bg-purple-400 transition-all duration-300 shadow-[0_0_24px_rgba(168,85,247,0.3)] hover:shadow-[0_0_36px_rgba(168,85,247,0.5)] flex items-center justify-center gap-2 group"

                    >

                      Send message

                      <ArrowRight

                        size={15}

                        className="group-hover:translate-x-1 transition-transform duration-200"

                      />

                    </motion.button>

                  </form>

                )}

              </div>

            </motion.div>

          </div>

        </div>

      </section>
    </main>
  );

}