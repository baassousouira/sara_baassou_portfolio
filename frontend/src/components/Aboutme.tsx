
const experiences = [
    "Projets de design scolaires professionnalisants",
    "Engagement associatif auprès de personnes en difficulté",
    "Projets informatiques",
];
  
const softSkills = [
    "Travail en équipe",
    "Capacité d'écoute",
    "Capacité de flexibilité",
    "Facilitation de groupe",
];
  
function About() {
    return (
      <section id="apropos" className="section about">
        <div className="about-container">
  
          {/* Introduction */}
          <div className="about-heading">
            <span className="about-eyebrow">
              01 / Faisons connaissance
            </span>
  
            <h2>À propos de moi</h2>
  
            <p className="about-intro">
              Mon intérêt pour la programmation et mon attrait
              pour les arts manuels m'ont poussée vers une
              formation atypique mêlant ingénierie et design
              dans une école pour le vivant.
            </p>
  
            <p className="about-description">
              Je souhaite mettre mes compétences au service
              du vivant, notamment à travers le développement
              Full Stack, tout en associant, lorsque c'est
              possible, le graphisme et la créativité.
            </p>
          </div>
  
          {/* Grille de présentation */}
          <div className="about-grid">
  
            <article className="about-card">
              <span className="about-card-number">01</span>
              <h3>Compétences</h3>
  
              <div className="about-tags">
                <span>Informatique</span>
                <span>Design</span>
                <span>Programmation</span>
                <span>Arts manuels</span>
              </div>
            </article>
  
            <article className="about-card">
              <span className="about-card-number">02</span>
              <h3>Expérience</h3>
  
              <ul className="about-list">
                {experiences.map((experience) => (
                  <li key={experience}>{experience}</li>
                ))}
              </ul>
            </article>
  
            <article className="about-card">
              <span className="about-card-number">03</span>
              <h3>Langues</h3>
  
              <ul className="about-languages">
                <li>
                  <span>Français</span>
                  <strong>Langue maternelle</strong>
                </li>
                <li>
                  <span>Arabe</span>
                  <strong>Langue natale</strong>
                </li>
                <li>
                  <span>Anglais</span>
                  <strong>B2</strong>
                </li>
                <li>
                  <span>Espagnol</span>
                  <strong>A2</strong>
                </li>
              </ul>
            </article>
  
            <article className="about-card">
              <span className="about-card-number">04</span>
              <h3>Soft skills</h3>
  
              <ul className="about-list">
                {softSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
  
          </div>
        </div>
      </section>
    );
}
  
export default About;  