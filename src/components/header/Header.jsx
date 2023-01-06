import React from 'react'
import './header.css'
import { GoMarkGithub } from 'react-icons/go'
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <div className="social">
          <a href="https://www.linkedin.com/in/andreluizfontenele/" target="blank" className="social-linkedin"> <GoMarkGithub /> </a>
          <a href="https://github.com/andredfontenele" target="blank" className="social-github"> <FaLinkedin /> </a>
        </div>
        <div className="header-text">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad id expedita reprehenderit possimus saepe, dolores in beatae dolorum inventore! Laboriosam at eaque dolores in quia distinctio libero amet necessitatibus est?
        </div>
        <div className="header-img">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore autem est ex sunt eius dolore neque. Obcaecati officiis culpa et animi voluptatem, deleniti ad consectetur reiciendis harum enim, laboriosam odit.
        </div>
      </div>
    </div>
  )
}

export default Header