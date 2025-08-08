// src/components/Footer.tsx
import Link from "next/link";
import { Icon } from "@iconify/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

const socialLinks = [
    { icon: "mdi:github", url: "https://github.com/yourusername" },
    { icon: "mdi:linkedin", url: "https://linkedin.com/in/yourusername" },
    { icon: "mdi:twitter", url: "https://twitter.com/yourusername" },
    { icon: "mdi:email", url: "mailto:youremail@example.com" },
  ];

  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">
              <span className="text-blue-400">Dev</span>Portfolio
            </h2>
            <p className="text-slate-300 mt-2">
              YushnaBuddhacharya © {currentYear} All rights reserved
            </p>
          </div>

          <div className="flex space-x-6 text-xl">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors hover-scale"
              >
                <Icon icon={link.icon} width={24} height={24} />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-700 text-center text-slate-400">
          <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;