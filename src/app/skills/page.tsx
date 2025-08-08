// src/app/skills/page.tsx
import SkillsChart from "../components/SkillsChart";
import { Skill } from "../types/types";

export default function SkillsPage() {
  const data: Skill[] = [
    { name: "HTML/CSS", level: 90,  icon: "html" },
    { name: "JavaScript", level: 50,  icon: "javascript" },
    { name: "TypeScript", level: 45,  icon: "typescript" },
    { name: "React", level: 45,  icon: "react" },
    { name: "ReactNative", level: 45,  icon: "react" },
    { name: "Next.js", level: 45,  icon: "nextjs" },
    { name: "Tailwind CSS", level: 65,  icon: "tailwind" },
    { name: "Django", level: 50,  icon: "django" },
    { name: "Firebase", level: 45,  icon: "firebase" },
    { name: "Python", level: 50,  icon: "python" },
    { name: "PostgreSQL", level: 50,  icon: "PostgreSQL" },
    { name: "NumPy", level: 50,  icon: "numpy" },
    { name: "Pandas", level: 50,  icon: "pandas" },
    { name: "Git", level: 50,  icon: "git" },
  ];
   
  const SoftSKills = ["Responsive Design", "UI/UX Principles", "Agile Development", "Problem Solving", "REST APIs"]

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slideUp bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Technical Skills
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto animate-fadeIn">
          The tools and technologies I use to bring ideas to life
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto bg-white dark:bg-slate-800/50 rounded-xl p-6 md:p-8 shadow-lg border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
        <div className="grid-rows-2 space-y-32">
          <div className="animate-fadeIn grid-cols-4 md:grid-cols-8">           
                <SkillsChart 
                skills={data}/>
          </div>
          
          
          
          <div className="animate-fadeIn" style={{ animationDelay: "0.8s" }}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4" >

           {SoftSKills.map((skill, index) => (
              <div key={index} className="bg-slate-100 dark:bg-slate-700/50 p-4 rounded-lg hover:border-2 hover:border-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <p className="font-medium text-slate-700 dark:text-slate-300">{skill}</p>
              </div>
           ))}
           
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}