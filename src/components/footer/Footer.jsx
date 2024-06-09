import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
        <a href="#" className='footer__logo' onClick={scrollToTop}>JAEDH RAMEEZDEEN</a>
        {/* <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#myprojects">My Projects</a></li>
        </ul> */}

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/jaedh-rameezdeen-568bbb217/"><BsLinkedin/></a>
          <a href="https://github.com/Jaedh"><BsGithub/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Jaedh Rameezdeen. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer