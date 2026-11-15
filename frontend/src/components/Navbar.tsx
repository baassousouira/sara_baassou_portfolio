
function Navbar() {
    return (
      <header className="navbar">
        <a href="#accueil" className="navbar-logo">
          Baassou Sara
        </a>
  
        <nav aria-label="Navigation principale">
          <a href="#accueil">Accueil</a>
          <a href="#apropos">À propos</a>
          <a href="#informatique">Projets Informatique</a>
          <a href="#design">Projets Design</a>
          <a href="#personnels">Projets personnels</a>
        </nav>
      </header>
    );
  }
  
  export default Navbar;  