import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/Aboutme';
import './App.css';

function App() {
  return(
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <section id='informatique' className='section'>
          <h2>Projet informatique</h2>
          <ul>
            <li>Jeu du labyrinthe</li>
            <li>Jeu 2048 Python</li>
            <li>Healthy Pet Java</li>
          </ul>
        </section>

        <section id='design' className='section'>
          <h2>Projets design</h2>
          <ul>
            <li>Viqthor</li>
            <li>La paix au sport - Colombes</li>
            <li>Mobotix</li>
          </ul>
        </section>

        <section id='personnels' className='section'>
          <h2>Projets personnels</h2>
          <ul>
            <li>Dessins</li>
            <li>Photos</li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default App;