import React from 'react'
import './technologies.css'

const Technologies = () => {
  return (
    <div>

    <div className="title-container">
      <h1> Tecnologias </h1>
    </div>

       <div className="technologies-container">

        <div className="front-container">
          <h1>Front-End</h1>
          <div className="front-technologies">
            <div className="technology">
              <h2>HTML</h2>
              <small>Avançado</small>
            </div>
            <div className="technology">
              <h2>CSS</h2>
              <small>Intermediário</small>
            </div>
            <div className="technology">
              <h2>Tailwind</h2>
              <small>Básico</small>
            </div>
            <div className="technology">
              <h2>JavaScript</h2>
              <small>Intermediário</small>
            </div>
            <div className="technology">
              <h2>React</h2>
              <small>Básico</small>
            </div>
          </div>
        </div>

        <div className="front-container"> 
        <h1>Back-End</h1>
          <div className="front-technologies">
            <div className="technology">
              <h2>Node JS</h2>
              <small>Básico</small>
            </div>
            <div className="technology">
              <h2>SQL</h2>
              <small>Básico</small>
            </div>
            <div className="technology">
              <h2>Axios</h2>
              <small>Básico</small>
            </div>
          </div>
        </div>

        <div className="front-container"> 
        <h1>Ferramentas</h1>
          <div className="front-technologies">
            <div className="technology">
              <h2>Git</h2>
              <small>Intermediário</small>
            </div>
            <div className="technology">
              <h2>GitHub</h2>
              <small>Intermediário</small>
            </div>
            <div className="technology">
              <h2>Figma</h2>
              <small>Intermediário</small>
            </div>
          </div>
        </div>
    </div> 
    </div>
  )
}

export default Technologies