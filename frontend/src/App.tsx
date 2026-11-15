
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section id="apropos" className="section">
          <h2>À propos de moi</h2>
          <p>Mes compétences et mes expériences.</p>
        </section>

        <section id="informatique" className="section">
          <h2>Projets Informatique</h2>
        </section>

        <section id="design" className="section">
          <h2>Projets Design</h2>
        </section>

        <section id="personnels" className="section">
          <h2>Projets personnels</h2>
        </section>
      </main>
    </>
  );
}

export default App;