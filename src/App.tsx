import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';

import Hero from './components/Hero';
import './index.css'
function App() {
  return (
    <div className="min-h-screen bg-white">
      
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
  
      <Contact/>
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Sarah Anderson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;