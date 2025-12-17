// src/app/about/page.tsx
import Image from "next/image";
import profile from "../../../public/images/SecondPP.jpg";
import { MdSchool, MdCalendarToday, MdLocationOn } from "react-icons/md";
import { section } from "framer-motion/client";

export default function AboutPage() {
  return (
    <section className="container mx-auto mb-20">
      <div id="about" className=" px-4 pt-20 md:py-24 font-sans">
      <h1 className="text-center text-4xl md:text-5xl mb-16 animate-slideUp bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        About Me
      </h1>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/3">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-lg animate-fadeIn">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <Image
                src={profile}
                alt="Developer"
                className="w-full max-w-md mx-auto rounded-lg shadow-xl"
                width={100}
                height={100}
                priority
              />
            </div>
          </div>
        </div>

        <div
          className="md:w-2/3 space-y-2 animate-fadeIn"
          style={{ animationDelay: "0.3s" }}
        >
          <h2 className="text-xl font-bold">Who I Am</h2>
          <p className="text-slate-600 text-base mb-7 dark:text-slate-300">
            I&apos;m a passionate web developer with a focus on creating
            beautiful, functional, and user-friendly digital experiences. With a
            background in Computing and Information Technology, and a love for
            problem-solving, I enjoy turning complex problems into simple,
            intuitive solutions.
          </p>

          <h2 className="text-xl font-bold">My Journey</h2>
          <p className="text-slate-600 text-base mb-7 dark:text-slate-300">
            My journey in web development started in college when I built my
            first website. Since then, I&apos;ve been constantly learning and
            expanding my skill set to include modern web technologies and best
            practices.
          </p>

          <h2 className="text-xl font-bold">What I Do</h2>
          <p className="text-slate-600 text-base mb-10 dark:text-slate-300">
            I specialize in front-end development with React and Next.js, but
            I&apos;m also comfortable working across the full stack. I&apos;m
            passionate about accessibility, performance, and creating seamless
            user experiences.
          </p>

         
        </div>
      </div>
    </div>
          
          
    <h2 className="text-2xl font-bold mb-6 dark:text-white text-blue-900">Education</h2>

    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
      <div className="relative p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-600  transition-shadow w-full md:w-1/2 group">
        <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-bl-full"></div>
        <div className="flex items-start mb-4 h-24">
          <div className="bg-blue-100 p-3 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors">
            <MdSchool className="text-blue-600" size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-blue-900 dark:text-blue-200">Bachelor of Computer Science in Computing and Information Technology (BSc.CIT)</h3>
          </div>
        </div>
        <div className="flex items-center text-slate-600 mb-3">
          <MdLocationOn className="text-blue-500 mr-2" size={18} />
          <span className="text-sm">Asian Institute of Technology and Management, Lalitpur</span>
        </div>
        <div className="flex items-center text-slate-600">
          <MdCalendarToday className="text-blue-500 mr-2" size={18} />
          <span className="text-sm">2023 - Present (Expected Graduation: 2027)</span>
        </div>
        
      </div>

      <div className="relative p-6  bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-600 hover:shadow-md transition-shadow w-full md:w-1/2 group">
        <div className="absolute top-0 right-0 w-16 h-16 bg-slate-500/5 rounded-bl-full"></div>
        <div className="flex items-start mb-4 h-24">
          <div className="bg-slate-100 p-3 rounded-lg mr-4 group-hover:bg-slate-200 transition-colors">
            <MdSchool className="text-slate-600" size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold mt-2 text-indigo-950 dark:text-blue-200">High School (+2 Science Faculty)</h3>
          </div>
        </div>
        <div className="flex items-center text-slate-600 mb-3">
          <MdLocationOn className="text-slate-500 mr-2" size={18} />
          <span className="text-sm">Unique Academy, Lalitpur</span>
        </div>
        <div className="flex items-center text-slate-600">
          <MdCalendarToday className="text-slate-500 mr-2" size={18} />
          <span className="text-sm">2019 - 2021</span>
        </div>
        
      </div>
    </div>
                   
    </section>
    
  );
}