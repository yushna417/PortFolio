// src/components/SkillsChart.tsx
"use client";
import { motion } from "framer-motion";
import { Skill } from "../types/types";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiDjango,
  SiFirebase,
  SiPython,
  SiNumpy,
  SiPandas,
  SiGit,
  SiPostgresql,
  SiReact as SiReactNative,
} from "react-icons/si";
import { JSX } from "react";

const iconComponents: Record<string, JSX.Element> = {
  "HTML": <SiHtml5 color="#E44D26" size={24} />,     
  JavaScript: <SiJavascript color="#F0DB4F" size={24} />,
  TypeScript: <SiTypescript color="#3178C6" size={24} />,
  React: <SiReact color="#61DAFB" size={24} />,
  ReactNative: <SiReactNative color="#61DAFB" size={24} />,
  "Next.js": <SiNextdotjs color="currentColor" size={24} />,
  "Tailwind CSS": <SiTailwindcss color="#38B2AC" size={24} />,
  Django: <SiDjango color="#092E20" size={24} />,
  Firebase: <SiFirebase color="#FFCA28" size={24} />,
  Python: <SiPython color="#3776AB" size={24} />,
  PostgreSQL: <SiPostgresql color="#336791" size={24} />,
  NumPy: <SiNumpy color="#4D77CF" size={24} />,
  Pandas: <SiPandas color="#150458" size={24} />,
  Git: <SiGit color="#F05032" size={24} />,
};

export default function SkillsChart({ skills }: { skills: Skill[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 }}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center p-6 rounded-xl  bg-white dark:bg-slate-800 hover:dark:bg-slate-900 shadow-sm hover:shadow-md border border-gray-100 dark:border-slate-700 transition-all"
        >
          <div className="relative mb-4">
            {iconComponents[skill.name] || <SiPython color="#3776AB" size={24} />}
          </div>
          <span className="font-medium text-center text-gray-800 dark:text-gray-200">
            {skill.name}
          </span>
          <div className="w-full mt-3 bg-gray-200 dark:bg-slate-700 rounded-full h-2">
            <div
              className="h-2 rounded-full"
              style={{
                width: `${skill.level}%`,
                backgroundColor: getSkillColor(skill.name),
              }}
            />
          </div>
          <span className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            {skill.level}%
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function getSkillColor(skillName: string): string {
  const colorMap: Record<string, string> = {
    "HTML/CSS": "#E44D26",
    JavaScript: "#F0DB4F",
    TypeScript: "#3178C6",
    React: "#61DAFB",
    ReactNative: "#61DAFB",
    "Next.js": "currentColor",
    "Tailwind CSS": "#38B2AC",
    "Ant Design": "#0170FE",
    Django: "#092E20",
    Python: "#3776AB",
    Firebase: "#FFCA28",
    PostgreSQL: "#336791",
    NumPy: "#4D77CF",
    Pandas: "#150458",
    Git: "#F05032",
  };
  return colorMap[skillName] || "#6B7280";
}