import resume from '../assets/images/resume.png';

export default function Skills() {
  return (
    <section id='resume' className='resume-section'>
      <h2 className='page-header'>Resume</h2>
      <a href='https://resume.creddle.io/resume/w3izg6rjth' rel='noreferrer' target='_blank'>
        <img className='resume__img' src={resume} />
      </a>
    </section>
  );
}
