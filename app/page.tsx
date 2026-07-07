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

  const shouldReduceMotion = useReducedMotion();

  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    setFormStatus("sending");

    await new Promise((r) => setTimeout(r, 1200));

    setFormStatus("sent");

  };

  return (

    <main className="min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden">

      {/* ── HERO ── */}

      <section

        id="home"

        className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 overflow-hidden"

      >

        {/* Background glows */}

        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />

          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-800/8 rounded-full blur-[100px]" />

        </div>

        {/* Grid overlay */}

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none" />

        {/* Content */}

        <motion.div

          variants={staggerContainer}

          initial="hidden"

          animate="visible"

          className="relative z-10 max-w-4xl mx-auto"

        >

          {/* Availability badge */}

          <motion.div variants={fadeInUp} className="flex justify-center mb-8">

            <div style={{ backgroundColor: '#ef4444' }} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-sm text-white/70">

              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

              Available for new projects

            </div>

          </motion.div>

          {/* Headline */}

          <motion.h1

            variants={fadeInUp}

            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"

          >

            Hi, I&apos;m{" "}

            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">

              {APP_NAME}

            </span>

          </motion.h1>

          {/* Sub-headline */}

          <motion.p

            variants={fadeInUp}

            className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10"

          >

            I build{" "}

            <span className="text-white/80 font-medium">fast, accessible, beautiful</span>{" "}

            web products — from pixel-perfect UIs to scalable back-end systems.

          </motion.p>

          {/* CTAs */}

          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">

            <Link

              href="#projects"

              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-purple-500 text-white font-semibold text-sm hover:bg-purple-400 transition-all duration-300 shadow-[0_0_24px_rgba(168,85,247,0.4)] hover:shadow-[0_0_36px_rgba(168,85,247,0.6)]"

            >

              View my work <ArrowRight size={16} />

            </Link>

            <Link

              href="#contact"

              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white/80 font-semibold text-sm hover:border-white/30 hover:text-white transition-all duration-300"

            >

              Get in touch

            </Link>

          </motion.div>

          {/* Social row */}

          <motion.div variants={fadeInUp} className="flex justify-center items-center gap-5 mt-12">

            {[

              { icon: Github, label: "GitHub", href: "https://github.com" },

              { icon: Twitter, label: "Twitter", href: "https://twitter.com" },

              { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },

              { icon: Mail, label: "Email", href: `mailto:${APP_EMAIL}` },

            ].map(({ icon: Icon, label, href }) => (

              <a

                key={label}

                href={href}

                target={href.startsWith("http") ? "_blank" : undefined}

                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}

                aria-label={label}

                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-purple-400 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300"

              >

                <Icon size={16} />

              </a>

            ))}

          </motion.div>

        </motion.div>

        {/* Scroll indicator */}

        <motion.div

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{ delay: 1.5, duration: 0.8 }}

          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"

        >

          <span className="text-xs text-white/20 uppercase tracking-widest">Scroll</span>

          <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />

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

            <motion.div variants={fadeInUp} className="mb-16 text-center">

              <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">Selected Work</p>

              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">Projects</h2>

            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {projects.map((project) => (

                <motion.div

                  key={project.id}

                  variants={scaleIn}

                  className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-500"

                >

                  {/* Image */}

                  <div className="relative h-52 overflow-hidden">

                    <img

                      src={project.image}

                      alt={project.title}

                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"

                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />

                    {project.featured && (

                      <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-medium">

                        <Star size={10} />

                        Featured

                      </div>

                    )}

                  </div>

                  {/* Body */}

                  <div className="p-6">

                    <h3 className="font-display text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors duration-300">

                      {project.title}

                    </h3>

                    <p className="text-white/50 text-sm leading-relaxed mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-5">

                      {project.tags.map((tag) => (

                        <span

                          key={tag}

                          className="px-2.5 py-1 rounded-md bg-white/5 border border-white/8 text-white/50 text-xs font-medium"

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

                </motion.div>

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

            <motion.div variants={fadeInUp} className="mb-16 text-center">

              <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">What I work with</p>

              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">Skills</h2>

            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

              {skills.map((skill) => {

                const Icon = skill.icon;

                return (

                  <motion.div

                    key={skill.name}

                    variants={fadeInUp}

                    className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5 hover:border-purple-500/20 transition-all duration-300 group"

                  >

                    <div className="flex items-start justify-between mb-4">

                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors duration-300">

                        <Icon size={18} />

                      </div>

                      <span className="text-xs text-white/30 font-medium">{skill.category}</span>

                    </div>

                    <h3 className="font-semibold text-white mb-3">{skill.name}</h3>

                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">

                      <motion.div

                        initial={{ width: 0 }}

                        whileInView={{ width: `${skill.level}%` }}

                        viewport={{ once: true }}

                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}

                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"

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

            <motion.div variants={fadeInUp} className="mb-16 text-center">

              <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">Career</p>

              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">Experience</h2>

            </motion.div>

            <div className="relative">

              {/* Timeline line */}

              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent" />

              <div className="flex flex-col gap-10 pl-8">

                {experiences.map((exp) => (

                  <motion.div key={exp.id} variants={slideInLeft} className="relative">

                    {/* Dot */}

                    <div className="absolute -left-[2.15rem] top-1.5 w-3 h-3 rounded-full bg-purple-500 border-2 border-[#0f0f0f] shadow-[0_0_12px_rgba(168,85,247,0.6)]" />

                    <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5">

                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">

                        <div>

                          <h3 className="font-display font-bold text-lg text-white">{exp.role}</h3>

                          <p className="text-purple-400 text-sm font-medium">{exp.company}</p>

                        </div>

                        <span className="text-xs text-white/30 font-mono bg-white/5 px-3 py-1 rounded-full">{exp.period}</span>

                      </div>

                      <p className="text-white/50 text-sm leading-relaxed">{exp.description}</p>

                    </div>

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

              <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">About me</p>

              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">

                Crafting digital{" "}

                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">experiences</span>

              </h2>

              <div className="space-y-4 text-white/50 leading-relaxed">

                <p>

                  I&apos;m {APP_NAME}, a full-stack developer with 6+ years of experience building products that sit at the intersection of engineering and design.

                </p>

                <p>

                  My sweet spot is the front-end — React, Next.js, TypeScript — but I&apos;m equally comfortable architecting APIs, designing databases, and shipping to production.

                </p>

                <p>

                  When I&apos;m not coding, I&apos;m probably hiking, reading about type theory, or tinkering with generative art.

                </p>

              </div>

              <div className="mt-8 flex flex-wrap gap-3">

                {["Open to work", "Remote-friendly", "Based in NYC"].map((tag) => (

                  <span

                    key={tag}

                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium"

                  >

                    <CheckCircle size={11} className="text-purple-400" />

                    {tag}

                  </span>

                ))}

              </div>

            </motion.div>

            <motion.div variants={slideInRight} className="relative">

              <div className="relative w-full aspect-square max-w-sm mx-auto">

                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-3xl" />

                <div className="absolute inset-4 bg-[#1a1a1a] rounded-2xl border border-white/5 flex items-center justify-center">

                  <div className="text-center">

                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mx-auto mb-4 flex items-center justify-center text-3xl font-bold font-display">

                      {APP_NAME.charAt(0)}

                    </div>

                    <p className="font-display font-bold text-xl">{APP_NAME}</p>

                    <p className="text-white/40 text-sm">{APP_TAGLINE}</p>

                  </div>

                </div>

                {/* Floating badges */}

                <div className="absolute -top-4 -right-4 bg-[#1a1a1a] border border-white/10 rounded-xl px-3 py-2 text-xs font-medium">

                  <span className="text-purple-400">6+</span> years exp.

                </div>

                <div className="absolute -bottom-4 -left-4 bg-[#1a1a1a] border border-white/10 rounded-xl px-3 py-2 text-xs font-medium">

                  <span className="text-purple-400">40+</span> projects

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

            <motion.div variants={fadeInUp} className="text-center mb-12">

              <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">Let&apos;s talk</p>

              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">Get in touch</h2>

              <p className="text-white/40">

                Have a project in mind? I&apos;d love to hear about it. Send me a message and I&apos;ll get back to you within 24 hours.

              </p>

            </motion.div>

            <motion.form

              variants={fadeInUp}

              onSubmit={handleSubmit}

              className="space-y-5"

            >

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div>

                  <label className="block text-xs font-medium text-white/40 mb-2 uppercase tracking-wider">Name</label>

                  <input

                    type="text"

                    required

                    value={formState.name}

                    onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}

                    placeholder="John Doe"

                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all duration-200"

                  />

                </div>

                <div>

                  <label className="block text-xs font-medium text-white/40 mb-2 uppercase tracking-wider">Email</label>

                  <input

                    type="email"

                    required

                    value={formState.email}

                    onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}

                    placeholder="john@example.com"

                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all duration-200"

                  />

                </div>

              </div>

              <div>

                <label className="block text-xs font-medium text-white/40 mb-2 uppercase tracking-wider">Message</label>

                <textarea

                  required

                  rows={5}

                  value={formState.message}

                  onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}

                  placeholder="Tell me about your project..."

                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all duration-200 resize-none"

                />

              </div>

              <button

                type="submit"

                disabled={formStatus === "sending" || formStatus === "sent"}

                className="w-full py-3.5 rounded-xl bg-purple-500 text-white font-semibold text-sm hover:bg-purple-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 shadow-[0_0_24px_rgba(168,85,247,0.3)] hover:shadow-[0_0_36px_rgba(168,85,247,0.5)]"

              >

                {formStatus === "sending" ? "Sending..." : formStatus === "sent" ? "Message sent ✓" : "Send message"}

              </button>

              {formStatus === "error" && (

                <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>

              )}

            </motion.form>

          </motion.div>

        </div>

      </section>

    </main>

  );

}
