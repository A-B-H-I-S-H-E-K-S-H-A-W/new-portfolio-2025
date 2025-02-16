import {
  ChartNoAxesGantt,
  GithubIcon,
  House,
  Info,
  Instagram,
  Linkedin,
  TwitterIcon,
  Youtube,
} from "lucide-react";
import project1 from "@/assets/projects1.png"; // arca.io
import project2 from "@/assets/projects2.png"; // freelancing
import project3 from "@/assets/projects3.png"; // portfolio
import project4 from "@/assets/projects4.png"; // job portal
import project5 from "@/assets/projects5.png"; // librarian
import project6 from "@/assets/projects6.png"; // scale.io

import react from "@/assets/react.png";
import redux from "@/assets/redux.png";
import node from "@/assets/node.png";
import express from "@/assets/express.png";
import figma from "@/assets/figma.png";
import js from "@/assets/js.png";
import tailwind from "@/assets/tailwind.png";
import nextjs from "@/assets/nextjs.png";
import shadcn from "@/assets/shadcn.png";
import mysql from "@/assets/mysql.webp";
import motion from "@/assets/motion.png";
import mongo from "@/assets/mongo.png";
import bootstrap from "@/assets/bootstrap.png";
import illustrator from "@/assets/illustrator.png";

import React from "react";

export const buttonLinks = [
  {
    id: 1,
    className:
      "mt-5 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md motion-delay-2000",
    title: "Download CV",
    href: "#",
  },
  {
    id: 2,
    className:
      "mt-5 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md motion-delay-2000",
    title: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/abhishek-shaw-21783a24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
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
    title: "Arca.ai",
    link: "https://renderwork.studio",
    thumbnail: project1, // arca.io
  },

  {
    title: "Scale",
    link: "https://cremedigital.com",
    thumbnail: project6, // scale.io
  },
  {
    title: "Librari.an",
    link: "https://goldenbellsacademy.com",
    thumbnail: project5, // librarian
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
    img: js,
  },
  {
    name: "TailwindCSS",
    img: tailwind,
  },
  {
    name: "React.JS",
    img: react,
  },
  {
    name: "Next.JS",
    img: nextjs,
  },
  {
    name: "Node.JS",
    img: node,
  },
  {
    name: "Express.JS",
    img: express,
  },
  {
    name: "Framer Motion",
    img: motion,
  },
  {
    name: "Shadcn UI",
    img: shadcn,
  },
  {
    name: "Bootstrap",
    img: bootstrap,
  },
  {
    name: "MySQL",
    img: mysql,
  },
  {
    name: "Mongo DB",
    img: mongo,
  },
  {
    name: "Illustrator",
    img: illustrator,
  },
  {
    name: "Redux",
    img: redux,
  },
  {
    name: "Figma",
    img: figma,
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

export const links = [
  {
    title: "Twitter",
    icon: (
      <TwitterIcon className="h-full w-full text-purple-500 dark:text-purple-400" />
    ),
    href: "https://x.com/_Abhishek_Shaw",
  },
  {
    title: "Instagram",
    icon: (
      <Instagram className="h-full w-full text-purple-500 dark:text-purple-400" />
    ),
    href: "https://www.instagram.com/abhishek_keshari_16/",
  },
  {
    title: "Youtube",
    icon: (
      <Youtube className="h-full w-full text-purple-500 dark:text-purple-400" />
    ),
    href: "https://www.youtube.com/channel/UC9_h0ed9e44wqym-WZfN6sQ",
  },
  {
    title: "LinkedIn",
    icon: (
      <Linkedin className="h-full w-full text-purple-500 dark:text-purple-400" />
    ),
    href: "https://www.linkedin.com/in/abhishek-shaw-21783a24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    title: "GitHub",
    icon: (
      <GithubIcon className="h-full w-full text-purple-500 dark:text-purple-400" />
    ),
    href: "https://github.com/A-B-H-I-S-H-E-K-S-H-A-W",
  },
];
