import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from './ThemeContext';
import { BsSun, BsMoonStars } from "react-icons/bs";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); 
  const [landingActive, setLandingActive] = useState(true);
  const { theme, toggleTheme } = useTheme();
  
  const toggleMenu = () => { 
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <nav id='navbar' className={`navbar ${theme === 'light' ? 'navbar-light' : ''}`}>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={toggleMenu}
        >
          <span className={`navbar-toggler-icon ${menuOpen ? 'open' : ''}`}></span>
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link
                activeClass="active"
                className={`nav-link ${theme === 'light' ? 'nav-link-light' : ''}`}  // <-- Here
                to="landing"
                spy={true}
                smooth={true}
                offset={-50}  
                duration={500}
                onSetActive={() => setLandingActive(true)}
                onSetInactive={() => setLandingActive(false)}> 
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={`nav-link ${theme === 'light' ? 'nav-link-light' : ''}`} to='about' spy={true} smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={`nav-link ${theme === 'light' ? 'nav-link-light' : ''}`} to='projects' spy={true} smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={`nav-link ${theme === 'light' ? 'nav-link-light' : ''}`} to='resume' spy={true} smooth={true} duration={500}>
              Resume
            </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={`nav-link ${theme === 'light' ? 'nav-link-light' : ''}`} to='contact' spy={true} smooth={true} duration={500}>
              Contact
            </Link>
            </li>
            <li className='nav-item'>
              <div className="theme-switch-wrapper">
                <div className="theme-switch-container">
                  <BsMoonStars className={theme === 'light' ? 'moon-icon light-mode' : 'moon-icon dark-mode'} style={{ color: theme === 'dark' ? null : 'white' }} />
                  <label className="theme-switch">
                    <input 
                      type="checkbox"
                      checked={theme === 'light'}
                      onChange={toggleTheme}
                    />
                    <div className="slider round"></div>
                  </label>
                  <BsSun className={theme === 'light' ? 'sun-icon light-mode' : 'sun-icon dark-mode'} style={{ color: theme === 'dark' ? 'black' : null }}/>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
