"use client"
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profile from "../../../public/images/SecondPP.jpg";
import { ControlledSwitch } from "../components/ui/switch";
import { educations } from "../data/education";
import { TimelineItem } from "../components/educationTimeline";

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
    <motion.div
      key="about-content"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div >
        <h2 className="text-xl font-bold">Who I Am</h2>
        <p className="text-slate-600 text-base dark:text-slate-300">
          I&apos;m a passionate web developer with a focus on creating
          beautiful, functional, and user-friendly digital experiences. With a
          background in Computing and Information Technology, and a love for
          problem-solving, I enjoy turning complex problems into simple,
          intuitive solutions.
        </p>
      </motion.div>

      <motion.div >
        <h2 className="text-xl font-bold">My Journey</h2>
        <p className="text-slate-600 text-base dark:text-slate-300">
          My journey in web development started in college when I built my
          first website. Since then, I&apos;ve been constantly learning and
          expanding my skill set to include modern web technologies and best
          practices.
        </p>
      </motion.div>

      <motion.div >
        <h2 className="text-xl font-bold">What I Do</h2>
        <p className="text-slate-600 text-base dark:text-slate-300">
          I specialize in front-end development with React and Next.js, but
          I&apos;m also comfortable working across the full stack. I&apos;m
          passionate about accessibility, performance, and creating seamless
          user experiences.
        </p>
      </motion.div>
    </motion.div>
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
    <section className="container mx-auto px-5 md:px-14 mb-20" id="about">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl pt-16 md:pt-20 animate-slideUp bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        About Me
      </motion.h1>
      
      <div className="font-sans py-10 md:pt-6">
        <div className={`flex flex-col ${mode === "left" ? "md:flex-row" : "md:flex-row-reverse"} gap-10`}>
          
          <div className="md:w-1/3 pt-28">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-56 h-56 md:w-80 md:h-80 mx-auto rounded-3xl overflow-hidden border-4 border-blue-950 shadow-lg"
            >
              <Image
                src={profile}
                alt="Developer"
                className="w-full h-full object-cover"
                width={320}
                height={320}
                priority
              />
            </motion.div>
          </div>

          <div className={`md:w-2/3 flex flex-col ${mode === "left" ? "items-end" : "items-start"} space-y-16`}>
            <ControlledSwitch 
              leftText="A Little About Me" 
              rightText="Education" 
              value={mode} 
              onChange={setMode} 
            />

            <div className="w-full">
              <AnimatePresence mode="wait">
                {mode === "left" ? aboutContent : educationContent}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}