// src/app/experience/page.tsx
import ExperienceTimeline from "../components/ExperienceTimeline";
import { experiences } from "../data/Experience";

export default function ExperiencePage() {  
  return (
    <div id="experience" className="container mx-auto px-14 py-24">
      <div className="text-left mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slideUp bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Professional Journey
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl animate-fadeIn">
          My career path and the valuable experiences I&apos;ve gained along the way
        </p>
      </div>

      <div className="max-w-6xl relative">
        {/* Decorative elements */}
        <div className="absolute -left-8 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-blue-500 to-transparent hidden md:block"></div>
        <div className="absolute -right-8 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-purple-500 to-transparent hidden md:block"></div>

        <div className="bg-white dark:bg-slate-800/50 rounded-xl p-6 md:p-8 shadow-lg border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
          <ExperienceTimeline experiences={experiences} />

          <div
            className="mt-12 text-center animate-fadeIn"
            style={{ animationDelay: "0.3s" }}
          >
            <p className="text-slate-500 dark:text-slate-400 mb-4">
              Currently seeking new opportunities to grow and contribute
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
