import React, { Component, Fragment } from 'react'

import Header from "../components/Header/Header";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";

class Home extends Component {
  render () {
    return <Fragment>
        <Header auth={this.props.auth}/>
        <About title="Que a força esteja com você!" subtitle="Existe um negócio que não podemos enxergar. Um campo de energia presente em todas as coisas vivas. Esse algo abstrato e totalmente intangível nos cerca, nos penetra… Como se essa energia fosse uma grande rede, que une toda a galáxia. A esse campo invisível damos o singelo nome de força." />
        {this.props.auth && <Projects />}
        
      </Fragment>
  }
}

export default Home