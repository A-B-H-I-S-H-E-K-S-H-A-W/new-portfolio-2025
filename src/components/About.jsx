import React from "react";
import { CustomGrid } from "./custom/CustomGrid";

const About = () => {
  return (
    <section id="about" className="min-h-screen dark:bg-black-150 bg-blue-200">
      <div className="min-h-screen w-full dark:bg-black-150 bg-blue-200 dark:bg-grid-white/[0.06] bg-grid-black/[0.2] relative flex justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex flex-col w-full justify-start">
          <div className="flex flex-col justify-center items-center">
            {/* Content */}
            <div className="p-20">
              <div className="text-center">
                <h2 className=""></h2>
              </div>
            </div>
            <CustomGrid />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
