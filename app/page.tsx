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

    <main className="min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden">

      {/* ── HERO ── */}

      <section

        id="home"

        className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden"

      >

        {/* Background glows */}

        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />

          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-800/8 rounded-full blur-[100px]" />

        </div>

        {/* Grid overlay */}

        <div

          className="absolute inset-0 opacity-[0.03]"

          style={{

            backgroundImage:

              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",

            backgroundSize: "60px 60px",

          }}

        />

        <div className="relative z-10 max-w-4xl mx-auto">

          <div className="max-w-3xl">

            {/* Badge */}

            <motion.div

              variants={fadeIn}

              initial="hidden"

              animate="visible"

              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-8"

            >

              <Sparkles size={14} />

              Available for new projects

            </motion.div>

            {/* Headline */}

            <motion.h1

              variants={fadeInUp}

              initial="hidden"

              animate="visible"

              className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6"

            >

              Hi, I&apos;m{" "}

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">

                {APP_NAME}

              </span>

              <br />

              <span className="text-white/80">I build things</span>

              <br />

              <span className="text-white/40">for the web.</span>

            </motion.h1>

            {/* Sub */}

            <motion.p

              variants={fadeInUp}

              initial="hidden"

              animate="visible"

              className="text-lg text-white/50 leading-relaxed mb-10 max-w-xl"

            >

              {APP_TAGLINE} specialising in performant React applications,

              design systems, and delightful micro-interactions.

            </motion.p>

            {/* CTAs */}

            <motion.div

              variants={fadeInUp}

              initial="hidden"

              animate="visible"

              className="flex flex-wrap gap-4"

            >

              <a

                href="#projects"

                style={{ color: '#ffffff' }}

                onClick={(e) => {

                  e.preventDefault();

                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });

                }}

                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-purple-500 hover:bg-purple-400 font-semibold text-sm transition-all duration-300 shadow-[0_0_24px_rgba(168,85,247,0.35)] hover:shadow-[0_0_36px_rgba(168,85,247,0.55)] hover:-translate-y-0.5"

              >

                View my work <ArrowRight size={16} />

              </a>

              <a

                href="#contact"

                onClick={(e) => {

                  e.preventDefault();

                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

                }}

                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white/30 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"

              >

                Get in touch

              </a>

            </motion.div>

          </div>

        </div>

        {/* Scroll indicator */}

        <motion.div

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{ delay: 1.2 }}

          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"

        >

          <span className="text-xs text-white/20 tracking-widest uppercase">Scroll</span>

          <motion.div

            animate={{ y: [0, 8, 0] }}

            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}

            className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"

          />

        </motion.div>

      </section>

      {/* ── PROJECTS ── */}

      <section id="projects" className="py-28 px-6">

        <div className="max-w-6xl mx-auto">

          <motion.div

            variants={staggerContainer}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, margin: "-80px" }}

          >

            <motion.div variants={fadeInUp} className="mb-16">

              <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">

                Selected Work

              </p>

              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">

                Projects

              </h2>

            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {projects.map((project) => (

                <motion.article

                  key={project.id}

                  variants={scaleIn}

                  className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"

                >

                  {/* Image */}

                  <div className="relative h-52 overflow-hidden">

                    <img

                      src={project.image}

                      alt={project.title}

                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"

                      onError={(e) => {

                        (e.currentTarget as HTMLImageElement).src =

                          `https://picsum.photos/seed/${project.id}/800/600`;

                      }}

                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />

                    {project.featured && (

                      <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-medium">

                        <Star size={10} /> Featured

                      </span>

                    )}

                  </div>

                  {/* Content */}

                  <div className="p-6">

                    <h3 className="font-display text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors duration-300">

                      {project.title}

                    </h3>

                    <p className="text-white/50 text-sm leading-relaxed mb-4">

                      {project.description}

                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">

                      {project.tags.map((tag) => (

                        <span

                          key={tag}

                          className="px-2.5 py-1 rounded-md bg-white/5 text-white/50 text-xs font-medium"

                        >

                          {tag}

                        </span>

                      ))}

                    </div>

                    <a

                      href={project.link}

                      className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors duration-200"

                    >

                      View project <ExternalLink size={13} />

                    </a>

                  </div>

                </motion.article>

              ))}

            </div>

          </motion.div>

        </div>

      </section>

      {/* ── SKILLS ── */}

      <section id="skills" className="py-28 px-6 bg-[#0a0a0a]">

        <div className="max-w-6xl mx-auto">

          <motion.div

            variants={staggerContainer}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, margin: "-80px" }}

          >

            <motion.div variants={fadeInUp} className="mb-16">

              <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">

                Expertise

              </p>

              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">

                Skills

              </h2>

            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

              {skills.map((skill) => {

                const Icon = skill.icon;

                return (

                  <motion.div

                    key={skill.name}

                    variants={fadeInUp}

                    className="p-6 rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-purple-500/20 transition-all duration-300 group"

                  >

                    <div className="flex items-start justify-between mb-4">

                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors duration-300">

                        <Icon size={18} />

                      </div>

                      <span className="text-xs text-white/30 font-medium">{skill.category}</span>

                    </div>

                    <h3 className="font-semibold text-white mb-3">{skill.name}</h3>

                    <div className="h-1 rounded-full bg-white/5 overflow-hidden">

                      <motion.div

                        initial={{ width: 0 }}

                        whileInView={{ width: `${skill.level}%` }}

                        viewport={{ once: true }}

                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}

                        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-purple-400"

                      />

                    </div>

                    <p className="text-right text-xs text-white/30 mt-1.5">{skill.level}%</p>

                  </motion.div>

                );

              })}

            </div>

          </motion.div>

        </div>

      </section>

      {/* ── EXPERIENCE ── */}

      <section id="experience" className="py-28 px-6">

        <div className="max-w-3xl mx-auto">

          <motion.div

            variants={staggerContainer}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, margin: "-80px" }}

          >

            <motion.div variants={fadeInUp} className="mb-16">

              <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">

                Career

              </p>

              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">

                Experience

              </h2>

            </motion.div>

            <div className="relative">

              {/* Timeline line */}

              <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent" />

              <div className="flex flex-col gap-10">

                {experiences.map((exp, i) => (

                  <motion.div

                    key={exp.id}

                    variants={slideInLeft}

                    className="pl-8 relative"

                  >

                    {/* Dot */}

                    <div className="absolute left-[-4.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-purple-500 ring-4 ring-[#0f0f0f]" />

                    <div className="flex flex-wrap items-center gap-3 mb-1">

                      <h3 className="font-display text-lg font-bold">{exp.role}</h3>

                      <span className="text-purple-400 font-semibold text-sm">{exp.company}</span>

                    </div>

                    <p className="text-xs text-white/30 mb-3 font-medium tracking-wide">{exp.period}</p>

                    <p className="text-white/55 text-sm leading-relaxed">{exp.description}</p>

                  </motion.div>

                ))}

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ── ABOUT ── */}

      <section id="about" className="py-28 px-6 bg-[#0a0a0a]">

        <div className="max-w-6xl mx-auto">

          <motion.div

            variants={staggerContainer}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, margin: "-80px" }}

            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"

          >

            <motion.div variants={slideInLeft}>

              <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">

                About

              </p>

              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">

                A bit about me

              </h2>

              <div className="space-y-4 text-white/55 leading-relaxed">

                <p>

                  I&apos;m {APP_NAME}, a {APP_TAGLINE} based in London. I&apos;ve spent

                  the last 6+ years building products that sit at the intersection

                  of engineering rigour and thoughtful design.

                </p>

                <p>

                  My sweet spot is the frontend — React, TypeScript, animation —

                  but I&apos;m equally comfortable diving into backend systems,

                  databases, and infrastructure when the project demands it.

                </p>

                <p>

                  Outside of code I&apos;m into generative art, mechanical keyboards,

                  and long-distance cycling.

                </p>

              </div>

              <div className="mt-8 flex flex-wrap gap-3">

                {["Open to work", "Remote-friendly", "Based in London"].map((badge) => (

                  <span

                    key={badge}

                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium"

                  >

                    <CheckCircle size={11} className="text-purple-400" />

                    {badge}

                  </span>

                ))}

              </div>

            </motion.div>

            <motion.div variants={slideInRight} className="relative">

              <div className="relative w-full aspect-square max-w-sm mx-auto">

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 to-purple-800/10 border border-purple-500/20" />

                <div className="absolute inset-4 rounded-2xl bg-[#1a1a1a] flex items-center justify-center">

                  <div className="text-center">

                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 mx-auto mb-4 flex items-center justify-center text-3xl font-bold font-display">

                      {APP_NAME.charAt(0)}

                    </div>

                    <p className="font-display font-bold text-lg">{APP_NAME}</p>

                    <p className="text-white/40 text-sm">{APP_TAGLINE}</p>

                  </div>

                </div>

                {/* Floating badges */}

                <div className="absolute -top-4 -right-4 px-3 py-2 rounded-xl bg-[#1a1a1a] border border-white/10 text-xs font-medium text-white/70 shadow-xl">

                  6+ years exp.

                </div>

                <div className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl bg-[#1a1a1a] border border-white/10 text-xs font-medium text-white/70 shadow-xl">

                  20+ projects

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* ── CONTACT ── */}

      <section id="contact" className="py-28 px-6">

        <div className="max-w-2xl mx-auto">

          <motion.div

            variants={staggerContainer}

            initial="hidden"

            whileInView="visible"

            viewport={{ once: true, margin: "-80px" }}

          >

            <motion.div variants={fadeInUp} className="text-center mb-14">

              <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">

                Contact

              </p>

              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">

                Let&apos;s work together

              </h2>

              <p className="text-white/50">

                Have a project in mind? I&apos;d love to hear about it.

              </p>

            </motion.div>

            <motion.form

              ref={formRef}

              variants={fadeInUp}

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

                    className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all duration-200"

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

                    className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all duration-200"

                  />

                </div>

              </div>

              <div>

                <label className="block text-xs font-medium text-white/40 mb-2 uppercase tracking-wider">

                  Subject

                </label>

                <input

                  type="text"

                  placeholder="What's this about?"

                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all duration-200"

                />

              </div>

              <div>

                <label className="block text-xs font-medium text-white/40 mb-2 uppercase tracking-wider">

                  Message

                </label>

                <textarea

                  required

                  rows={5}

                  placeholder="Tell me about your project…"

                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all duration-200 resize-none"

                />

              </div>

              <button

                type="submit"

                disabled={formState === "sending" || formState === "sent"}

                className="w-full py-4 rounded-xl bg-purple-500 hover:bg-purple-400 disabled:opacity-60 disabled:cursor-not-allowed font-semibold text-sm transition-all duration-300 shadow-[0_0_24px_rgba(168,85,247,0.3)] hover:shadow-[0_0_36px_rgba(168,85,247,0.5)]"

              >

                {formState === "sending"

                  ? "Sending…"

                  : formState === "sent"

                  ? "Message sent ✓"

                  : "Send message"}

              </button>

            </motion.form>

            {/* Direct email */}

            <motion.p variants={fadeInUp} className="text-center text-white/30 text-sm mt-8">

              Or email me directly at{" "}

              <a

                href={`mailto:${APP_EMAIL}`}

                className="text-purple-400 hover:text-purple-300 transition-colors duration-200"

              >

                {APP_EMAIL}

              </a>

            </motion.p>

          </motion.div>

        </div>

      </section>

    </main>

  );

}
