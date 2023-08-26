import './assets/styles/style.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
      <main className='main'>
        <Navbar />
        <Landing />
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </main>
  );
}

export default App;
