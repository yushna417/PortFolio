"use client"

import { AnimatePresence, motion } from "framer-motion";
import AnimatedText from "./components/ui/AnimatedText";
import Image from "next/image";
import { MdMarkEmailUnread   , MdOutlineShareLocation } from "react-icons/md";
import { educations } from "./data/education";
import { TimelineItem } from "./components/educationTimeline";
import { useState } from "react";
import { ControlledSwitch } from "./components/ui/switch";
import profile from "../../public/images/pp.jpg"
import Link from "next/link";


export default function Home() {
  const [mode, setMode] = useState<"left" | "right">("left");

  const aboutContent = (
    <div className="flex flex-col space-y-8">
      <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl text-slate-400 text-md md:text-lg"
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
    <main  className="pt-20 pb-16 md:pt-36 md:pb-24 font-sans ">
      <div className="container mx-auto md:px-14 px-4 flex flex-col space-y-44 ">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-r from-blue-950 to-indigo-950 px-6 py-8 h-44 rounded-2xl  shadow-lg mb-12 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-900/20 rounded-full translate-y-25 -translate-x-15"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-sky-800/20 rounded-full translate-y-12 translate-x-5"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 ">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center text-slate-300 text-lg font-medium">
                  <MdOutlineShareLocation className="mr-4 text-slate-300" size={24}/>
                  <span>Imadol, Lalitpur</span>
                </div>
                
                <div className="flex items-center text-slate-300 text-lg font-medium font-sans">
                  <MdMarkEmailUnread    className="mr-4 text-slate-300" size={24}/>
                  <span>buddhacharyay@gmail.com</span>
                </div>
              </div>
              
            </div>

            
          </motion.div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-3/5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-400 ">
                  <AnimatedText text="Hi, I'm Yushna Buddhacharya" />
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-sky-600">
                  <AnimatedText text="3rd-year Computing Student" delay={0.5} />
                </h2>
                
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  I build exceptional digital experiences with modern web
                  technologies. Focused on creating intuitive, performant, and
                  accessible web applications.
                </p>
                
              
              </motion.div>
            </div>
            
            <div className="md:w-2/5 -mt-0 md:-mt-32 pr-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="absolute inset-0 shadow-2xl bg-slate-800 rounded-2xl -rotate-10 -z-10"></div>
                <Image
                  src={profile}
                  alt="Yushna Buddhacharya"
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-3xl object-cover border-2 border-slate-400"
                  width={320}
                  height={320}
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-16">
          <div className="flex md:flex-row flex-col justify-between items-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold
                bg-gradient-to-r from-blue-600 to-purple-950
                bg-clip-text text-transparent md:mb-1 mb-6"
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
        </div>
      </div>
      <div className="flex justify-end px-32 mt-20">
        <Link href="/skills" className="px-6 py-3 border-2 text-white rounded-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                Know more about my skills →
        </Link>
      </div>
    </main>
  );
}