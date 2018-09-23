import React from 'react'
import './styles.css'

const About = (props) => {
  return (
    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">{props.title}</h2>
            <p className="text-white">{props.subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About