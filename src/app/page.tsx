"use client"

import { motion } from "framer-motion";
import AnimatedText from "./components/ui/AnimatedText";
import Link from "next/link";
import HireMe from "./components/ui/HireMe";
import Image from "next/image";

import profile from "../../public/images/pp.jpg"

export default function Home() {
  return (
    <main id="home" className="pt-24 pb-16 md:pt-24 md:pb-24 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-3xl mb-12 md:mb-0 ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-[2.6rem] font-bold mb-4">
                <AnimatedText text="Hi, I'm Yushna Buddhacharya" />
              </h1>
              <h2 className="text-2xl md:text-2xl font-semibold mb-6 text-primary">
                <AnimatedText text="3rd-year Computing Student" delay={0.5} />
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                I build exceptional digital experiences with modern web
                technologies. Focused on creating intuitive, performant, and
                accessible web applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#project"
                  className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
                >
                  View Projects
                </Link>
                <Link
                  href="#footer"
                  className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
                >
                  Contact Me
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="md:w-2/5">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 bg-primary/10 rounded-full absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <Image
                src={profile}
                alt="Developer"
                className="w-full max-w-md mx-auto rounded-lg shadow-xl object-top"
                width={320} // or your preferred width
                height={320} // or preferred height
                priority
              />

            </motion.div>
          </div>
        </div>
      </div>
      <HireMe />
    </main>
  );
}