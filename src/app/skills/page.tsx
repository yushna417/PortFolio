// src/app/skills/page.tsx
"use client";
import Link from "next/link";
import SkillsChart from "../components/SkillsChart";
import { skills } from "../data/skill";
import { motion } from "framer-motion";

export default function SkillsPage() {
  const frontendSkills = skills.filter(skill => 
    ["HTML", "Tailwind/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Expo" ].includes(skill.name)
  );
  
  const backendSkills = skills.filter(skill => 
    ["Python", "Django", "PostgreSQL", "Firebase"].includes(skill.name)
  );
  
  const otherSkills = skills.filter(skill => 
    !["HTML", "Tailwind/CSS", "JavaScript", "TypeScript", "React", "Expo", "Next.js",  "Python", "Django", "PostgreSQL", "Firebase"].includes(skill.name)
  );

  return (
    <div className="min-h-screen py-12 md:py-32 px-5 md:px-14 container mx-auto">
      <div className=" mx-auto " >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-left">
            <span className="bg-gradient-to-r from-blue-600 to-purple-950 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl text-left">
            A comprehensive showcase of my technical capabilities and professional competencies
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-20">
          <section className="space-y-8 flex flex-wrap gap-x-8">            

            {/* Frontend Skills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/50 rounded-2xl p-6 md:p-8 shadow-lg border border-slate-700 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-6 pb-3 border-b border-slate-700">
                Frontend Development
              </h3>
              <SkillsChart skills={frontendSkills} />
            </motion.div>

            {/* Backend Skills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-800/50 rounded-2xl p-6 md:p-8 shadow-lg border border-slate-700 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-6 pb-3 border-b border-slate-700">
                Backend & Databases
              </h3>
              <SkillsChart skills={backendSkills} />
            </motion.div>

            {/* Other Skills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-slate-800/50 rounded-2xl p-6 md:p-8 shadow-lg border border-slate-700 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-6 pb-3 border-b border-slate-700">
                Tools & Libraries
              </h3>
              <SkillsChart skills={otherSkills} />
            </motion.div>
          </section>       
        </div>
      </div>
       <div className="flex justify-end px-14 mt-20">
        <Link href="/experience" className="px-6 py-3 border-2 text-white rounded-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                See what experiences out there -- →
        </Link>
      </div>
    </div>
  );
}