import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/mindaugas-pa%C5%A1kevi%C4%8Dius-4a0b6b153/' target="_blank"><BsLinkedin /></a>
      <a href='https://github.com/MindaugasPaskevicius' target="_blank"><BsGithub /></a>
      <a href='https://www.facebook.com/mindaugas.paskevicius.54/' target="_blank"> <BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials
