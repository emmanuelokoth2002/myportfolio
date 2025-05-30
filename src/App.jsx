import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('App component mounted');
    try {
      // Simulate checking if all resources are loaded
      Promise.all([
        document.fonts.ready, // Wait for fonts to load
        new Promise(resolve => setTimeout(resolve, 500)) // Minimum display time for loading state
      ]).then(() => {
        console.log('All resources loaded');
        setIsLoading(false);
      });
    } catch (error) {
      console.error('Error during app initialization:', error);
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;