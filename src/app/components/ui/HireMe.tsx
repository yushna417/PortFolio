// src/components/ui/HireMe.tsx
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed right-4 bottom-4 z-40">
      <Link
        href="/contact"
        className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-600 text-white shadow-lg hover-scale animate-pulse"
      >
        <span className="text-xs md:text-sm font-bold rotate-12">Hire Me</span>
      </Link>
    </div>
  );
};

export default HireMe;