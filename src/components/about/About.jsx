import React from 'react'
import './about.css'
import AndreFontenele from "../../assets/andrefontenele.jpg" 
import AndreFonteneleCurriculo from "../../assets/pdf/AndreFonteneleCurriculo.pdf"

const About = () => {

  return (
    <div>

      <div className="about-title">
        <h1>Sobre mim</h1>
      </div>

     <div className="about-container">

      <div className="about-img">
      <img src={AndreFontenele}></img>
      </div>

      <div className="container-text-button">
      <div className="about-text">
        Já fui estudante de Agronomia, na Universidade Federal do Ceará (UFC), mas descobri minha paixão pela tecnologia e, mais especificamente, pela programação.
      <br></br>
        Sou estudante do 3° semestre de Análise e Desenvolvimento de Sistemas, pela Unifametro. Atualmente estou interessado em desenvolvimento web e estudo tecnologias Front-end, como HTML5, CSS3, JavaScript e React. Para complementar um futuro Full Stack, aprendo sobre SQL e Node.JS.
    <br></br>
        Para expandir meus horizontes profissionais, concluí meu curso de inglês britânico na Casa de Cultura, sediada na UFC.
    <br></br>
        Sou curioso, proativo e sempre disposto a aprender mais na profissão.
      </div>
      <div className="about-button">
       <a href= {AndreFonteneleCurriculo} target="_blank" rel="noreferrer" className="visualizar-button">Visualizar Currículo</a> <br />
       <a download="AndreFonteneleCurriculo.pdf" href= {AndreFonteneleCurriculo} className="baixar-button">Baixar Currículo</a>
       <br />
        
      </div>
      </div>
      
      </div>

      
     </div>
  )
}

export default About