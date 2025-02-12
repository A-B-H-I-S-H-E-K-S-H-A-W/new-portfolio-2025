"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/HeroParallax";
import { products } from "@/data";

export function Projects() {
  return <HeroParallax products={products} />;
}
