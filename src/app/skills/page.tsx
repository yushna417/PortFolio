// src/app/skills/page.tsx
"use client";
import SkillsChart from "../components/SkillsChart";
import { skills } from "../data/skill";
import { motion } from "framer-motion";
import { 
  Lightbulb, 
  Users, 
  Zap, 
  Target,
  Code
} from "lucide-react";

export default function SkillsPage() {


  // Categorize skills
  const frontendSkills = skills.filter(skill => 
    ["HTML", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Next.js", "ReactNative" ].includes(skill.name)
  );
  
  const backendSkills = skills.filter(skill => 
    ["Python", "Django", "PostgreSQL", "Firebase"].includes(skill.name)
  );
  
  const otherSkills = skills.filter(skill => 
    !["HTML", "Tailwind CSS", "JavaScript", "TypeScript", "React","ReactNative", "Next.js",  "Python", "Django", "PostgreSQL", "Firebase"].includes(skill.name)
  );

  return (
    <div id="skill" className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-slate-900 py-12 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
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
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl text-left">
            A comprehensive showcase of my technical capabilities and professional competencies
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-20">
          <section className="space-y-8">            

            {/* Frontend Skills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 dark:border-slate-700 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-slate-700">
                Frontend Development
              </h3>
              <SkillsChart skills={frontendSkills} />
            </motion.div>

            {/* Backend Skills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 dark:border-slate-700 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-slate-700">
                Backend & Databases
              </h3>
              <SkillsChart skills={backendSkills} />
            </motion.div>

            {/* Other Skills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 dark:border-slate-700 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-slate-700">
                Tools & Libraries
              </h3>
              <SkillsChart skills={otherSkills} />
            </motion.div>
          </section>       
        </div>
      </div>
    </div>
  );
}