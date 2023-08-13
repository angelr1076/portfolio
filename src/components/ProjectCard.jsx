import PropTypes from 'prop-types';


export default function ProjectCard({ title, description, image }) {
  // display a project card
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={image} />
    </div>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired
};