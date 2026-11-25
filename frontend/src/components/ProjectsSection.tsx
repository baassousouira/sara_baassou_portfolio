
import { useState } from 'react';
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

  const [selectedProject, setSelectedProject] =
    useState<string | null>(null);

  const filteredProjects = projects.filter(
    (project) => project.category === id
  );

  function toggleProject(projectId: string) {
    setSelectedProject((previous) =>
      previous === projectId ? null : projectId
    );
  }

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
              isExpanded={selectedProject === project.id}
              onToggle={() => toggleProject(project.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProjectsSection;