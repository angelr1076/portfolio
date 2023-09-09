import { FaLinkedin, FaGithub, FaReact } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';
import { GoMail } from 'react-icons/go';
import { useTheme } from './ThemeContext';


export default function Footer () {
  const { theme } = useTheme();
  return (
    <div className="footer">
      <a href='https://www.linkedin.com/in/angelrodriguezlead/' className='footer__link' rel='noreferrer' target='_blank' title='LinkedIn Profile'>
        <FaLinkedin />
      </a>
      <a href='https://github.com/angelr1076' className='footer__link' rel='noreferrer' target='_blank' title='Github Profile'>
        <FaGithub />
      </a>
      <a href='mailto:devlife@beachlife.email' className='footer__link' rel='noreferrer' target='_blank' title='Send Me An Email'>
        <GoMail />
      </a>
      <p><FaReact className={`react-logo${theme === 'light' ? '-light' : '' }`} alt="React logo" title="This project was built using React" /> <SiVite className={`vite-logo${theme === 'light' ? '-light' : '' }`} title='Vite build tool was used' /></p>
    </div>
    )
}
