import { FaLinkedin, FaGithub, FaReact } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';
import { GoMail } from 'react-icons/go';


export default function Footer () {
  return (
    <div className="footer">
      <a href='https://www.linkedin.com/in/angelrodriguezlead/' className='footer__link' rel='noreferrer' target='_blank'>
        <FaLinkedin />
      </a>
      <a href='https://github.com/angelr1076' className='footer__link' rel='noreferrer' target='_blank'>
        <FaGithub />
      </a>
      <a href='mailto:devlife@beachlife.email' className='footer__link' rel='noreferrer' target='_blank'>
        <GoMail />
      </a>
      <p>Built With <FaReact /> <SiVite /></p>
    </div>
    )
}
