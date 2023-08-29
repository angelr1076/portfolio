import '../assets/styles/style.css';
import PropTypes from 'prop-types'
import { SiJavascript, SiReact, SiJest, SiBootstrap, SiDotenv, SiWebpack, SiGooglemaps, SiPython, SiDjango } from "react-icons/si";


function handleClick(e) {
  e.preventDefault();
  const href = e.target.getAttribute('href');
  window.open(href, '_blank');
}

const iconMap = {
  SiJavascript: <SiJavascript />,
  FaReact: <SiReact />,
  SiJest: <SiJest />,
  SiBootstrap: <SiBootstrap />,
  SiDotenv: <SiDotenv />,
  SiWebpack: <SiWebpack />,
  SiGooglemaps: <SiGooglemaps />,
  SiPython: <SiPython />,
  SiDjango: <SiDjango />,
};
export default function ProjectCard({title, description, image, live, github, builtWith}) {
  
  return (
    <div className='project-card'>
      <img src={image} className='project-card__img'/>
        <div className='project-card__details-container'>
          <div className="project-card__header-container">
            <h3 className='title'>{title}</h3> 
            <div className="built-with-icons">
                {builtWith.map((icon, index) => (
                  <span style={{ marginRight: '0.8em'}} key={index}>
                    {iconMap[icon]}
                  </span>
                ))}
              </div>
          </div>
        <p className='description'>{description}</p>
        <div className='btn-container'>
          <button className='btn live' href={live} rel='noreferrer' onClick={handleClick}>Live Demo</button>
          <button className='btn github' href={github} rel='noreferrer' onClick={handleClick}>Github</button>
        </div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  builtWith: PropTypes.array,
  description: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired
};