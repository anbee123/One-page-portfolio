import './App.scss';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';

import { ResumeData } from './constants';

function App() {
  return (
    <div>
      <Header data={ResumeData.basic_info}/>
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
    </div>
  );
}

export default App;
