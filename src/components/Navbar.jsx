import { useState } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); 
  const [landingActive, setLandingActive] = useState(true);

  const toggleMenu = () => { 
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav id='navbar' className='navbar'>
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
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link
                activeClass="active"
                className={landingActive ? 'nav-link active' : 'nav-link'}
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
                className='nav-link' to='about' spy={true} smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link' to='projects' spy={true} smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link' to='resume' spy={true} smooth={true} duration={500}>
              Resume
            </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link' to='contact' spy={true} smooth={true} duration={500}>
              Contact
            </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
