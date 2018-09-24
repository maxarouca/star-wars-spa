import React, { Component, Fragment } from 'react'
import About from "../../components/About/About";
import { connect } from "react-redux";
import ActionCreators from "../../redux/actionCreators";
import '../styles.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Loader from '../../components/Loader/Loader'

class Espaconaves extends Component {
  componentDidMount() {
    if (this.props.starships === undefined) {
      this.props.loadStarships();
    }
  }

  loadDetails(url) {
    axios.get(url).then(res => this.props.loadDetailsSuccess(res.data));
  }

  render() {
    const { starships } = this.props;
    if (starships !== undefined) {
      console.log(starships);
      return (
        <Fragment>
          <About
            title="Espaconaves"
            subtitle="Aqui você encontrará detalhes sobre todos os Espaconaves de Star Wars"
          />
          <div className="container">
            <div className="row">
              {starships.map(p => (
                <div className="col-md-3 card-wrapper" key={p.name}>
                  <div className="card">
                    {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <div className="card-text">
                        <p>Sexo: {p.gender}</p>
                      </div>
                      <Link
                        to={`/espaconaves/${p.name}`}
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
        </Fragment>
      );
    }
    return <Loader />;
  }
}


const mapStateToProps = state => {
  return {
    starships: state.starships.data.results
  };
};

const mapDispatchToProps = dispatch => {
  return { 
    loadStarships: () => dispatch(ActionCreators.loadStarshipsRequest()),
    loadDetailsSuccess: (data) => dispatch(ActionCreators.loadDetailsSuccess(data))
  
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Espaconaves);