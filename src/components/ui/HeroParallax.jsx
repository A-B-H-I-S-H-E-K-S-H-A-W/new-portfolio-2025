"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { TextGenerateEffect } from "./TextGenerate";
import Image from "next/image";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <section
      id="projects"
      className="min-h-screen dark:bg-black-150 bg-blue-200"
    >
      <div className="min-h-screen w-full z-20 dark:bg-black-150 bg-blue-200 dark:bg-grid-white/[0.01] bg-grid-black/[0] relative flex justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute z-20 pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex flex-col w-full justify-start">
          <div className="flex flex-col justify-center items-center">
            {/* Content */}
            {/* <div className="h-40"></div> */}
            <div
              id="projects"
              ref={ref}
              className="md:h-[365vh] h-[295vh] py-40 z-50 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
            >
              <Header />
              <motion.div
                style={{
                  rotateX,
                  rotateZ,
                  translateY,
                  opacity,
                }}
                className=""
              >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                  {firstRow.map((product) => (
                    <ProductCard
                      product={product}
                      translate={translateX}
                      key={product.title}
                    />
                  ))}
                </motion.div>
                <motion.div className="flex flex-row  mb-20 space-x-20 ">
                  {secondRow.map((product) => (
                    <ProductCard
                      product={product}
                      translate={translateXReverse}
                      key={product.title}
                    />
                  ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                  {thirdRow.map((product) => (
                    <ProductCard
                      product={product}
                      translate={translateX}
                      key={product.title}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header = () => {
  return (
    <div className="md:max-w-7xl w-screen flex flex-col items-center text-center relative mx-auto py-20 md:py-40 px-4 left-0 top-0">
      <TextGenerateEffect
        words={`The projects you can rely on.`}
        className={
          "text-3xl md:text-6xl max-w-3xl font-bold text-center bg-clip-text text-transparent bg-opacity-50"
        }
        filter=""
      />
      <p className="md:max-w-2xl opacity-100 px-5 mx-auto text-center text-base md:text-xl mt-8 dark:text-neutral-200">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[50rem] rounded-lg relative flex-shrink-0"
    >
      <Link
        href={product?.link}
        className="block group-hover/product:shadow-2xl"
      >
        <Image
          src={
            typeof product.thumbnail === "string"
              ? product.thumbnail
              : product.thumbnail.src // Handle imported image case
          }
          width={1200}
          height={1}
          className="object-cover object-left-top rounded-lg absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
