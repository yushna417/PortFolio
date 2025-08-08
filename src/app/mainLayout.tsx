import Home from './page';
import AboutPage from './about/page'
import ExperiencePage from './experience/page'
import SkillsPage from './skills/page'
import ProjectsPage from './projects/page'

export default function MainPage() {
  return (
    <>
      <main className="pt-24 min-h-screen ">
        <Home/>
        <AboutPage/>
        <SkillsPage/>
        <ExperiencePage/>
        <ProjectsPage/>
        </main>
    </>
  );
}
