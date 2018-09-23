import React, {Component} from 'react'
import './styles.css'
import Logo from './../../assets/logo_top.png'
import {Link} from 'react-router-dom'

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = { mnuShow: false };
    this.closeMnu = this.closeMnu.bind(this);
  }


  toggleShow() {
    this.setState({ mnuShow: !this.state.mnuShow });
  }

  closeMnu() {
    if (this.state.mnuShow) {
      this.setState({ mnuShow: false });
    }
  }

  render(){
    const show = this.state.mnuShow ? "show" : "";
    return <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${this.props.navBarShrink}`} id="mainNav">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Logo Star Wars"/>
          </Link>
          <button onClick={this.toggleShow.bind(this)} className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-bars" />
          </button>
          <div className={`collapse navbar-collapse ${show}`} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
              <Link className="nav-link" to="/personagens">Personagens</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/planetas">Planetas</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/espaconaves">Espaçonaves</Link>
              </li>
              <li className="nav-item">
              <Link to="/" className="nav-link btn btn-primary btn-register">
                  Entrar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>;
  }
}

export default Navigation