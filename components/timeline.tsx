// components/Timeline.tsx
"use client";

import { tv } from "tailwind-variants";
import { ComponentProps, ReactNode } from "react";

// Variantes do Tailwind
const timelineItem = tv({
  base: "flex w-full relative pb-12",
  variants: {
    position: {
      left: "justify-start",
      right: "justify-end",
    },
  },
});

const timelineCard = tv({
  base: "w-[480px] p-6 bg-white rounded-lg shadow-lg relative border-l-4 border-blue-500",
});

// Interface para o TimelineItem
interface TimelineItemProps extends ComponentProps<"div"> {
  position: "left" | "right";
  icon: ReactNode;
  date: string;
  title: string;
  subtitle: string;
  content: string;
}

// Componente TimelineItem
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
      <div className="absolute w-0.5 h-full bg-gray-300 left-1/2 -translate-x-1/2 top-0" />

      {/* Container do ícone */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white z-10">
        {icon}
      </div>

      {/* Data dinâmica */}
      <div
        className={`absolute top-5 ${
          position === "left" ? "left-1/2 ml-14" : "right-1/2 mr-14"
        }`}
      >
        <span className="text-white text-md font-medium">{date}</span>
      </div>

      {/* Card principal */}
      <div className={timelineCard()}>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <h4 className="text-sm font-semibold text-gray-600 mb-4">{subtitle}</h4>
        <p className="text-gray-600 text-justify leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

// Interface para o Timeline
interface TimelineProps {
  children: ReactNode;
}

// Componente Timeline (container principal)
export const Timeline = ({ children }: TimelineProps) => {
  return (
    <div className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Linha vertical central */}
          <div className="hidden sm:block absolute w-0.5 h-full bg-gray-300 left-1/2 -translate-x-1/2 top-0" />

          {/* Lista de itens */}
          <div className="space-y-8">{children}</div>
        </div>
      </div>
    </div>
  );
};
