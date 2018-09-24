import React from 'react'
import './styles.css'


const Header = () => {
  return (
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">STAR WARS</h1>
          <h2 className="text-white mx-auto mt-2 mb-5">Entre e confira detalhes sobre o Universo Star Wars.</h2>
          <a href="#about" className="btn btn-primary ">Entrar</a>
        </div>
      </div>
    </header>
  )
}

export default Header