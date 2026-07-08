"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { motion, AnimatePresence } from "framer-motion";

import { Menu, X } from 'lucide-react';

import { navLinks, navCTA, APP_NAME } from "@/lib/data";

export default function Navbar() {

  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  useEffect(() => {

    setMobileOpen(false);

  }, [pathname]);

  const handleAnchorClick = (

    e: React.MouseEvent<HTMLAnchorElement>,

    href: string

  ) => {

    if (pathname === "/" && href.startsWith("#")) {

      e.preventDefault();

      const target = document.querySelector(href);

      if (target) {

        target.scrollIntoView({ behavior: "smooth" });

      }

      setMobileOpen(false);

    }

  };

  const getLinkHref = (href: string) => {

    if (href.startsWith("#")) {

      return pathname === "/" ? href : `/${href}`;

    }

    return href;

  };

  return (
    <motion.header

      initial={{ y: -80, opacity: 0 }}

      animate={{ y: 0, opacity: 1 }}

      transition={{ duration: 0.6, ease: "easeOut" }}

      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${

        scrolled

          ? "bg-[#0f0f0f]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_32px_rgba(0,0,0,0.4)]"

          : "bg-transparent"

      }`}

    >
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        data-atomic-id="abn8cyn">Junaid</nav>
      {/* Mobile menu */}
      <AnimatePresence>

        {mobileOpen && (

          <motion.div

            initial={{ opacity: 0, height: 0 }}

            animate={{ opacity: 1, height: "auto" }}

            exit={{ opacity: 0, height: 0 }}

            transition={{ duration: 0.3, ease: "easeOut" }}

            className="md:hidden overflow-hidden bg-[#0f0f0f]/95 backdrop-blur-xl border-b border-white/5"

          >

            <ul className="px-6 py-4 flex flex-col gap-1" data-atomic-id="a1jkz969">

              {navLinks.map((link, i) => (

                <motion.li

                  key={link.href}

                  initial={{ opacity: 0, x: -16 }}

                  animate={{ opacity: 1, x: 0 }}

                  transition={{ delay: i * 0.06, duration: 0.3 }}

                >

                  <Link

                    href={getLinkHref(link.href)}

                    onClick={(e) => handleAnchorClick(e, link.href)}

                    className="block px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"

                  >

                    {link.label}

                  </Link>

                </motion.li>

              ))}

              <motion.li

                initial={{ opacity: 0, x: -16 }}

                animate={{ opacity: 1, x: 0 }}

                transition={{ delay: navLinks.length * 0.06, duration: 0.3 }}

                className="pt-2"

              >

                <Link

                  href={getLinkHref(navCTA.href)}

                  onClick={(e) => handleAnchorClick(e, navCTA.href)}

                  className="block px-4 py-3 text-sm font-semibold text-center rounded-full bg-blue-500 text-white hover:bg-blue-400 transition-all duration-300"

                >

                  {navCTA.label}

                </Link>

              </motion.li>

            </ul>

          </motion.div>

        )}

      </AnimatePresence>
    </motion.header>
  );

}