import React from 'react';
import NavBar from './components/nav/NavBar';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <About />
      <Experience />
      <Projects />
      <Contact/>
      <Footer />
    </>
  );
}

export default App;