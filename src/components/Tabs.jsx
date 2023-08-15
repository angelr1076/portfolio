import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import jsProjects from '../data/javascriptProjects';
import pyProjects  from '../data/pythonProjects';
import ProjectCard from "./ProjectCard";

export default function TabComponent() {
  return (
    <div className="App">
      <Tabs>
        <TabList>
          <Tab>JavaScript</Tab>
          <Tab>Python</Tab>
        </TabList>
        <TabPanel>
          {jsProjects.map(project => (
        <ProjectCard
          key={project.id}
          {...project}
        />
      ))}
        </TabPanel>
        <TabPanel>
          {pyProjects.map(project => (
        <ProjectCard
          key={project.id}
          {...project}
        />
      ))}
        </TabPanel>
      </Tabs>
    </div>
  );
}
