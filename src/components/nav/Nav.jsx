import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <div>
      <header className="header" id="header">
        <nav className="nav-container">
          <a href="#" className="nav-logo">André Fontenele</a>
          <ul className='nav-list'>
            <li><a href='/'><span className="nav-list-option">Início</span></a></li>
            <li><a href='/'><span className="nav-list-option">Sobre</span></a></li>
            <li><a href='/'><span className="nav-list-option">Tecnologias</span></a></li>
            <li><a href='/'><span className="nav-list-option">Portfólio</span></a></li>
            <li><a href='/'><span className="nav-list-option">Contato</span></a></li>
          </ul>
        </nav>
      </header>
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