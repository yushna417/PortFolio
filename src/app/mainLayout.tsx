"use client";
import Home from "./home/page";
import SkillsPage from "./skills/page";
import ExperiencePage from "./experience/page";
import ProjectsPage from "./projects/page";

import { Element } from "react-scroll";

export default function MainLayout() {
  return (
    <div>
      <Element name="home">
        <Home />
      </Element>

      <Element name="skills">
        <SkillsPage />
      </Element>

      <Element name="experience">
        <ExperiencePage />
      </Element>

      <Element name="projects">
        <ProjectsPage />
      </Element>
    </div>
  );
}
