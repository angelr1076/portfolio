import './assets/styles/style.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
      <main className='main'>
        <Navbar />
        <Landing />
        <hr />
        <About />
        <hr />
        <Projects />
        <hr />
        <Resume />
        <hr />
        <Contact />
      </main>
  );
}

export default App;
