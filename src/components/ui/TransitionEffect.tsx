"use client"

import { useEffect, useState } from "react";

const TransitionEffect = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 bg-white dark:bg-slate-900 transition-opacity duration-500 ${
        mounted ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    ></div>
  );
};

export default TransitionEffect;