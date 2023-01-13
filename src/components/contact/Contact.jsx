import React from 'react'
import './contact.css'
import { TiMessages } from 'react-icons/ti'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
  return (
    <div>
    <div className="title-container">
     <h1>Contato <TiMessages /> </h1>
    </div>

    <div className="form-container">

      <div className="form-contact">
        <h2><BsFillTelephoneFill /> Número para contato:</h2>
        <h3>(85) 99282-3062</h3>
        <br />
        <h2><AiOutlineMail/> E-mail:</h2>
        <h3>andrefonteneledev@gmail.com</h3>
      </div>

      <div className="form-group">
    <form action="https://formsubmit.co/andrefonteneledev@gmail.com" method="POST">

      
      <h1>Nome</h1>
      <div className="grid-container">
      <input type="text" name="name" placeholder="Digite seu nome" id="name" required>
      </input>
      </div>
      
      
      <h1>E-mail</h1>
      <div className='grid-container'>
      <input type="email" name="email" placeholder="Digite seu e-mail" id="email" required>
      </input>
      </div>

      
      <h1>Deixe uma mensagem.</h1>
      <div className='grid-container'>
      <textarea name="message" placeholder="Digite sua mensagem" id="message"></textarea>
      <input type="hidden" name="_captcha" value="false"></input>
      </div>

      <div className="grid-container">
      <input 
      type="hidden" 
      name="_next" 
      value="https://portfolio-andredfontenele.vercel.app/"></input>
      <button type="submit">Enviar</button>
      </div>
    </form>

    </div>
    </div>
    </div>
  )
}

export default Contact