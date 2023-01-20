import React from 'react'
import './header.css'
import { GoMarkGithub } from 'react-icons/go'
import { FaLinkedin } from "react-icons/fa";
import AndreFontenele from "../../assets/andrefontenele.jpg" 

const Header = () => {
  return (
    <div>
      
      <section id="header">
      <div className="header-container">

        <div className="header-social">
          <a href="https://www.linkedin.com/in/andreluizfontenele/" target="blank" className="social-linkedin" rel="noreferrer">  <FaLinkedin /> </a>
          <a href="https://github.com/andredfontenele" target="blank" className="social-github" rel="noreferrer"><GoMarkGithub /> </a>
        </div>

        <div className="header-text">
          <h1><span id="title">Bem-vindo(a)!</span></h1>
          <br />
          <h1>Meu nome é André Fontenele</h1>
          <h2><span className="header-subtitle">Desenvolvedor Front-End</span></h2>
          
          <a href="#contact"><div className="contact-button">
            Fale comigo
          </div>
          </a>

        </div>
        <div className="header-img">
          <img src={AndreFontenele}></img>
        </div>
  
      </div>
      </section>
    </div>
  )
}

export default Header