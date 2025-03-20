import resume from '../assets/images/resume.png';
import { useTheme } from './ThemeContext';

export default function Skills() {
  const { theme } = useTheme();

  return (
    <section id='resume' className='resume-section'>
      <h2 className={`page-header page-header-${theme}`}>Experience</h2>
      <div className='resume__container'>
        <a
          href='https://github.com/angelr1076/Resume/blob/main/rodriguez_angel_resume_2025-03-25.pdf'
          className='resume__link'
          rel='noreferrer'
          target='_blank'>
          <img
            className={`resume__img${theme === 'light' ? ' light' : ''}`}
            src={resume}
            title='Click to view PDF'
          />
        </a>
      </div>
    </section>
  );
}
