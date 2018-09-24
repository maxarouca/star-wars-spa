import React, { Component, Fragment } from 'react'
import About from "../../components/About/About";
import { connect } from "react-redux";
import ActionCreators from "../../redux/actionCreators";
import '../styles.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Loader from "../../components/Loader/Loader";


class Planetas extends Component {
  componentDidMount() {
    if (this.props.planets === undefined) {
      this.props.loadPlanets();
    }
  }

  loadDetails(url) {
    axios.get(url).then(res => this.props.loadDetailsSuccess(res.data));
  }


  render() {
    const { planets } = this.props
    if (planets !== undefined) {
      console.log(planets)
      return <Fragment>
          <About title="Planetas" subtitle="Aqui você encontrará detalhes sobre todos os Planetas de Star Wars" />
          <div className="container">
            <div className="row">
              {planets.map(p => (
                <div className="col-md-3 card-wrapper" key={p.name}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <div className="card-text">
                        <p>Sexo: {p.gender}</p>
                      </div>
                      <Link
                        to={`/planetas/${p.name}`}
                        onClick={() => this.loadDetails(p.url)}
                        className="btn btn-primary btn-block"
                      >
                        Detalhes
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Fragment>;
    }
    return <Loader />;
  }
}


const mapStateToProps = state => {
  return {
    planets: state.planets.data.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadPlanets: () => dispatch(ActionCreators.loadPlanetsRequest()),
    loadDetailsSuccess: (data) => dispatch(ActionCreators.loadDetailsSuccess(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Planetas);