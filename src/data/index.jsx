import { ChartNoAxesGantt, House, Info } from "lucide-react";
import project1 from "@/assets/projects1.png"; // arca.io
import project2 from "@/assets/projects2.png"; // freelancing
import project3 from "@/assets/projects3.png"; // portfolio
import project4 from "@/assets/projects4.png"; // job portal
import project5 from "@/assets/projects5.png"; // librarian
import project6 from "@/assets/projects6.png"; // scale.io

export const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <House size={18} />,
  },
  {
    name: "About",
    link: "#about",
    icon: <Info size={18} />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <ChartNoAxesGantt size={18} />,
  },
];

export const buttonLinks = [
  {
    id: 1,
    className:
      "mt-5 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md motion-delay-2000",
    title: "Explore More",
    href: "#about",
  },
  {
    id: 2,
    className:
      "mt-5 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md motion-delay-2000",
    title: "LinkedIn Profile",
    href: "https://github.com/A-B-H-I-S-H-E-K-S-H-A-W",
    target: "_blank",
  },
];

export const products = [
  {
    title: "Arca.io",
    link: "",
    thumbnail: project1, // arca.io
  },
  {
    title: "Job Portal",
    link: "https://cursor.so",
    thumbnail: project4, // job portal
  },
  {
    title: "Freelancing Platform",
    link: "https://userogue.com",
    thumbnail: project2, // freelancing
  },

  {
    title: "Scale.io",
    link: "https://editorially.org",
    thumbnail: project6, // scale.io
  },
  {
    title: "Freelancing",
    link: "https://editrix.ai",
    thumbnail: project2, // freelancing
  },
  {
    title: "Portfolio website",
    link: "https://app.pixelperfect.quest",
    thumbnail: project3, // portfolio
  },

  {
    title: "Librarian",
    link: "https://algochurn.com",
    thumbnail: project5, // librarian
  },
  {
    title: "Arca",
    link: "https://ui.aceternity.com",
    thumbnail: project1, // arca.io
  },
  {
    title: "Portfolio Website",
    link: "https://tailwindmasterkit.com",
    thumbnail: project3, // portfolio
  },
  {
    title: "Freelancing",
    link: "https://smartbridgetech.com",
    thumbnail: project2, // freelancing
  },
  {
    title: "Librar.an",
    link: "https://renderwork.studio",
    thumbnail: project5, // librarian
  },

  {
    title: "Scale",
    link: "https://cremedigital.com",
    thumbnail: project6, // scale.io
  },
  {
    title: "Arca.ai",
    link: "https://goldenbellsacademy.com",
    thumbnail: project1, // arca.io
  },
  {
    title: "Job Search Website",
    link: "https://invoker.lol",
    thumbnail: project4, // job portal
  },
  {
    title: "Self-Portfolio Website",
    link: "https://efreeinvoice.com",
    thumbnail: project3, // portfolio
  },
];

export const testimonials = [
  {
    name: "JavaScript",
  },
  {
    name: "TailwindCSS",
  },
  {
    name: "React.JS",
  },
  {
    name: "Next.JS",
  },
  {
    name: "Node.JS",
  },
  {
    name: "Express.JS",
  },
  {
    name: "Framer Motion",
  },
  {
    name: "Shadcn UI",
  },
  {
    name: "Bootstrap",
  },
  {
    name: "MySQL",
  },
];

export const testimonialsData = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    srcc: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    srcc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
