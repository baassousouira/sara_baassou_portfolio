import Navbar from './components/Navbar';
import './App.css';

function App() {
  return(
    <>
      <Navbar />

      <main>
        <section id="acceuil" className='section hero'>
          <h1>Bienvenue dans mon monde hybride</h1>
          <p>Entre ingénierie informatique et design global</p>
        </section>

        <section id='apropos' className='section'>
          <h2>À propos de moi</h2>
          <p>
            Je suis passionnée par la programmation,
            le design et les expériences numériques.
          </p>

          <h3>Compétences</h3>
          <p>Programmation, design global, Suite Adobe</p>

          <h3>Soft skills</h3>
          <p>
            Travail en équipe, écoute, flexibilité
          et facilitation de groupe.
          </p>
        </section>

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