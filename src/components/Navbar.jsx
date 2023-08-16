import '../assets/styles/style.css';
import { Link } from 'react-scroll';

export default function Navbar() {
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
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link
                className='nav-link' to='landing' smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link' to='about' smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link' to='projects' smooth={true} duration={500}>
                Projects
              </Link>
            </li>
           <li className='nav-item'>
              <Link
                className='nav-link' to='resume' smooth={true} duration={500}>
              Resume
            </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link' to='contact' smooth={true} duration={500}>
              Contact
            </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
