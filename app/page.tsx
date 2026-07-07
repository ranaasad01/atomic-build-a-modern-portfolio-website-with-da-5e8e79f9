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

      "Prototyped and shipped the canvas interaction engine. Contributed to the open-source motion library and mentored two junior engineers.",

  },

];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Home() {

  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const formRef = useRef<HTMLFormElement>(null);

  const shouldReduceMotion = useReducedMotion();

  const motionProps = (variants: Variants) =>

    shouldReduceMotion ? {} : { variants };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    setFormState("sending");

    await new Promise((r) => setTimeout(r, 1400));

    setFormState("sent");

    formRef.current?.reset();

  };

  return (

    <main className="min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden">

      {/* ── HERO ── */}

      <section

        id="home"

        className="relative min-h-screen flex items-center justify-center overflow-hidden"

      >

        {/* Background layers */}

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(168,85,247,0.18),transparent)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,#0f0f0f)]" />

        <div

          className="absolute inset-0 opacity-[0.03]"

          style={{

            backgroundImage:

              "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",

            backgroundSize: "72px 72px",

          }}

        />

        {/* Floating orbs */}

        <motion.div

          animate={{ y: [0, -24, 0], opacity: [0.15, 0.3, 0.15] }}

          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}

          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-purple-600/20 blur-[100px] pointer-events-none"

        />

        <motion.div

          animate={{ y: [0, 20, 0], opacity: [0.1, 0.2, 0.1] }}

          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}

          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-violet-500/15 blur-[120px] pointer-events-none"

        />

        {/* Content */}

        <motion.div

          variants={staggerContainer}

          initial="hidden"

          animate="visible"

          className="relative z-10 max-w-4xl mx-auto px-6 text-center"

        >

          <motion.div variants={fadeInUp} className="mb-6">

            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold tracking-widest uppercase">

              <Sparkles size={12} />

              Available for work

            </span>

          </motion.div>

          <motion.h1

            variants={fadeInUp}

            className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6"

          >

            <span className="block text-white">{APP_NAME}</span>

            <span className="block bg-gradient-to-r from-purple-400 via-violet-400 to-purple-600 bg-clip-text text-transparent">

              {APP_TAGLINE}

            </span>

          </motion.h1>

          <motion.p

            variants={fadeInUp}

            className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"

          >

            I design and build digital products that live at the intersection of

            engineering rigour and visual craft — from design systems to

            full-stack applications.

          </motion.p>

          <motion.div

            variants={fadeInUp}

            className="flex flex-wrap items-center justify-center gap-4"

          >

            <a

              href="#projects"

              style={{ backgroundColor: '#f97316' }}

              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white shadow-[0_0_24px_rgba(168,85,247,0.35)] hover:shadow-[0_0_36px_rgba(168,85,247,0.55)] transition-all duration-300 hover:-translate-y-0.5"

            >

              View my work

              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />

            </a>

            <a

              href={`mailto:${APP_EMAIL}`}

              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white/80 border border-white/10 hover:border-white/30 hover:text-white bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"

            >

              <Mail size={16} />

              Get in touch

            </a>

          </motion.div>

          {/* Scroll indicator */}

          <motion.div

            variants={fadeIn}

            className="mt-20 flex flex-col items-center gap-2 text-white/20"

          >

            <span className="text-xs tracking-widest uppercase">Scroll</span>

            <motion.div

              animate={{ y: [0, 8, 0] }}

              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}

              className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent"

            />

          </motion.div>

        </motion.div>

      </section>

      {/* ── PROJECTS ── */}

      <section id="projects" className="py-32 px-6">

        <div className="max-w-6xl mx-auto">

          <motion.div

            variants={staggerContainer}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, margin: "-80px" }}

            className="mb-16"

          >

            <motion.p

              variants={fadeInUp}

              className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3"

            >

              Selected work

            </motion.p>

            <motion.h2

              variants={fadeInUp}

              className="font-display text-4xl sm:text-5xl font-bold text-white"

            >

              Projects

            </motion.h2>

          </motion.div>

          <motion.div

            variants={staggerContainer}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, margin: "-60px" }}

            className="grid grid-cols-1 md:grid-cols-2 gap-6"

          >

            {projects.map((project) => (

              <motion.article

                key={project.id}

                variants={scaleIn}

                className="group relative bg-[#1a1a1a] border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"

              >

                {project.featured && (

                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-semibold">

                    <Star size={10} fill="currentColor" />

                    Featured

                  </div>

                )}

                <div className="aspect-video overflow-hidden">

                  <img

                    src={project.image}

                    alt={project.title}

                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"

                    onError={(e) => {

                      (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${project.id}/800/450`;

                    }}

                  />

                </div>

                <div className="p-6">

                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">

                    {project.title}

                  </h3>

                  <p className="text-white/50 text-sm leading-relaxed mb-4">

                    {project.description}

                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">

                    {project.tags.map((tag) => (

                      <span

                        key={tag}

                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/8 text-white/60 text-xs font-medium"

                      >

                        {tag}

                      </span>

                    ))}

                  </div>

                  <a

                    href={project.link}

                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors duration-200"

                  >

                    <Eye size={14} />

                    View project

                    <ExternalLink size={12} />

                  </a>

                </div>

              </motion.article>

            ))}

          </motion.div>

        </div>

      </section>

      {/* ── SKILLS ── */}

      <section id="skills" className="py-32 px-6 bg-[#0a0a0a]">

        <div className="max-w-6xl mx-auto">

          <motion.div

            variants={staggerContainer}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, margin: "-80px" }}

            className="mb-16"

          >

            <motion.p

              variants={fadeInUp}

              className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3"

            >

              What I work with

            </motion.p>

            <motion.h2

              variants={fadeInUp}

              className="font-display text-4xl sm:text-5xl font-bold text-white"

            >

              Skills

            </motion.h2>

          </motion.div>

          <motion.div

            variants={staggerContainer}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, margin: "-60px" }}

            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"

          >

            {skills.map((skill) => {

              const Icon = skill.icon;

              return (

                <motion.div

                  key={skill.name}

                  variants={fadeInUp}

                  className="group p-6 rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-0.5"

                >

                  <div className="flex items-start justify-between mb-4">

                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors duration-300">

                      <Icon size={18} />

                    </div>

                    <span className="text-xs font-medium text-white/30 bg-white/5 px-2.5 py-1 rounded-full">

                      {skill.category}

                    </span>

                  </div>

                  <h3 className="font-semibold text-white mb-3">{skill.name}</h3>

                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">

                    <motion.div

                      initial={{ width: 0 }}

                      whileInView={{ width: `${skill.level}%` }}

                      viewport={{ once: true }}

                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}

                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-violet-400"

                    />

                  </div>

                  <p className="text-right text-xs text-white/30 mt-1.5">{skill.level}%</p>

                </motion.div>

              );

            })}

          </motion.div>

        </div>

      </section>

      {/* ── EXPERIENCE ── */}

      <section id="experience" className="py-32 px-6">

        <div className="max-w-3xl mx-auto">

          <motion.div

            variants={staggerContainer}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, margin: "-80px" }}

            className="mb-16"

          >

            <motion.p

              variants={fadeInUp}

              className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3"

            >

              Career

            </motion.p>

            <motion.h2

              variants={fadeInUp}

              className="font-display text-4xl sm:text-5xl font-bold text-white"

            >

              Experience

            </motion.h2>

          </motion.div>

          <motion.div

            variants={staggerContainer}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, margin: "-60px" }}

            className="relative"

          >

            {/* Timeline line */}

            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent" />

            <div className="flex flex-col gap-10 pl-8">

              {experiences.map((exp) => (

                <motion.div key={exp.id} variants={slideInLeft} className="relative">

                  {/* Dot */}

                  <div className="absolute -left-[2.125rem] top-1.5 w-3 h-3 rounded-full bg-purple-500 border-2 border-[#0f0f0f] shadow-[0_0_12px_rgba(168,85,247,0.6)]" />

                  <div className="p-6 rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-purple-500/20 transition-colors duration-300">

                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">

                      <div>

                        <h3 className="font-display font-bold text-white text-lg">{exp.role}</h3>

                        <p className="text-purple-400 text-sm font-medium">{exp.company}</p>

                      </div>

                      <span className="text-xs text-white/30 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">

                        {exp.period}

                      </span>

                    </div>

                    <p className="text-white/50 text-sm leading-relaxed">{exp.description}</p>

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </section>

      {/* ── ABOUT ── */}

      <section id="about" className="py-32 px-6 bg-[#0a0a0a]">

        <div className="max-w-6xl mx-auto">

          <motion.div

            variants={staggerContainer}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, margin: "-80px" }}

            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"

          >

            <motion.div variants={slideInLeft}>

              <p className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3">

                About me

              </p>

              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">

                Crafting with code

                <br />

                <span className="text-white/30">&amp; intention</span>

              </h2>

              <div className="space-y-4 text-white/50 leading-relaxed">

                <p>

                  I&apos;m {APP_NAME}, a creative developer with 6+ years building

                  products that balance technical excellence with thoughtful

                  design. I care deeply about performance, accessibility, and the

                  tiny details that make an interface feel alive.

                </p>

                <p>

                  When I&apos;m not shipping code, I&apos;m contributing to open source,

                  writing about frontend architecture, or exploring generative

                  art with WebGL.

                </p>

              </div>

              <div className="mt-8 flex flex-wrap gap-3">

                {["Open Source", "Design Systems", "WebGL", "Performance", "Accessibility"].map((tag) => (

                  <span

                    key={tag}

                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium"

                  >

                    <CheckCircle size={11} />

                    {tag}

                  </span>

                ))}

              </div>

            </motion.div>

            <motion.div variants={slideInRight} className="relative">

              <div className="relative aspect-square max-w-sm mx-auto">

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 to-violet-600/10 border border-purple-500/20" />

                <div className="absolute inset-4 rounded-2xl bg-[#1a1a1a] border border-white/5 flex items-center justify-center">

                  <div className="text-center">

                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 mx-auto mb-4 flex items-center justify-center text-3xl font-bold font-display">

                      {APP_NAME.charAt(0)}

                    </div>

                    <p className="font-display font-bold text-white text-xl">{APP_NAME}</p>

                    <p className="text-white/40 text-sm">{APP_TAGLINE}</p>

                  </div>

                </div>

                {/* Decorative corners */}

                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-purple-500/50 rounded-tr-lg" />

                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-purple-500/50 rounded-bl-lg" />

              </div>

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* ── CONTACT ── */}

      <section id="contact" className="py-32 px-6">

        <div className="max-w-2xl mx-auto">

          <motion.div

            variants={staggerContainer}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, margin: "-80px" }}

          >

            <motion.p

              variants={fadeInUp}

              className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3"

            >

              Let&apos;s talk

            </motion.p>

            <motion.h2

              variants={fadeInUp}

              className="font-display text-4xl sm:text-5xl font-bold text-white mb-4"

            >

              Get in touch

            </motion.h2>

            <motion.p variants={fadeInUp} className="text-white/40 mb-10">

              Have a project in mind or just want to say hello? I&apos;d love to hear

              from you.

            </motion.p>

            <motion.form

              variants={fadeInUp}

              ref={formRef}

              onSubmit={handleSubmit}

              className="space-y-5"

            >

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div>

                  <label className="block text-xs font-medium text-white/40 mb-2 uppercase tracking-wider">

                    Name

                  </label>

                  <input

                    type="text"

                    required

                    placeholder="Your name"

                    className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/8 text-white placeholder-white/20 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all duration-200 text-sm"

                  />

                </div>

                <div>

                  <label className="block text-xs font-medium text-white/40 mb-2 uppercase tracking-wider">

                    Email

                  </label>

                  <input

                    type="email"

                    required

                    placeholder="your@email.com"

                    className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/8 text-white placeholder-white/20 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all duration-200 text-sm"

                  />

                </div>

              </div>

              <div>

                <label className="block text-xs font-medium text-white/40 mb-2 uppercase tracking-wider">

                  Message

                </label>

                <textarea

                  required

                  rows={5}

                  placeholder="Tell me about your project..."

                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/8 text-white placeholder-white/20 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all duration-200 text-sm resize-none"

                />

              </div>

              <button

                type="submit"

                disabled={formState === "sending" || formState === "sent"}

                className="w-full py-4 rounded-xl font-semibold text-white bg-purple-500 hover:bg-purple-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 shadow-[0_0_24px_rgba(168,85,247,0.3)] hover:shadow-[0_0_36px_rgba(168,85,247,0.5)] flex items-center justify-center gap-2"

              >

                {formState === "sending" && (

                  <motion.div

                    animate={{ rotate: 360 }}

                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}

                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"

                  />

                )}

                {formState === "idle" && "Send message"}

                {formState === "sending" && "Sending..."}

                {formState === "sent" && (

                  <>

                    <CheckCircle size={16} />

                    Message sent!

                  </>

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
