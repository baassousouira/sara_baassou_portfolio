
import type { Project } from '../data/projects';
import ProjectDetails from './ProjectDetails';

type ProjectCardProps = {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
};

function ProjectCard({
  project,
  isExpanded,
  onToggle,
}: ProjectCardProps) {

  return (
    <article
      className={`project-card ${isExpanded ? 'expanded' : ''}`}
    >

      <button
        type="button"
        className="project-card-trigger"
        onClick={onToggle}
        aria-expanded={isExpanded}
      >

        <span className="project-image">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <span>Image à venir</span>
          )}
        </span>

        <span className="project-card-content">

          <span className="project-card-heading">
            <span className="project-card-title">
              {project.title}
            </span>

            <span className="project-toggle-icon" aria-hidden="true">
              {isExpanded ? '−' : '+'}
            </span>
          </span>

          <span className="project-card-description">
            {project.description}
          </span>

          <span className="project-link">
            {isExpanded ? 'Réduire le projet' : 'Découvrir le projet'}
          </span>

        </span>

      </button>

      {isExpanded && (
        <ProjectDetails
          project={project}
          onClose={onToggle}
        />
      )}

    </article>
  );
}

export default ProjectCard;