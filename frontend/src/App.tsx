
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/Aboutme';
import ProjectsSection from './components/ProjectsSection';
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <ProjectsSection
          id="informatique"
          title="Projets informatiques"
          number="02"
        />

        <ProjectsSection
          id="design"
          title="Projets design"
          number="03"
        />

        <ProjectsSection
          id="personnels"
          title="Projets personnels"
          number="04"
        />
      </main>
    </>
  );
}

export default App;