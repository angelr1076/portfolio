import { FaLinkedin, FaGithub, FaReact } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';
import { GoMail } from 'react-icons/go';


export default function Footer () {
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
      <p>Built With <FaReact className="react-logo" alt="React logo" title="This project was built using React" /> <SiVite className="vite-logo" title='Vite build tool was used' /></p>
    </div>
    )
}
