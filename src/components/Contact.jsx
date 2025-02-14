import { links } from "@/data";
import React from "react";
import { FloatingDock } from "./ui/FloatingDock";
import Button from "./ui/Button";
import { TextGenerateEffect } from "./ui/TextGenerate";

const Contact = () => {
  return (
    <>
      <section
        id="about"
        className="min-h-[80vh] dark:bg-black-100 bg-blue-200"
      >
        <div className="min-h-[80vh] w-full dark:bg-black-100 bg-blue-200 dark:bg-grid-white/[0.04] bg-grid-black/[0.1] relative flex justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="flex flex-col w-full justify-start">
            <div className="flex flex-col justify-center items-center">
              {/* Content */}
              <div className="p-20">
                <div className="text-center">
                  <TextGenerateEffect
                    words={`Contact Me`}
                    className={
                      "text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-opacity-50"
                    }
                  />
                  <p>Below are the details to reach out to me!</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex md:flex-row flex-col items-center gap-5 px-5">
                  <p className="text-2xl font-bold md:mb-0 mb-1">Find me on</p>
                  <FloatingDock
                    mobileClassName="translate-y-20" // only for demo, remove for production
                    items={links}
                  />
                </div>
              </div>

              <div className="mt-10">
                <div className="flex flex-col md:flex-row items-center gap-3">
                  <h2 className="text-3xl md:text-4xl">
                    Email me to reach out
                  </h2>
                  <Button title={"Click Here"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
