import { useState } from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeContext';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <ThemeProvider>
      <Navbar />
      <main className='main'>
        <Landing />
        <About />
        <Resume />
        <Projects />
        <ScrollToTop />
      </main>
      <Contact showModal={showModal} setShowModal={setShowModal} />
      <Footer setShowModal={setShowModal} />
    </ThemeProvider>
  );
}

export default App;
