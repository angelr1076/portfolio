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
            Application Developer with 6+ years of experience building
            data-driven internal tools, mapping systems, and workflow automation
            that drive operational efficiency and strategic decision-making.
            Proven track record of:
          </p>
          <ul>
            <li>
              Reducing costs by automating business processes, such as saving
              $90K in file storage upgrades through streamlined attachment
              migrations.
            </li>
            <li>
              Enabling nationwide strategic sales targeting with interactive
              mapping platforms integrating HereMaps APIs and JavaScript.
            </li>
            <li>
              Improving workflows for 90% of employees by developing real-time
              distance calculation tools with Google Maps APIs, optimizing
              logistical planning.
            </li>
            <li>
              Enhancing client data management and clinical workflows with API
              integrations.
            </li>
          </ul>
          <p>
            Skilled at partnering with cross-functional teams to build scalable,
            maintainable, and impactful applications. Adept in React,
            JavaScript, and API development with a strong focus on performance,
            accessibility, and user-centered design.
          </p>
        </div>
      </div>
    </section>
  );
}
