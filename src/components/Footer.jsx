import { FaLinkedin, FaGithub, FaReact } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { ImFontSize } from 'react-icons/im';
import { useTheme } from './ThemeContext';
import PropTypes from 'prop-types';

export default function Footer({ setShowModal }) {
  const { theme } = useTheme();
  return (
    <div className={`footer${theme === 'light' ? ' light' : ''}`}>
      <a
        href='#'
        className={`footer__link${theme === 'light' ? ' light' : ''}`}
        title='Send Me An Email'
        onClick={e => {
          e.preventDefault();
          setShowModal(true);
        }}>
        <GoMail />
      </a>
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

Footer.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};
