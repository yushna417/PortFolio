// src/components/SkillsChart.tsx
"use client";
import { motion } from "framer-motion";
import { Skill } from "../app/types/types";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiExpo,
  SiNextdotjs,
  SiTailwindcss,
  SiDjango,
  SiFirebase,
  SiPython,
  SiNumpy,
  SiPandas,
  SiGit,
  SiPostgresql,
  SiGithub,
  SiReact as SiReactNative,
} from "react-icons/si";
import { JSX } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export const iconComponents: Record<string, JSX.Element> = {
  "HTML": <SiHtml5 className="text-[#E44D26]" size={24} />,
  "Tailwind/CSS": <SiTailwindcss className="text-[#38B2AC]" size={24} />,
  JavaScript: <SiJavascript className="text-[#F0DB4F]" size={24} />,
  TypeScript: <SiTypescript className="text-[#3178C6]" size={24} />,
  React: <SiReact className="text-[#61DAFB]" size={24} />,
  Expo: <SiExpo className="text-[#7e8384]" size={24} />,
  "Next.js": <SiNextdotjs className="text-gray-800 dark:text-white" size={24} />,
  Django: <SiDjango className="text-[#038c3e]" size={24} />,
  Firebase: <SiFirebase className="text-[#FFCA28]" size={24} />,
  Python: <SiPython className="text-[#3776AB]" size={24} />,
  PostgreSQL: <SiPostgresql className="text-[#336791]" size={24} />,
  NumPy: <SiNumpy className="text-[#4D77CF]" size={24} />,
  Pandas: <SiPandas className="text-[#5e2b80]" size={24} />,
  Git: <SiGit className="text-[#F05032]" size={24} />,
  Github: <SiGithub className="text-[#9eadb6]" size={24} />,
};

export default function SkillsChart({ skills }: { skills: Skill[] }) {
  return (
    <div className="flex flex-wrap gap-2.5 md:gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          // whileHover={{
          //   scale: 1.05,
          //   boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)"
          // }}
          className="group relative flex flex-col items-center p-3 rounded-xl bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:border-blue-50 hover:rounded-lg transition-all duration-300 cursor-pointer hover:scale-x-110"
        >

          <Tooltip>
            <TooltipTrigger>
              <>

                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10 rounded-2xl -z-5 opacity-0 transition-opacity duration-300" />

                {/* Skill Icon */}
                <div className="relative mb-4 p-3 rounded-xl bg-slate-900 group-hover:bg-slate-900 transition-colors duration-300 group-hover:scale-110">
                  <div className="relative z-10">
                    {iconComponents[skill.name] || <SiHtml5 className="text-[#E44D26]" size={24} />}
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-800/30 to-purple-800/30 rounded-xl opacity-0 blur-md transition-opacity duration-300" />
                </div>

                {/* Skill Level Bar */}
                <div className="w-full relative">
                  <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.05 + 0.3, duration: 1, ease: "easeOut" }}
                      className="h-2 rounded-full relative"
                      style={{
                        backgroundColor: getSkillColor(skill.name),
                      }}
                    >
                      {/* Shimmer effect on progress bar */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
                    </motion.div>
                  </div>


                </div>
              </>
            </TooltipTrigger>
            <TooltipContent>
              <p>{skill.name}</p>
            </TooltipContent>
          </Tooltip>

        </motion.div>
      ))}
    </div>
  );
}

function getSkillColor(skillName: string): string {
  const colorMap: Record<string, string> = {
    "HTML": "#E44D26",
    JavaScript: "#F0DB4F",
    TypeScript: "#3178C6",
    React: "#61DAFB",
    Expo: "#7e8384",
    "Next.js": "#000000",
    "Tailwind/CSS": "#38B2AC",
    "Ant Design": "#0170FE",
    Django: "#038c3e",
    Python: "#3776AB",
    Firebase: "#FFCA28",
    PostgreSQL: "#336791",
    NumPy: "#4D77CF",
    Pandas: "#5e2b80",
    Git: "#F05032",
    Github: "#9eadb6",
  };
  return colorMap[skillName] || "#6B7280";
}