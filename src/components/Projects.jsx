import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description...',
      image: 'project1.png',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description...',
      image: 'project2.png',
    },
  ];
  
  return (
    <section id='projects'>
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          {...project}
        />
      ))}
    </section>
  );
}

