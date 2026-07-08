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

    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/assets/5e8e79f9-d63d-43f9-9f01-a11e18e461ec/98c1dc5aa565492898fccb8b801a4b10.png?v=1783510438601",

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

      "Prototyped and shipped the canvas interaction engine. Contributed to the open-source motion library and mentored 3 junior engineers through structured pairing sessions.",

  },

];

const socials = [

  { icon: Github, label: "GitHub", href: "https://github.com" },

  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },

  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },

  { icon: Mail, label: "Email", href: `mailto:${APP_EMAIL}` },

];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Home() {

  const shouldReduceMotion = useReducedMotion();

  const formRef = useRef<HTMLFormElement>(null);

  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    setFormState("sending");

    await new Promise((r) => setTimeout(r, 1400));

    setFormState("sent");

  };

  return (
    <main
      className="min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden"
      data-atomic-id="a1oa65aa">
      {/* ── HERO ── */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
        data-atomic-id="awm7r07">

        {/* Background glows */}

        <div className="absolute inset-0 pointer-events-none" data-atomic-id="au3t4lm">

          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"
            data-atomic-id="a13j3clp" />

          <div
            className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]"
            data-atomic-id="a13ki6q7" />

        </div>

        {/* Grid overlay */}

        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{

            backgroundImage:

              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",

            backgroundSize: "72px 72px",

          }}
          data-atomic-id="au6msum" />

        <motion.div

          variants={staggerContainer}

          initial="hidden"

          animate="visible"

          className="relative z-10 max-w-4xl mx-auto text-center"

        >

          {/* Badge */}

          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-medium tracking-widest uppercase mb-8" style={{ backgroundColor: "#f97316" }} >

            <Sparkles size={12} />

            Available for work

          </motion.div>

          {/* Headline */}

          <motion.h1

            variants={fadeInUp}

            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"

          >

            Hi, I&apos;m{" "}

            <span
              className="bg-gradient-to-r from-blue-400 via-blue-400 to-blue-600 bg-clip-text text-transparent"
              data-atomic-id="a1se5xt9">Junaid</span>

          </motion.h1>

          {/* Sub */}

          <motion.p

            variants={fadeInUp}

            className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10"

          >

            I build{" "}

            <span className="text-white/80 font-medium" data-atomic-id="afhc5ko">fast, accessible, beautiful</span>{" "}

            web products — from pixel-perfect UIs to scalable backend systems.

          </motion.p>

          {/* CTAs */}

          <motion.div

            variants={fadeInUp}

            className="flex flex-wrap items-center justify-center gap-4"

          >

            <a
              href="#projects"
              style={{ backgroundColor: "#ef4444" }}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 shadow-[0_0_24px_rgba(168,85,247,0.35)] hover:shadow-[0_0_36px_rgba(168,85,247,0.55)] hover:scale-105"
              data-atomic-id="a10yxch5">

              View my work

              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />

            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white/80 border border-white/10 hover:border-white/30 hover:text-white bg-white/5 hover:bg-white/10 transition-all duration-300"
              data-atomic-id="a10yxe5n">

              Get in touch

            </a>

          </motion.div>

          {/* Socials */}

          <motion.div

            variants={fadeInUp}

            className="flex items-center justify-center gap-4 mt-12"

          >

            {socials.map(({ icon: Icon, label, href }, __atomicIdx) => (<a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300"
              data-atomic-id="a3i6r88"
              data-atomic-instance={__atomicIdx}>
              <Icon size={16} />
            </a>))}

          </motion.div>

        </motion.div>

        {/* Scroll indicator */}

        <motion.div

          initial={{ opacity: 0, y: 10 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ delay: 1.2, duration: 0.6 }}

          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"

        >

          <span
            className="text-white/20 text-xs tracking-widest uppercase"
            data-atomic-id="a1lk5sct">Scroll</span>

          <motion.div

            animate={{ y: [0, 6, 0] }}

            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}

            className="w-px h-8 bg-gradient-to-b from-blue-500/60 to-transparent"

          />

        </motion.div>

      </section>
      {/* ── PROJECTS ── */}
      <section id="projects" className="py-28 px-6" data-atomic-id="aju6fln">

        <div className="max-w-6xl mx-auto" data-atomic-id="a17m5f64">

          <motion.div

            variants={staggerContainer}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, margin: "-80px" }}

          >

            <motion.div variants={fadeInUp} className="mb-16">

              <p
                className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3"
                data-atomic-id="a1bu8hmq">Selected Work</p>

              <h2
                className="font-display text-4xl sm:text-5xl font-bold tracking-tight"
                data-atomic-id="ag1chny"
                style={{
                  color: "#d946ef",
                  backgroundColor: "#22c55e"
                }}>Projects</h2>

            </motion.div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              data-atomic-id="a5711h0">

              {projects.map((project, i) => (

                <motion.article

                  key={project.id}

                  variants={scaleIn}

                  className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.1)]"

                >

                  {/* Image */}

                  <div
                    className="relative h-52 overflow-hidden"
                    data-atomic-id="azwvrtz"
                    data-atomic-instance={i}>

                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {

                        (e.currentTarget as HTMLImageElement).src = `https://picsum.photos/seed/${project.id}/800/600`;

                      }}
                      data-atomic-id="as5skzo"
                      data-atomic-instance={i} />

                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"
                      data-atomic-id="as77ato"
                      data-atomic-instance={i} />

                    {project.featured && (

                      <span
                        className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-medium"
                        data-atomic-id="a1fdf0p"
                        data-atomic-instance={i}>

                        <Star size={10} fill="currentColor" /> Featured

                      </span>

                    )}

                  </div>

                  {/* Content */}

                  <div className="p-6" data-atomic-id="azzpg2z" data-atomic-instance={i}>

                    <h3
                      className="font-display text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-300"
                      data-atomic-id="at8uk12"
                      data-atomic-instance={i}>

                      {project.title}

                    </h3>

                    <p
                      className="text-white/50 text-sm leading-relaxed mb-4"
                      data-atomic-id="amesdst"
                      data-atomic-instance={i}>{project.description}</p>

                    <div
                      className="flex flex-wrap gap-2 mb-5"
                      data-atomic-id="a15sd9n6"
                      data-atomic-instance={i}>

                      {project.tags.map((tag, __atomicIdx) => (<span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/8 text-white/50 text-xs font-medium"
                        data-atomic-id="aoxkhnz"
                        data-atomic-instance={__atomicIdx}>
                        {tag}
                      </span>))}

                    </div>

                    <a
                      href={project.link}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      data-atomic-id="amesh5e"
                      data-atomic-instance={i}>

                      <Eye size={14} /> View project <ExternalLink size={12} />

                    </a>

                  </div>

                </motion.article>

              ))}

            </div>

          </motion.div>

        </div>

      </section>
      {/* ── SKILLS ── */}
      <section id="skills" className="py-28 px-6 bg-[#111111]" data-atomic-id="a1qviudi">

        <div className="max-w-6xl mx-auto" data-atomic-id="a1y3tlrr">

          <motion.div

            variants={staggerContainer}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, margin: "-80px" }}

          >

            <motion.div variants={fadeInUp} className="mb-16">

              <p
                className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3"
                data-atomic-id="an96n9p">What I know</p>

              <h2
                className="font-display text-4xl sm:text-5xl font-bold tracking-tight"
                data-atomic-id="a1l40bfd">Skills</h2>

            </motion.div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              data-atomic-id="a14ox2lb">

              {skills.map((skill, __atomicIdx) => {

                const Icon = skill.icon;

                return (
                  <motion.div

                    key={skill.name}

                    variants={fadeInUp}

                    className="group p-6 rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-blue-500/30 transition-all duration-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.08)]"

                  >
                    <div
                      className="flex items-start justify-between mb-4"
                      data-atomic-id="aqdt4ne"
                      data-atomic-instance={__atomicIdx}>

                      <div
                        className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400"
                        data-atomic-id="a1as8ij1"
                        data-atomic-instance={__atomicIdx}>

                        <Icon size={18} />

                      </div>

                      <span
                        className="text-xs text-white/30 font-medium"
                        data-atomic-id="a1hjd5ge"
                        data-atomic-instance={__atomicIdx}>{skill.category}</span>

                    </div>
                    <p
                      className="font-semibold text-white/90 mb-3"
                      data-atomic-id="a12pbb15"
                      data-atomic-instance={__atomicIdx}>{skill.name}</p>
                    <div
                      className="h-1 rounded-full bg-white/5 overflow-hidden"
                      data-atomic-id="aqgmswe"
                      data-atomic-instance={__atomicIdx}>

                      <motion.div

                        initial={{ width: 0 }}

                        whileInView={{ width: `${skill.level}%` }}

                        viewport={{ once: true }}

                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}

                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-500"

                      />

                    </div>
                    <p
                      className="text-right text-xs text-white/30 mt-1.5"
                      data-atomic-id="a12pbee5"
                      data-atomic-instance={__atomicIdx}>{skill.level}%</p>
                  </motion.div>
                );

              })}

            </div>

          </motion.div>

        </div>

      </section>
      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-28 px-6" data-atomic-id="a1e3hiyy">

        <div className="max-w-3xl mx-auto" data-atomic-id="acmgohn">

          <motion.div

            variants={staggerContainer}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, margin: "-80px" }}

          >

            <motion.div variants={fadeInUp} className="mb-16">

              <p
                className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3"
                data-atomic-id="af8h841">Career</p>

              <h2
                className="font-display text-4xl sm:text-5xl font-bold tracking-tight"
                data-atomic-id="a5k1l5p">Experience</h2>

            </motion.div>

            <div className="relative" data-atomic-id="a6bh4v7">

              {/* Timeline line */}

              <div
                className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-transparent"
                data-atomic-id="a1c33sqw" />

              <div className="flex flex-col gap-12 pl-8" data-atomic-id="a1c4imve">

                {experiences.map((exp, __atomicIdx) => (<motion.div key={exp.id} variants={slideInLeft} className="relative">
                  {/* Dot */}
                  <div
                    className="absolute -left-[2.15rem] top-1.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-[#0f0f0f] shadow-[0_0_10px_rgba(168,85,247,0.6)]"
                    data-atomic-id="amhwerh"
                    data-atomic-instance={__atomicIdx} />
                  <p
                    className="text-blue-400/70 text-xs font-medium tracking-widest uppercase mb-1"
                    data-atomic-id="alha28c"
                    data-atomic-instance={__atomicIdx}>{exp.period}</p>
                  <h3
                    className="font-display text-xl font-bold mb-0.5"
                    data-atomic-id="a1xk935l"
                    data-atomic-instance={__atomicIdx}>{exp.role}</h3>
                  <p
                    className="text-white/40 text-sm mb-3"
                    data-atomic-id="alha5lc"
                    data-atomic-instance={__atomicIdx}>{exp.company}</p>
                  <p
                    className="text-white/60 text-sm leading-relaxed"
                    data-atomic-id="a1xk4qu1"
                    data-atomic-instance={__atomicIdx}>{exp.description}</p>
                </motion.div>))}

              </div>

            </div>

          </motion.div>

        </div>

      </section>
      {/* ── ABOUT ── */}
      <section id="about" className="py-28 px-6 bg-[#111111]" data-atomic-id="a11bg7ke">

        <div className="max-w-6xl mx-auto" data-atomic-id="aq67t6n">

          <motion.div

            variants={staggerContainer}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, margin: "-80px" }}

            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"

          >

            <motion.div variants={slideInLeft}>

              <p
                className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3"
                data-atomic-id="a77rsyd">Who I am</p>

              <h2
                className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6"
                data-atomic-id="ap16wv5">About Me</h2>

              <div
                className="space-y-4 text-white/60 leading-relaxed"
                data-atomic-id="a18sib2k">

                <p data-atomic-id="a129f4v0">

                  I&apos;m {APP_NAME}, a creative developer with 6+ years of experience building

                  products that sit at the intersection of engineering and design. I care deeply

                  about performance, accessibility, and the tiny details that make an interface

                  feel alive.

                </p>

                <p data-atomic-id="a129f6ji">

                  When I&apos;m not shipping code, I&apos;m contributing to open source, writing about

                  frontend architecture, or exploring generative art with WebGL.

                </p>

              </div>

              <div className="mt-8 flex flex-wrap gap-3" data-atomic-id="a18tx572">

                {["Open Source", "Design Systems", "WebGL", "Performance", "Accessibility"].map((tag, __atomicIdx) => (<span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium"
                  data-atomic-id="aa0ou7f"
                  data-atomic-instance={__atomicIdx}>
                  {tag}
                </span>))}

              </div>

            </motion.div>

            <motion.div variants={slideInRight} className="grid grid-cols-2 gap-4">

              {[

                { label: "Years of experience", value: "6+" },

                { label: "Projects shipped", value: "40+" },

                { label: "Open source stars", value: "2k+" },

                { label: "Happy clients", value: "30+" },

              ].map((stat, __atomicIdx) => (<div
                key={stat.label}
                className="p-6 rounded-2xl bg-[#1a1a1a] border border-white/5 text-center"
                data-atomic-id="abx30mt"
                data-atomic-instance={__atomicIdx}
                style={__atomicIdx === 0 ? {
                  backgroundColor: "#f97316"
                } : undefined}>
                <p
                  className="font-display text-3xl font-bold text-blue-400 mb-1"
                  data-atomic-id="a4ay5t1"
                  data-atomic-instance={__atomicIdx}>{stat.value}</p>
                <p
                  className="text-white/40 text-xs leading-snug"
                  data-atomic-id="a4ay7hj"
                  data-atomic-instance={__atomicIdx}>{stat.label}</p>
              </div>))}

            </motion.div>

          </motion.div>

        </div>

      </section>
      {/* ── CONTACT ── */}
      <section id="contact" className="py-28 px-6" data-atomic-id="a1llvejt">

        <div className="max-w-2xl mx-auto" data-atomic-id="a1alfvwa">

          <motion.div

            variants={staggerContainer}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, margin: "-80px" }}

          >

            <motion.div variants={fadeInUp} className="text-center mb-12">

              <p
                className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3"
                data-atomic-id="a15vea40">Let&apos;s talk</p>

              <h2
                className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4"
                data-atomic-id="aw6zrfg">Get in Touch</h2>

              <p className="text-white/50 leading-relaxed" data-atomic-id="a15vedh0">

                Have a project in mind or just want to say hi? My inbox is always open.

              </p>

            </motion.div>

            <motion.form

              ref={formRef}

              variants={fadeInUp}

              onSubmit={handleSubmit}

              className="space-y-5"

            >

              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                data-atomic-id="a3ojzvp">

                <div data-atomic-id="atneu88">

                  <label
                    className="block text-xs font-medium text-white/40 mb-2 uppercase tracking-widest"
                    data-atomic-id="a1yjcoo8">Name</label>

                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/8 text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all duration-300 text-sm"
                    data-atomic-id="a16680ai" />

                </div>

                <div data-atomic-id="atotocq">

                  <label
                    className="block text-xs font-medium text-white/40 mb-2 uppercase tracking-widest"
                    data-atomic-id="a1olhhd6">Email</label>

                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/8 text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all duration-300 text-sm"
                    data-atomic-id="aw8cszg" />

                </div>

              </div>

              <div data-atomic-id="a3pyu07">

                <label
                  className="block text-xs font-medium text-white/40 mb-2 uppercase tracking-widest"
                  data-atomic-id="aved353">Subject</label>

                <input
                  type="text"
                  placeholder="Project inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/8 text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all duration-300 text-sm"
                  data-atomic-id="a318erd" />

              </div>

              <div data-atomic-id="a3rdo4p">

                <label
                  className="block text-xs font-medium text-white/40 mb-2 uppercase tracking-widest"
                  data-atomic-id="alghvu1">Message</label>

                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/8 text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all duration-300 text-sm resize-none"
                  data-atomic-id="akqupih" />

              </div>

              <button
                type="submit"
                disabled={formState === "sending" || formState === "sent"}
                className="w-full py-4 rounded-xl bg-blue-500 hover:bg-blue-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_24px_rgba(168,85,247,0.3)] hover:shadow-[0_0_36px_rgba(168,85,247,0.5)] flex items-center justify-center gap-2"
                data-atomic-id="au0mnd0">

                {formState === "sending" && (

                  <motion.span

                    animate={{ rotate: 360 }}

                    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}

                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block"

                  />

                )}

                {formState === "idle" && "Send Message"}

                {formState === "sending" && "Sending..."}

                {formState === "sent" && (

                  <><CheckCircle size={16} /> Message sent!</>

                )}

                {formState === "error" && "Try again"}

              </button>

            </motion.form>

          </motion.div>

        </div>

      </section>
    </main>
  );

}

