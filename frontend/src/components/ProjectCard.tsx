
import type { Project } from '../data/projects';

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">

      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <span>Image à venir</span>
        )}
      </div>

      <div className="project-card-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        {project.technologies.length > 0 && (
          <div className="project-tags">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
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
      </div>
    </article>
  );
}

export default ProjectCard;
