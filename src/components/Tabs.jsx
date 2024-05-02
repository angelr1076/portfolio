import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../assets/styles/style.css';
import ProjectCard from './ProjectCard';
import projects from '../data/projectsList';

export default function TabComponent() {
  return (
    <div id='tabs' className='tabs'>
      <Tabs>
        <TabList>
          {projects.map(project => (
            <Tab key={project.id}>{project.title}</Tab>
          ))}
        </TabList>
        {projects.map(project => (
          <TabPanel className='tab-panel' key={project.id}>
            <ProjectCard key={project.id} {...project} />
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}
