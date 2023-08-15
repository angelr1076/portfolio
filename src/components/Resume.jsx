import resume from '../assets/images/resume.png';

export default function Skills() {
  return (
    <section className='resume-section'>
      <h2>Resume</h2>

      {/* <div className='skills-list'>
        <div>JavaScript</div>
        <div>React</div>
      </div> */}

      <a href='https://resume.creddle.io/resume/w3izg6rjth' rel='noreferrer' target='_blank'>
        <img className='resume__img' src={resume} />
      </a>
    </section>
  );
}
