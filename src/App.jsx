import React from 'react'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import About from './components/about/About'
import Technologies from './components/technologies/Technologies'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Rodape from './components/rodape/Rodape'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Technologies />
      <Portfolio />
      <Contact />
      <Rodape />
      <Footer />
    </div>
  )
}

export default App