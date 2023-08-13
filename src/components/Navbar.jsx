import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';


export default function Navbar() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
