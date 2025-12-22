// src/components/ExperienceTimeline.tsx
import { Experience } from "../types/types";

type ExperienceTimelineProps = {
  experiences: Experience[];
};

const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  return (
    <div className="font-sans space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group animate-fadeIn`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-950 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            {index + 1}
          </div>

          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-4 rounded border border-slate-200 dark:border-slate-700 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-blue-600">{exp.role}</div>
              <time className="font-caption text-slate-500 text-sm">
                {exp.period}
              </time>
            </div>
            <div className="text-slate-500 dark:text-slate-300 mb-2">
              {exp.company}
            </div>
            <div className="text-slate-600 dark:text-slate-400">
              {exp.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;