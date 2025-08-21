"use client"

import { motion } from "framer-motion";
import AnimatedText from "./components/ui/AnimatedText";
import Image from "next/image";
import { MdMarkEmailUnread   , MdOutlineShareLocation } from "react-icons/md";

import profile from "../../public/images/pp.jpg"

export default function Home() {
  return (
    <main id="home" className="pt-20 pb-16 md:pt-24 md:pb-24 font-sans ">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-r from-blue-900 to-indigo-950 px-6 py-8 h-44 rounded-2xl  shadow-lg mb-12 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-600/20 rounded-full translate-y-25 -translate-x-15"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-sky-700/20 rounded-full translate-y-12 translate-x-5"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center text-white text-lg font-medium">
                <MdOutlineShareLocation className="mr-4 text-slate-300" size={24}/>
                <span>Imadol, Lalitpur</span>
              </div>
              
              <div className="flex items-center text-white text-lg font-medium font-sans">
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
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
              <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-2xl -rotate-10 -z-10"></div>
              <Image
                src={profile}
                alt="Yushna Buddhacharya"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl object-cover"
                width={320}
                height={320}
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}