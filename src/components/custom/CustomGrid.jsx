import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import gridImg from "@/assets/imggrid.webp";
import { testimonials } from "@/data";
import { InfiniteMovingCards } from "../ui/InfinteMoving";
import grid from "@/assets/grid.png";
import gridMain from "@/assets/gridMain.png";
import { InfiniteMovingIcons } from "../ui/InfinteMovingIcons";
// import { GradientAnimation } from "../ui/GradientAnimation";

export function CustomGrid() {
  return (
    <BentoGrid className="max-w-7xl relative z-20 mx-auto md:auto-rows-[23rem] md:px-10 px-2">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.8] bg-dot-black/[0.5] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black-100"></div>
);

const items = [
  {
    title: "Pushing the web game to new heights",
    description:
      "I thrive on solving complex challenges and turning ideas into reality.",
    header: (
      <img
        src={gridMain.src}
        className="brightness-110 w-full min-h-[8rem] object-cover relative z-20 rounded-lg"
        alt="img"
      />
    ),
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Constantly Evolving",
    description:
      "I'm always on the lookout for new tools, frameworks, and techniques.",
    header: (
      <img
        src={gridImg.src}
        className="w-full min-h-[6rem] object-cover rounded-lg"
        alt="img"
      />
    ),
    className: "md:col-span-1",
  },
  {
    title: "My Tech Stack",
    description:
      "Explore the powerful tools and technologies that fuel my projects.",
    header: (
      <>
        <div className="h-[16rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </div>
      </>
    ),
    className: "md:col-span-1",
  },
  {
    title: "A Passionate Coder for All Time",
    description: "My timeless passion for coding defines who I am",
    header: (
      <img
        src={grid.src}
        className="brightness-110 w-full min-h-[8rem] object-cover relative z-20 rounded-lg"
        alt="img"
      />
    ),
    className: "md:col-span-1",
  },
  {
    title: "I'm currently looking to join a cross-functional team.",
    description: "Tools and Languages I'm currently looking for collaboration",
    header: (
      <>
        <div className="h-[16rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingIcons
            items={testimonials}
            direction="left"
            speed="ex-slow"
          />
          <InfiniteMovingIcons
            items={testimonials}
            direction="right"
            speed="ex-slow"
          />
        </div>
      </>
    ),
    className: "md:col-span-2",
  },
];
