"use client";

import { tv } from "tailwind-variants";
import { ComponentProps, ReactNode } from "react";

const timelineItem = tv({
  base: "flex w-full relative pb-12 md:pb-16",
  variants: {
    position: {
      left: "md:justify-start justify-end",
      right: "md:justify-end justify-end",
    },
  },
});

const timelineCard = tv({
  base: "w-full md:w-[480px] max-w-full p-6 bg-white rounded-lg shadow-lg relative border-l-4 border-blue-500 mx-4 md:mx-0 z-30", // Z-index aumentado
});

interface TimelineItemProps extends ComponentProps<"div"> {
  position: "left" | "right";
  icon: ReactNode;
  date: string;
  title: string;
  subtitle: string;
  content: string;
}

export const TimelineItem = ({
  position,
  icon,
  date,
  title,
  subtitle,
  content,
  ...props
}: TimelineItemProps) => {
  return (
    <div className={timelineItem({ position })} {...props}>
      {/* Linha vertical entre os itens */}
      <div className="absolute w-0.5 h-full bg-gray-300 left-1/2 -translate-x-1/2 top-8 -z-10" />

      {/* Container do ícone - Ajustado o z-index e posicionamento */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 bg-blue-500 rounded-full flex items-center justify-center text-white z-20 mt-0 md:mt-4">
        {icon}
      </div>

      {/* Data - mobile */}
      <div className="absolute top-20 left-4 md:hidden block">
        <span className="text-gray-600 text-sm font-medium">{date}</span>
      </div>

      {/* Data - desktop */}
      <div
        className={`absolute top-9 hidden md:block ${
          position === "left" ? "left-1/2 ml-14" : "right-1/2 mr-14"
        }`}
      >
        <span className="text-white text-md font-medium">{date}</span>
      </div>

      {/* Card principal - Ajustado o margin-top */}
      <div className={`${timelineCard()} mt-16 md:mt-4`}>
        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
          {title}
        </h3>
        <h4 className="text-xs md:text-sm font-semibold text-gray-600 mb-4">
          {subtitle}
        </h4>
        <p className="text-gray-600 text-justify text-sm md:text-base leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
};

interface TimelineProps {
  children: ReactNode;
}

export const Timeline = ({ children }: TimelineProps) => {
  return (
    <div className="relative min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Linha vertical central - desktop */}
          <div className="hidden md:block absolute w-0.5 h-full bg-gray-300 left-1/2 -translate-x-1/2 top-0 -z-10" />

          {/* Lista de itens */}
          <div className="space-y-8 md:space-y-16">{children}</div>
        </div>
      </div>
    </div>
  );
};
