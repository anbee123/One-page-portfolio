import './App.scss';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer'

import { ResumeData } from './constants';

function App() {
  return (
    <div>
      <Header data={ResumeData.basic_info}/>
      <AboutSection data={ResumeData.about} />
      <ProjectsSection data={ResumeData.projects} />
      <SkillsSection data={ResumeData.skills} />
      <ExperienceSection data={ResumeData.experiences} />
      <Footer data={ResumeData.socials} />
    </div>
  );
}

export default App;
