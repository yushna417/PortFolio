// src/app/skills/page.tsx
import SkillsChart from "../components/SkillsChart";
import { skills } from "../data/skill";

export default function SkillsPage() {
  const SoftSKills = ["Responsive Design", "UI/UX Principles", "Agile Development", "Problem Solving", "REST APIs"]

  return (
    <div id="skill" className="container mx-auto px-14 py-24">
      <div className="text-left mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slideUp bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Technical Skills
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl animate-fadeIn">
          The tools and technologies I use to bring ideas to life
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto bg-white dark:bg-slate-800/50 rounded-xl p-6 md:p-8 shadow-lg border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
        <div className="grid-rows-2 space-y-32">
          <div className="animate-fadeIn grid-cols-4 md:grid-cols-8">           
                <SkillsChart 
                skills={skills}/>
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