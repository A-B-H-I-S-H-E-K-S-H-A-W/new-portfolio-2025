import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerate";
import Button from "./ui/Button";
import { DialogBox } from "./custom/DialogBox";

export function Hero() {
  return (
    <div className="-mt-8 min-h-screen w-full rounded-md flex items-center justify-center dark:bg-black-100 antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* <ThemeToggle className="absolute top-10" /> */}
      <Spotlight
        className="-top-20 -left-5 md:left-60 md:-top-20"
        fill="purple"
      />
      <Spotlight
        className="-top-10 left-40 md:left-72 md:-top-28"
        fill="blue"
      />
      <Spotlight
        className="-top-40 left-20 md:right-60 md:-top-50"
        fill="purple"
      />
      <Spotlight
        className="top-10 left-full md:right-72 md:-top-10"
        fill="blue"
      />

      <section
        id="home"
        className="min-h-screen w-full dark:bg-black-100 bg-blue-100  dark:bg-grid-white/[0.1] bg-grid-black/[0.23] relative flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex items-center justify-center max-w-5xl flex-col p-4 mx-auto relative z-10  w-full pt-20 md:pt-0">
          <TextGenerateEffect
            words={`Hello I'm Abhishek Shaw, A Full Stack Developer`}
            className={
              "text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-opacity-50"
            }
          />
          <p className=" items-center flex mt-4 font-semibold uppercase text-sm dark:text-neutral-300 text-black-100 max-w-lg text-center mx-auto motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md motion-delay-2000">
            A passionate and Innovative website developer, specializing in
            dynamic applications and cuting-edge technologies
          </p>

          <div className="flex gap-5 items-center">
            <DialogBox
              className={
                "mt-5 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md motion-delay-2000"
              }
              title={"Download CV"}
              DialogName={"Download CV"}
              DialogDetails={"Enter your email address to download my cv"}
            />
            <Button
              key={"2"}
              href={
                "https://www.linkedin.com/in/abhishek-shaw-21783a24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
              title={"LinkedIn Profile"}
              className={
                "mt-5 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md motion-delay-2000"
              }
              target={"_blank"}
            />
          </div>
        </div>
      </section>

      {/* Content */}
    </div>
  );
}
