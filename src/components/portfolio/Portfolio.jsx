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

    <div className="flex-container">
      <div className="card-container">
          <div className="card">
            <a href="https://buscador-cep-drab.vercel.app/">
          <img src={buscadorcep}></img>
          </a>
          <div className="card-description">
          <span className="description-span">
          Website desenvolvido para a realização de buscas de endereços em território brasileiro, com integração 
de uma API, utilizando o Axios.
            </span>
          </div>
          </div>

          <div className="card">
            <a href="https://andredfontenele.github.io/agencia_fake/">
          <img src={agenciafake}></img>
          </a>
          <div className="card-description">
          <span className="description-span">
          Projeto desenvolvido com HTML e CSS puros. Teve como objetivo central a criação de um website de 
uma agência fictícia, atuando como uma forma de divulgação para futuros interessados no serviço.
            </span>
          </div>
          </div>

          <div className="card">
            <a href="https://andredfontenele.github.io/landingpage/">
          <img src={landingpage}></img>
          </a>
          <div className="card-description">
          <span className="description-span">
          Página de captura, feita totalmente em HTML5 e CSS3.
            </span>
          </div>
          </div>

          <div className="card">
            <a href="https://andredfontenele.github.io/lista-de-tarefas/">
          <img src={listadetarefas}></img>
          </a>
          <div className="card-description">
          <span className="description-span">
          Projeto desenvolvido com o intuito de praticar chamadas de funções em JavaScript.
            </span>
          </div>
          </div>
          
          <div className="card">
            <a href="https://andredfontenele.github.io/churrascometro/">
          <img src={churrascometro}></img>
          </a>
          <div className="card-description">
          <span className="description-span">
          Projeto desenvolvido com o intuito de praticar chamadas de funções no JavaScript.
            </span>
          </div>
          </div>

          <div className="card">
            <a href="https://andredfontenele.github.io/Qual-a-refeicao/">
          <img src={refeicao}></img>
          </a>
          <div className="card-description">
          <span className="description-span">
          Projeto desenvolvido para a realização do primeiro exercício do curso de JavaScript do Curso em Vídeo, utilizando o básico de HTML, CSS e JavaScript.
            </span>
          </div>
          </div>
          </div>
          </div>

          </section>

      </div>
  )
}

export default Portfolio