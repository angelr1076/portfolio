// import React from 'react';
import './assets/styles/style.css'
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';



function App() {
  return (
    <>
      <main className="main">
        <Navbar />
        <Landing />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </>
  )
}

export default App;
