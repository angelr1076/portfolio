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
            Driven by a childhood curiosity to understand how things work, I’ve
            always been passionate about deconstructing and reassembling the
            world around me.
          </p>

          <p>
            In my current role, I led an attachment storage migration from one
            platform to another, helping the company avoid a near six-figure
            increase in infrastructure costs. I also built mapping tools to
            streamline logistics operations and developed internal applications
            that significantly reduced support overhead. I focus on designing
            systems that are intuitive, dependable, and allow people to focus on
            their work, not get bogged down by broken processes.
          </p>

          <p>
            I’m committed to sharpening my skills, staying curious, and
            continuing to grow as a lifelong learner and developer who builds
            tools that make a difference.
          </p>
        </div>
      </div>
    </section>
  );
}
