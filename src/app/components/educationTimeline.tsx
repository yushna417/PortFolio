import { MdLocationOn, MdSchool } from "react-icons/md";
import { Education } from "../types/types";


export const TimelineItem = ({ title, instituteName, year }: Education) => {
  return (
    <div className="relative flex pb-14 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-700"></div>
      
      {/* Icon/dot */}
      <div className="relative z-10 flex-shrink-0 w-12 h-12 flex items-center justify-center">
        <div className="w-7 h-7 border-blue-500 border-2 rounded-full bg-blue-950"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <MdSchool className="text-blue-500" size={18} />
        </div>
      </div>

      {/* Content */}
      <div className="ml-6">
        <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium rounded-full mb-2">
          {year}
        </div>
        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">
          {title}
        </h3>
        <div className="flex items-center text-slate-600 dark:text-slate-400">
          <MdLocationOn className="mr-2" size={16} />
          <span className="text-sm">{instituteName}</span>
        </div>
      </div>
    </div>
  );
};

