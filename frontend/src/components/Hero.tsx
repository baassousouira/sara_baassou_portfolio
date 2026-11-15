
function Hero() {
    return (
      <section id="accueil" className="section hero">
        <div className="hero-content">
          {/* Colonne gauche : présentation */}
          <div className="hero-text">
            <span className="hero-eyebrow">
              Design × Informatique
            </span>
  
            <h1>
              Bienvenue dans mon monde hybride
            </h1>
  
            <p className="hero-subtitle">
              Entre ingénierie informatique & design global
            </p>
  
            <a href="#informatique" className="hero-button">
              Découvrir mes projets
            </a>
          </div>
  
          {/* Colonne droite : illustration */}
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-shape">
              <div className="hero-shape-circle" />
              <div className="hero-shape-line" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Hero;
  