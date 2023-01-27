import react from 'react';
import './experience.css'

const Experience = () => {
  return(
    <div>
        <section id="experience">

        <div className="title-container">
        <h1>Educação e Experiência</h1>
        </div>

        <div className="experience-container">
          

        <div className="education-container">
          <div className="education-title">
            <h2>Formação Acadêmica</h2>
          </div>
          <div className="education">
            <h3>Colégio Provecto</h3>
            <h4>Ensino Médio | <span>Jan, 2015 - Dez, 2017</span></h4>
            <br />
            <h3>Análise e Desenvolvimento de Sistemas</h3>
            <h4>Unifametro, Tecnólogo | <span>Fev, 2022 - Jun, 2024</span></h4>
            <p>Curso tecnólogo de Análise e Desenvolvimento de Sistemas, na Unifametro.</p>
          </div>
        </div>

        <div className="work-experience-container">
          <div className="education-title">
            <h2>Experiência Profissional</h2>
          </div>
          <div className="education">
            <h3>Atlântico Academy Bootcamp</h3>
            <h4>Instituto Atlântico | <span>Set, 2022 - Nov, 2022</span></h4>
            <p>Criação de um site de doação de órgãos, contemplando desde a parte do Front-End até o Back-End. Atuei no time de designers do site, trabalhando com o Figma.</p>
            <br />
          </div>
        </div>


        </div>
        

        </section>
    </div>
)
}

export default Experience