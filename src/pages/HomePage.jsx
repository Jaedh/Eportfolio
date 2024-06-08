import React from 'react';
import About from '../components/about/About';
import Experience from '../components/experience/Experience';
import Header from '../components/header/Header';

import './HomePage.css';

const HomePage = () => {
    return (
        <>
        <Header />
        <About />
        <Experience />
      </>
    )
  }
  
  export default HomePage