import React from 'react'
import './about.css'
import AndreFontenele from "../../assets/andrefontenele.jpg" 

const About = () => {
  return (
    <div>

     <div className="about-container">
      <div className="about-title">
        <h1>Sobre mim</h1>
      </div>
      <div className="about-img">
      <img src={AndreFontenele}></img>
      </div>
      
      <div className="about-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis laborum quia dignissimos iste beatae ducimus amet unde debitis impedit temporibus fugiat ipsum voluptatum totam, harum sint tenetur sed id.
      </div>

     </div>

    </div>
  )
}

export default About