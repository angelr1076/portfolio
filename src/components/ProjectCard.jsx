import "../assets/styles/style.css";
import PropTypes from 'prop-types';

function handleClick(e) {
  e.preventDefault();
  const href = e.target.getAttribute('href');
  window.open(href, '_blank');
}

// write a function that takes in the event and uses the event to get the href attribute
// use window.open to open the href in a new tab


export default function ProjectCard({title, description, image, live, github}) {
  
  return (
    <div className='project-card'>
      <img src={image}/>
      <h3 className='title'>{title}</h3> 
      <p>{description}</p>
      <div className="btn-container">
        <button className="btn live" href={live} rel='noreferrer' onClick={handleClick}>Live Demo</button>
        <button className="btn github" href={github} rel='noreferrer' onClick={handleClick}>Github</button>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired
};