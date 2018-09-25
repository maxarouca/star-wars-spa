import React, { Component, Fragment} from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux"; 
import "font-awesome/css/font-awesome.css";
import { Route, Switch } from "react-router-dom";

import Navigation from './components/Navigation/Navigation'
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import PersonagensHome from "./pages/personagens/PersonagensHome";
import PlanetasHome from "./pages/planetas/PlanetasHome";
import EspaconavesHome from "./pages/espaconaves/EspaconavesHome";
import Login from './pages/Login/Login'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { navBarShrink: "", isAuth: false };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const domNode = ReactDOM.findDOMNode(this.navEl);
    const nbs = window.pageYOffset > 100 ? "navbar-shrink" : "";
    this.setState({ navBarShrink: nbs });
  }
  
  login = async (email, passwd) => {
    const {auth} = this.props
    try{
    await auth.signInWithEmailAndPassword(email, passwd)
    console.log('logar', email, passwd)
    this.setState({ ...this.state, isAuth: true}) 
    }
    catch(err){
      console.log(err)
    }
  }

  render() {
    const nbs = this.state ? this.state.navBarShrink : "";
    return <Provider store={store}>
        <Fragment>
          <Navigation auth={this.state.isAuth} navBarShrink={nbs} />
          <Switch>
            <Route exact path="/" render={props => <Home {...props} auth={this.state.isAuth} />} />
            <Route path="/personagens" component={PersonagensHome} />
            <Route path="/planetas" component={PlanetasHome} />
            <Route path="/espaconaves" component={EspaconavesHome} />
            <Route path="/login" render={props => <Login {...props} login={this.login} auth={this.state.isAuth}/>} />
          </Switch>
          <Footer />
        </Fragment>
      </Provider>;
  }
}

export default App;
