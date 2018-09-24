import React, { Component, Fragment } from 'react'
import About from "../components/About/About";
import { connect } from "react-redux";
import ActionCreators from "../redux/actionCreators";
import './styles.css'

class Planetas extends Component {
  componentDidMount() {
    this.props.loadData()
  }
  render() {
    const { planets } = this.props
    if (planets !== undefined) {
      return <Fragment>
        <About title="Planetas" subtitle="Aqui você encontrará detalhes sobre todos os Planetas de Star Wars" />
        <div className="container">
          <div className="row">
            {planets.map(p => (
              <div className="col-md-3 card-wrapper" key={p.name}>
                <div className="card">
                  {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <div className="card-text">
                      <p>Sexo: {p.gender}</p>
                    </div>
                    <a href="#" className="btn btn-primary btn-block">
                      Detalhes
                      </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fragment>;
    }
    return <h1>Carregando</h1>
  }
}


const mapStateToProps = state => {
  return {
    planets: state.planets.data.results
  };
};

const mapDispatchToProps = dispatch => {
  return { loadData: () => dispatch(ActionCreators.loadPlanetsRequest()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Planetas);