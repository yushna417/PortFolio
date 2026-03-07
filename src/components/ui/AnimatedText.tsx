"use client"

import { useEffect, useState } from "react";

type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
};

const AnimatedText = ({ text, className = "", delay = 0 }: AnimatedTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50 + delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return <span className={`inline-block ${className}`}>{displayedText}</span>;
};

export default AnimatedText;