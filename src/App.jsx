import React from 'react'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import About from './components/about/About'
import Technologies from './components/technologies/Technologies'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Technologies />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App