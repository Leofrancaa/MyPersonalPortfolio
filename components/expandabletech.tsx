// components/ExpandableTechCard.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "@mui/icons-material";

interface TechCardProps {
  title: string;
  description: string;
  proficiency: number;
  color?: string;
}

const ExpandableTechCard = ({
  title,
  description,
  proficiency,
  color = "#3B82F6",
}: TechCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer border-r-4 border-blue-500"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      animate={{ height: isExpanded ? "auto" : "64px" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight className="text-gray-500" />
          </motion.div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 space-y-4"
          >
            <p className="text-gray-600 text-sm">{description}</p>

            {/* Proficiency Bar */}
            <div className="relative pt-2">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500">Proficiency</span>
                <span className="font-medium" style={{ color }}>
                  {proficiency}%
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${proficiency}%` }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: color }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ExpandableTechCard;
