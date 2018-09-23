import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo_top.png'
import BG from '../assets/header_bg.png'

const HeaderComp = styled.header`
  background-image: url(${BG});
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  font-family: "Roboto", sans-serif;
  .col-md-12{
    height: 90vh;
  }
  .tagline {
    display: flex;
    justify-content: center;
    color: white;
    font-style: italic;
    height: 100%;
    flex-direction: column
    h2{
      font-size: 60px
    }
  }
`;
const Nav = styled.nav`
  box-sizing: border-box;
  height: 100px;
  padding: 10px;
  ul {
    text-align: right;
    li{
      display: inline-block;
      list-style: none;
      padding: 10px 30px;
      font-size: 16px;
      text-transform: uppercase;
      transition: all 0.2 ease-out
    }
    .link {
      color: #fff;
      &:hover{
        color: yellow;
        cursor: pointer;
      }
    }
    .register {
      display: inline-block;
      border-radius: 10px;
      background-color: yellow;
      text-align: center;
      color: black;
      font-weight: bold;
    }
  }
`;

const Header = () => {
  return <HeaderComp>
      <div className="container">
        <Nav className="row">
          <div className="col-md-3">
            <img className="logo" src={Logo} alt="Logo Star Wars" />
          </div>
          <div className="col-md-9">
            <ul>
              <li className="link">Personagens</li>
              <li className="link">Planetas</li>
              <li className="link">Espaçonaves</li>
              <li className="register">Entrar</li>
            </ul>
          </div>
        </Nav>
        <div className="row">
          <div className="col-md-12">
            <div className="tagline">
              <h2>
                “Do. Or do not. <br /> There is no try."
              </h2>
              <h3>Yoda</h3>
          </div>
          </div>
        </div>
      </div>
    </HeaderComp>;
}

export default Header