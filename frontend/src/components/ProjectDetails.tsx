
import type { Project } from '../data/projects';

type ProjectDetailsProps = {
  project: Project;
  onClose: () => void;
};

function ProjectDetails({
  project,
  onClose,
}: ProjectDetailsProps) {

  return (
    <div className="project-details">

      {project.year && (
        <span className="project-year">
          {project.year}
        </span>
      )}

      {project.technologies.length > 0 && (
        <div className="project-tags">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      )}

      {project.context && (
        <div className="project-details-block">
          <h4>Contexte du projet</h4>
          <p>{project.context}</p>
        </div>
      )}

      {project.objectives && project.objectives.length > 0 && (
        <div className="project-details-block">
          <h4>Objectifs</h4>
          <ul>
            {project.objectives.map((objective) => (
              <li key={objective}>{objective}</li>
            ))}
          </ul>
        </div>
      )}

      {project.process && (
        <div className="project-details-block">
          <h4>Démarche et réalisation</h4>
          <p>{project.process}</p>
        </div>
      )}

      {project.results && (
        <div className="project-details-block">
          <h4>Résultats</h4>
          <p>{project.results}</p>
        </div>
      )}

      {project.gallery && project.gallery.length > 0 && (
        <div className="project-details-block">
          <h4>Galerie</h4>

          <div className="project-gallery">
            {project.gallery.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`${project.title} - Visuel ${index + 1}`}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      )}

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Voir le projet ↗
        </a>
      )}

      <button
        type="button"
        className="project-back-button"
        onClick={onClose}
      >
        Réduire le projet −
      </button>

    </div>
  );
}

export default ProjectDetails;