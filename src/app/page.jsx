"use client";

import About from "@/components/About";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/ui/Navbar";
import { navItems } from "@/data";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <main className="dark:bg-black-100 overflow-hidden mx-auto ">
        <Navbar navItems={navItems} />
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
}
