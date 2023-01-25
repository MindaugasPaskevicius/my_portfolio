import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>MINDAUGAS</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        {/* <li><a href='#service'>Service</a></li> */}
        <li><a href='#portfolio'>Projects</a></li>
        {/* <li><a href='#testimonials'>Testimonials</a></li> */}
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/mindaugas.paskevicius.54'><BsFacebook /></a>
        <a href='https://www.linkedin.com/in/mindaugas-pa%C5%A1kevi%C4%8Dius-4a0b6b153/'><BsLinkedin /></a>
        <a href='https://github.com/MindaugasPaskevicius'><BsGithub /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Kaunas 2023</small>
      </div>
    </footer>
  )
}

export default Footer
