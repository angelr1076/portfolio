import img from '../assets/images/bitmojime.png';
import { useTheme } from './ThemeContext';

export default function About() {
  const { theme } = useTheme();

  return (
    <section className='about'>
      <h2 className={`page-header page-header-${theme}`}>About Me</h2>
      <div>
        <div className='bio-img'>
          <img src={img} />
        </div>
        <div className='bio-desc'>
          <p>
            Driven by a childhood curiosity to understand how things work, I've
            always been passionate about deconstructing and reassembling the
            world around me.
          </p>

          <p>
            At Ethos Therapy Solutions, I designed and led a SharePoint
            migration that saved over $90,000, built mapping systems to improve
            logistics, and developed internal apps that reduced support
            overhead. I focus on designing systems that are clear, reliable, and
            built to serve real-world needs.
          </p>

          <p>
            Today, I build solutions that help people focus on meaningful work,
            not get bogged down by broken processes. I’m committed to sharpening
            my skills, learning faster, and developing products that make a real
            difference.
          </p>
        </div>
      </div>
    </section>
  );
}
