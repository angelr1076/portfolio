import { FaLinkedin, FaGithub, FaReact } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { ImFontSize } from 'react-icons/im';
import { useTheme } from './ThemeContext';
import { useState } from 'react';
import Contact from './Contact';

export default function Footer() {
  const { theme } = useTheme();
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className={`footer${theme === 'light' ? ' light' : ''}`}>
      <a
        href='https://www.linkedin.com/in/angelrodriguezlead/'
        className={`footer__link${theme === 'light' ? ' light' : ''}`}
        rel='noreferrer'
        target='_blank'
        title='LinkedIn Profile'>
        <FaLinkedin />
      </a>
      <a
        href='https://github.com/angelr1076'
        className={`footer__link${theme === 'light' ? ' light' : ''}`}
        rel='noreferrer'
        target='_blank'
        title='Github Profile'>
        <FaGithub />
      </a>
      <a
        type='button'
        className={`footer__link${theme === 'light' ? ' light' : ''}`}
        rel='noreferrer'
        title='Send Me An Email'
        onClick={() => setIsContactOpen(true)}
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        <GoMail />
      </a>
      <Contact
        showModal={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      <p>
        <FaReact
          className={`react-logo${theme === 'light' ? ' light' : ''}`}
          alt='React logo'
          title='This project was built using React'
        />
        <a
          href='https://www.onlinewebfonts.com/icon'
          target='_blank'
          rel='noopener noreferrer'>
          <ImFontSize
            className={`font-logo${theme === 'light' ? ' light' : ''}`}
            title='Icons made from svg icons is licensed by CC BY 4.0'
          />
        </a>
      </p>
    </div>
  );
}
