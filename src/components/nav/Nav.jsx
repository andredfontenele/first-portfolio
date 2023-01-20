import React from 'react'
import './nav.css'
import About from '../about/About'

const Nav = () => {
  return (
    <div>
      <section id="home">

        <nav className="nav-container">
          <a href="#home" className="nav-logo">André Fontenele</a>
          <ul className='nav-list'>
            <li><a href="#home"><span className="nav-list-option">Início</span></a></li>
            <li><a href="#about"><span className="nav-list-option">Sobre</span></a></li>
            <li><a href="#technologies"><span className="nav-list-option">Tecnologias</span></a></li>
            <li><a href="#portfolio"><span className="nav-list-option">Projetos</span></a></li>
            <li><a href="#contact"><span className="nav-list-option">Contato</span></a></li>
          </ul>
        </nav>
      </section>
      {/* <ul>
        <li>Início</li>
        <li>Sobre</li>
        <li>Tecnologias</li>
        <li>Portfólio</li>
        <li>Contato</li>
      </ul> */}
    </div>
  )
}

export default Nav