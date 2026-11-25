
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';

type ProjectsSectionProps = {
  id: Project['category'];
  title: string;
  number: string;
};

function ProjectsSection({
  id,
  title,
  number,
}: ProjectsSectionProps) {
  const filteredProjects = projects.filter(
    (project) => project.category === id
  );

  return (
    <section id={id} className="section projects-section">
      <div className="projects-container">

        <div className="projects-heading">
          <span className="projects-eyebrow">
            {number} / Mes réalisations
          </span>

          <h2>{title}</h2>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProjectsSection;
