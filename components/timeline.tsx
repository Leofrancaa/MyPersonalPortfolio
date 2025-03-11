/* eslint-disable @next/next/no-img-element */
"use client";

import { tv } from "tailwind-variants";
import { ComponentProps, ReactNode, useState } from "react";

const timelineItem = tv({
  base: "flex w-[100vw] relative pb-12 pt-16",
  variants: {
    position: {
      left: "justify-start ",
      right: "justify-end",
    },
  },
});

const timelineCard = tv({
  base: "w-[44vw] max-w-full p-6 bg-white rounded-lg shadow-lg relative z-30 transition-all duration-300 origin-top",
});

interface TimelineItemProps extends ComponentProps<"div"> {
  position: "left" | "right";
  date: string;
  title: string;
  subtitle: string;
  content: string;
  images?: string[];
}

export const TimelineItem = ({
  position,
  date,
  title,
  subtitle,
  content,
  images = [],
  ...props
}: TimelineItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={timelineItem({ position })} {...props}>
      {/* Linha vertical entre os itens */}
      <div className="absolute w-0.5 h-full bg-gray-100 left-1/2 -translate-x-1/2 top-8 -z-20" />

      <div className="absolute left-1/2 top-36 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500" />

      {/* Data - desktop */}
      <div
        className={`absolute top-[137px] hidden md:block ${
          position === "left" ? "left-1/2 ml-6" : "right-1/2 mr-6"
        }`}
      >
        <span className="text-gray-200 text-xl font-medium">{date}</span>
      </div>

      {/* Card principal */}
      <div
        className={`${timelineCard()} mt-4 cursor-pointer ${
          isHovered ? "scale-y-105 pb-8" : ""
        } ${position === "left" ? "left-16" : "right-16"}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 flex justify-between items-center">
          {title}
          <span
            className={`transform transition-transform duration-200 ${
              isExpanded ? "rotate-180" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </h3>
        <h4 className="text-xs md:text-sm font-semibold text-gray-600 mb-4">
          {subtitle}
        </h4>
        <p className="text-gray-600 text-justify text-sm md:text-base leading-relaxed">
          {content}
        </p>

        {/* Área de imagens no clique */}
        {isExpanded && images.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex gap-4">
              {images.slice(0, 2).map((img, index) => (
                <div key={index} className="flex-1">
                  <img
                    src={img}
                    alt={`Imagem ${index + 1}`}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// O componente Timeline permanece o mesmo
interface TimelineProps {
  children: ReactNode;
}

export const Timeline = ({ children }: TimelineProps) => {
  return (
    <div className="relative min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
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
