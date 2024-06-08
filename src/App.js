import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage'
import ProjectHomePage from './pages/ProjectHomePage'
import ContactPage from './pages/ContactPage'


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Projects" element={<ProjectHomePage />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;