import PropTypes from 'prop-types';
import "../assets/styles/style.css";

// Adding styling to the project card
export default function ProjectCard({ title, description, image }) {
  // display a project card
  return (
    <div>
      <h3 className="project__title">{title}</h3>
      <p className="project__description">{description}</p>
      <img src={image} className='project-card__img' />
    </div>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired
};