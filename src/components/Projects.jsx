import TabComponent from './Tabs';
import { useTheme } from './ThemeContext';

export default function Projects() {
  const { theme } = useTheme();

  return (
    <section id='projects' className='projects'>
      <h2 className={`page-header page-header-${theme}`}>Projects</h2>
      <TabComponent />
    </section>
  );
}
