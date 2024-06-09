import React from 'react'
import './Header.css'
import CTA from './CTA'
import me from '../../assets/me_1.JPG'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (    
      <header id='home'>

        <div className="container header__container">

          <h5>Mechanical Engineering Portfolio</h5>
          <h1>Jaedh Rameezdeen</h1>
          <h5 className="text-light">Mechanical (Mechatronics) Engineering and Computer Science Student at the University of Adelaide</h5>
          <CTA/>
          <HeaderSocials/>

          <div className="me">

            <img src={me} alt='me'/>
          </div>

          <a href="#" className='scroll__down' onClick={scrollToBottom}>Scroll Down</a>
        </div>
      </header>

    
    
  )
}

export default Header