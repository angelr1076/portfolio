import resume from '../assets/images/resume.png';
import { useTheme } from './ThemeContext';

export default function Skills() {
  const { theme } = useTheme();
  
  return (
    <section id='resume' className='resume-section'>
      <h2 className={`page-header page-header-${theme}`}>Resume</h2>
      <div className="resume__container">
        <a href='https://resume.creddle.io/resume/w3izg6rjth' className='resume__link' rel='noreferrer' target='_blank'>
          <img className={theme === 'light' ? 'resume__img--light' : 'resume__img--dark'} src={resume} />
        </a>
      </div>
    </section>
  );
}
