import React, { Component, Fragment } from 'react';
import About from "../../components/About/About";
import './styles.css'
import { Redirect } from "react-router-dom";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      passwd: ''
     }
  }

  handleChange = field => event => {
    this.setState({
      [field]: event.target.value
    })
  }

  login = (event) => {
    event.preventDefault()
    this.props.login(this.state.email, this.state.passwd)
  }

  render() {
    if(this.props.auth){
      return <Redirect to="/" />
    }
    return <Fragment>
      <About title="Login" subtitle="Entre agora e confira detalhes sobre a saga Star Wars!" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" onChange={this.handleChange('email')}/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" placeholder="Password" onChange={this.handleChange('passwd')}/>
              </div>
              <button type="submit" onClick={this.login} className="btn btn-primary btn-block">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>;
  }
}
 
export default Login;