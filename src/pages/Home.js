import React, { Component, Fragment } from 'react'

import Header from "../components/Header/Header";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";

class Home extends Component {
  render () {
    return <Fragment>
        <Header />
        <About title="A Força" subtitle="Existe um negócio que não podemos enxergar. Um campo de energia presente em todas as coisas vivas. Esse algo abstrato e totalmente intangível nos cerca, nos penetra… Como se essa energia fosse uma grande rede, que une toda a galáxia. A esse campo invisível damos o singelo nome de força." />
        <Projects />
      </Fragment>;
  }
}

export default Home