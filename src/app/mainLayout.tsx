import Home from './page';
import AboutPage from './about/page';
import ExperiencePage from './experience/page';
import SkillsPage from './skills/page';
import ProjectsPage from './projects/page';

export default function MainPage() {
  return (
    <main className="pt-24 min-h-screen relative object-contain">
      <div
        className="pointer-events-none fixed inset-0 z-10 opacity-[0.02]  object-contain"
        style={{ backgroundImage: "url('/images/image.png')" }}
      />

      <Home />
      <AboutPage />
      <SkillsPage />
      <ExperiencePage />
      <ProjectsPage />
    </main>
  );
}

