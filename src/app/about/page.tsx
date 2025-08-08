// src/app/about/page.tsx
import Image from "next/image";
import profile from "../../../public/images/SecondPP.jpg";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-32 md:py-36">
      <h1 className="text-center mb-12 animate-slideUp bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
          className="md:w-2/3 space-y-6 animate-fadeIn"
          style={{ animationDelay: "0.3s" }}
        >
          <h2 className="text-2xl font-bold">Who I Am</h2>
          <p className="text-slate-600 dark:text-slate-300">
            I&apos;m a passionate web developer with a focus on creating
            beautiful, functional, and user-friendly digital experiences. With a
            background in Computing and Information Technology, and a love for
            problem-solving, I enjoy turning complex problems into simple,
            intuitive solutions.
          </p>

          <h2 className="text-2xl font-bold">My Journey</h2>
          <p className="text-slate-600 dark:text-slate-300">
            My journey in web development started in college when I built my
            first website. Since then, I&apos;ve been constantly learning and
            expanding my skill set to include modern web technologies and best
            practices.
          </p>

          <h2 className="text-2xl font-bold">What I Do</h2>
          <p className="text-slate-600 dark:text-slate-300">
            I specialize in front-end development with React and Next.js, but
            I&apos;m also comfortable working across the full stack. I&apos;m
            passionate about accessibility, performance, and creating seamless
            user experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
