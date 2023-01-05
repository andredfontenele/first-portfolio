import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <div>
      <header className="header" id="header">
        <nav className="nav-container">
          <a href="#" className="nav-logo">André Fontenele</a>
          <ul className='nav-list'>
            <li><a href='/'>Início</a></li>
            <li><a href='/'>Sobre</a></li>
            <li><a href='/'>Tecnologias</a></li>
            <li><a href='/'>Portfólio</a></li>
            <li><a href='/'>Contato</a></li>
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