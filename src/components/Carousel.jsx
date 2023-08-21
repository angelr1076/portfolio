import { useState } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';
import ProjectCard from './ProjectCard';
import projects from '../data/projectsList';

export default function ProjectsCarousel() {
  const [changeSlide, setChangeSlide] = useState("");

  const slides = projects.map((project, index) => {
  return {
    key: project.id,
    content: <ProjectCard key={project.id} {...project} />,
    onClick: () => setChangeSlide(index)
  };
});

  return (
    <div style={{ width: '40%', height: '500px', margin: '0 auto' }}>
      <Carousel
        slides={slides}
        changeSlide={changeSlide}
        offsetRadius={0}
        animationConfig={config.gentle}
        showNavigation
      />
    </div>
  );
}
