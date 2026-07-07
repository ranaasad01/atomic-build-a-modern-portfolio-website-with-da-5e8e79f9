export const APP_NAME = "Asad Rana";
export const APP_TAGLINE = "Creative Developer";
export const APP_EMAIL = "hello@asadrana.dev";

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const navCTA = {
  label: "Hire Me",
  href: "#contact",
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
};

export type Skill = {
  name: string;
  category: string;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
};
