"use client";

import { AnimatePresence, motion } from "framer-motion";
import { educations } from "../data/education";
import { TimelineItem } from "../components/educationTimeline";
import { useState } from "react";
import { ControlledSwitch } from "../components/ui/switch";

export default function AboutPage() {
  const [mode, setMode] = useState<"left" | "right">("left");
    const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const aboutContent = (
    <div className="flex flex-col space-y-8">
      <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl text-slate-400 text-sm md:text-base"
        >
          I’m a passionate web developer focused on building clean, scalable,
          and user-centric digital experiences using modern technologies.
      </motion.p>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Who I Am",
            text:
              "A computing and IT student with a strong interest in web development, problem-solving, and modern UI engineering.",
          },
          {
            title: "My Journey",
            text:
              "My journey started in college with my first website and evolved into building real-world projects using React, Next.js, and backend technologies.",
          },
          {
            title: "What I Do",
            text:
              "I specialize in frontend development but enjoy working across the stack, focusing on performance, accessibility, and clean architecture.",
          },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-2xl border border-white/10
              bg-white/5 backdrop-blur-md p-6 space-y-3
              hover:border-blue-500/40 transition-colors"
          >
            <h3 className="text-lg font-semibold text-slate-200">
              {item.title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const educationContent = (
    <motion.div
      key="education-content"
      
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-4"
    >
      {educations.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </motion.div>
  );

  return (
    <section
      id="about"
      className="container mx-auto px-5 md:px-14 py-20 space-y-16"
    >
      {/* Heading */}

      <div className="flex md:flex-row flex-col justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold
            bg-gradient-to-r from-blue-600 to-purple-950
            bg-clip-text text-transparent"
        >
          About Me
        </motion.h1>

        <ControlledSwitch leftText="A Little About Me" rightText="Education" value={mode} onChange={setMode} />
      </div>



      <div className="w-full">
              <AnimatePresence mode="wait">
                {mode === "left" ? aboutContent : educationContent}
              </AnimatePresence>
            </div>
    </section>
  );
}


