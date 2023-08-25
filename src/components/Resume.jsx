import resume from '../assets/images/resume.png';

export default function Skills() {
  return (
    <section id='resume' className='resume-section'>
      <h2 className='page-header'>Resume</h2>
      <div className="resume__container">
        <a href='https://resume.creddle.io/resume/w3izg6rjth' className='resume__link' rel='noreferrer' target='_blank'>
          <img className='resume__img' src={resume} />
        </a>
      </div>
    </section>
  );
}
