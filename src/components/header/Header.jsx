import React from 'react'
import './header.css'
import { GoMarkGithub } from 'react-icons/go'
import { FaLinkedin } from "react-icons/fa";
import AndreFontenele from "../../assets/andrefontenele.jpg" 

const Header = () => {
  return (
    <div>

      <div className="header-container">

        <div className="header-social">
          <a href="https://www.linkedin.com/in/andreluizfontenele/" target="blank" className="social-linkedin" rel="noreferrer"> <GoMarkGithub /> </a>
          <a href="https://github.com/andredfontenele" target="blank" className="social-github" rel="noreferrer"> <FaLinkedin /> </a>
        </div>

        <div className="header-text">
          <h2>Bem-vindo(a)!</h2>
          <h1>Meu nome é André Fontenele</h1>
          <h2><span className="header-subtitle">Desenvolvedor Front-End</span></h2>
          <div className="contact-button">
            Fale comigo 
          </div>

        </div>
        <div className="header-img">
          <img src={AndreFontenele}></img>
        </div>
  
      </div>

    </div>
  )
}

export default Header