import jsProjects from '../data/javascriptProjects';
import pyProjects  from '../data/pythonProjects';
import ProjectCard from "./ProjectCard";
// Create a separate array of objects to store the project data from the data folder

export default function Projects() {
  
  return (
    <section className='projects'>
      {jsProjects ? jsProjects.map(project => (
        <ProjectCard
          key={project.id}
          {...project}
        />
      )) : pyProjects.map(project => (
        <ProjectCard
          key={project.id}
          {...project}
        />
      ))}
    </section>
  );
}

