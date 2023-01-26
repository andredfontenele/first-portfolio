import React from 'react'
import './portfolio.css'
import agenciafake from "../../assets/agenciafake.png"
import buscadorcep from "../../assets/buscadorcep.png"
import churrascometro from "../../assets/churrascometro.png"
import landingpage from "../../assets/landingpage.png"
import listadetarefas from "../../assets/listadetarefas.png"
import refeicao from "../../assets/refeicao.png"

const Portfolio = () => {


  return (
    <div>
      <section id="portfolio">

      <div className="title-container">
        <h1>Projetos</h1>
      </div>

        
        <div className="container">
          
        <div className="card">
          <div className="card-img">
          <img src={buscadorcep}></img>  
          </div>
          <div className="content">
            <h2>Buscador de CEP</h2>
            <h3>(HTML, CSS, React, Axios )</h3>
            <p> Website desenvolvido para a realização de buscas de endereços em território brasileiro, com integração de uma API, utilizando o Axios.</p>
            <br />
            <a href="https://buscador-cep-drab.vercel.app/" target="blank" rel="noreferrer"><span id="content-link">VER PROJETO</span></a>
            </div>
        </div>


        <div className="card">
          <div className="card-img">
          <img src={agenciafake}></img>  
          </div>
          <div className="content">
            <h2>Agência Fake</h2>
            <h3>(HTML, CSS)</h3>
            <p> Criação de um website de uma agência fictícia, atuando como uma forma de divulgação para futuros interessados no serviço.</p>
            <br />
            <a href="https://andredfontenele.github.io/agencia_fake/" target="blank" rel="noreferrer"><span id="content-link">VER PROJETO</span></a>
            </div>
        </div>


        <div className="card">
          <div className="card-img">
          <img src={landingpage}></img>  
          </div>
          <div className="content">
            <h2>Landing Page</h2>
            <h3>(HTML, CSS)</h3>
            <p>Página de captura, feita totalmente em HTML5 e CSS3.</p>
            <br />
            <a href="https://andredfontenele.github.io/landingpage/" target="blank" rel="noreferrer"><span id="content-link">VER PROJETO</span></a>
            </div>
        </div>


        <div className="card">
          <div className="card-img">
          <img src={churrascometro}></img>  
          </div>
          <div className="content">
            <h2>Churrascômetro</h2>
            <h3>(HTML, CSS, JavaScript)</h3>
            <p>Projeto desenvolvido com o intuito de praticar chamadas de funções no JavaScript.</p>
            <br />
            <a href="https://andredfontenele.github.io/churrascometro/" target="blank" rel="noreferrer"><span id="content-link">VER PROJETO</span></a>
            </div>
        </div>


        <div className="card">
          <div className="card-img">
          <img src={listadetarefas}></img>  
          </div>
          <div className="content">
            <h2>Lista de Tarefas</h2>
            <h3>(HTML, CSS, JavaScript )</h3>
            <p>Projeto desenvolvido com o intuito de praticar chamadas de funções em JavaScript.</p>
            <br />
            <a href="https://andredfontenele.github.io/lista-de-tarefas/" target="blank" rel="noreferrer"><span id="content-link">VER PROJETO</span></a>
            </div>
        </div>


        <div className="card">
          <div className="card-img">
          <img src={refeicao}></img>  
          </div>
          <div className="content">
            <h2>Qual a Refeição?</h2>
            <h3>(HTML, CSS, JavaScript)</h3>
            <p>
Projeto do curso de JavaScript do Curso em Vídeo, utilizando o básico de HTML, CSS e JavaScript.</p>
            <br />
            <a href="https://andredfontenele.github.io/Qual-a-refeicao/" target="blank" rel="noreferrer"><span id="content-link">VER PROJETO</span></a>
            </div>
        </div>
        
        </div>
      </section>
      </div>
  )
}

export default Portfolio