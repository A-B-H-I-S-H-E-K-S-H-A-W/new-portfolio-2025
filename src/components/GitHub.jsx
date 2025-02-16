"use client";
import React from "react";
import { Cover } from "./ui/Cover";
import Image from "next/image";
import bg from "@/assets/github-bg.jpg";
import Button from "./ui/Button";

export function GitHub() {
  return (
    <div className="bg-cover bg-center md:h-[30rem] h-[20rem] relative w-full dark:bg-black-100 bg-blue-200  flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div
        style={{ backgroundImage: `url('../assets/github-bg.jpg')` }}
        className="w-full absolute inset-0 h-screen"
      >
        <img
          src={bg.src}
          width={100}
          height={100}
          className="object-cover brightness-50 object-center absolute h-full w-full inset-0"
          alt={"img"}
        />
      </div>

      <h1 className="md:text-7xl text-2xl lg:text-6xl font-bold text-center text-white relative z-20">
        More Projects on <Cover>GitHub.</Cover>
        <div className="mt-6">
          <Button
            title={"GitHub Repositories"}
            href={"https://github.com/A-B-H-I-S-H-E-K-S-H-A-W?tab=repositories"}
          />
        </div>
      </h1>
    </div>
  );
}
