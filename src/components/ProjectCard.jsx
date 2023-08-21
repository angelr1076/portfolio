import "../assets/styles/style.css";
import PropTypes from 'prop-types';
export default function ProjectCard({title, description, image}) {
  
  return (
    <div className='project-card'>
      <img src={image}/>
      <h3 className='title'>{title}</h3> 
      <p>{description}</p>
      {/* <div className="btn-container">
        <button className="btn live">Live Demo</button>
        <button className="btn github">Github</button>
      </div> */}
    </div>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired
};