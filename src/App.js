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


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { navBarShrink: "" };
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

  render() {
    const nbs = this.state ? this.state.navBarShrink : "";
    return (
      <Provider store={store}>
        <Fragment>
          <Navigation navBarShrink={nbs} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/personagens" component={PersonagensHome} />
            <Route path="/planetas" component={PlanetasHome} />
            <Route path="/espaconaves" component={EspaconavesHome} />
          </Switch>
          <Footer></Footer>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
