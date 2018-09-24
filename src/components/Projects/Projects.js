import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'
import personagens from "../../assets/personagens.jpg";
import planets from "../../assets/planets.jpg";
import starships from "../../assets/starships.jpg";

const Projects = () => {
  return <section id="projects" className="projects-section bg-light">
      <div className="container">

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={personagens} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <Link to="/personagens">
                  <h4 className="text-black-50">Personagens</h4>
                  </Link>
                  <p className="mb-0 text-white-50">
                    Obtenha detalhes de todos os personagens existentes nos
                  filmes da saga!
                  </p>
                  <hr className="d-none d-lg-block mb-0 right" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={planets} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <Link to="/planetas">
                    <h4 className="text-black-50">Planetas</h4>
                  </Link>
                  <p className="mb-0 text-white-50">
                    Saiba mais sobre os planetas de Star Wars.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={starships} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <Link to="/espaconaves">
                    <h4 className="text-black-50">Espaçonaves</h4>
                  </Link>
                  <p className="mb-0 text-white-50">
                    Conheça todas as espaçonaves da saga!
                  </p>
                  <hr className="d-none d-lg-block mb-0 right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}

export default Projects