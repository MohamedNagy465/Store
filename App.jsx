import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from './Pages/Skiles/Skills';
import Portfolio from './Pages/Portfolio/portfolio.JSX';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';

export default function App() {
useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Navbar />
      <main className="">
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
