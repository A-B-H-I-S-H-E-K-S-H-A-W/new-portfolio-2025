import React from "react";

const Button = ({ title, className, href, target }) => {
  return (
    <a
      target={target}
      href={href}
      className={`relative inline-flex h-12 overflow-hidden rounded-full p-[1px] ${className} `}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black-100 px-3 py-1 text-sm font-bold text-white backdrop-blur-3xl">
        {title}
      </span>
    </a>
  );
};

export default Button;
