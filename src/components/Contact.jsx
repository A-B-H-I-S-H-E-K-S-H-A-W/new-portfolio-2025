import { links } from "@/data";
import React from "react";
import { FloatingDock } from "./ui/FloatingDock";
import { TextGenerateEffect } from "./ui/TextGenerate";
import { DialogBox } from "./custom/DialogBox";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="min-h-[70vh] dark:bg-black-100 bg-blue-200"
      >
        <div className="min-h-[70vh] w-full dark:bg-black-100 bg-blue-200 dark:bg-grid-white/[0.04] bg-grid-black/[0.1] relative flex justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="flex flex-col w-full justify-start">
            <div className="flex min-h-[70vh] flex-col justify-center items-center">
              {/* Content */}
              <div className="p-10">
                <div className="text-center">
                  <TextGenerateEffect
                    words={`Ready to take your digital presence to the next level?`}
                    className={
                      "text-3xl md:max-w-3xl min-w-full md:text-5xl font-bold text-center bg-clip-text text-transparent bg-opacity-50"
                    }
                  />
                  <p className="mt-3">
                    Below are the details to reach out to me!
                  </p>
                  <DialogBox title={"Contact me"} />
                </div>
              </div>
            </div>
            <div className="px-10 py-5 flex md:flex-row flex-col items-center justify-between w-full relative z-20">
              <div>
                <p className="text-md font-semibold mb-3">
                  Copyright @2025 Abhishek Shaw
                </p>
              </div>
              <div>
                <FloatingDock
                  mobileClassName="translate-y-20" // only for demo, remove for production
                  items={links}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
