import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'

import HomePage from './pages/HomePage'
import ProjectHomePage from './pages/ProjectHomePage'
import ContactPage from './pages/ContactPage'
import ExperiencePage from './pages/ExperiencePage'


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/Eportfolio" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Experience" element={<ExperiencePage />} />
          <Route path="/Projects" element={<ProjectHomePage />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;