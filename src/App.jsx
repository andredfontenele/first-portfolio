import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import About from './components/about/About'
import Technologies from './components/technologies/Technologies'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Technologies />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App