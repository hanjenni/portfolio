import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Tech from './components/Tech/Tech';
import Footer from './components/Footer/Footer';




function App() {
  return (
  <>
    <Header />
    <About />
    <Tech />
    <Project />
    <Contact />
    <Footer />
  </>
  );
}

export default App;
