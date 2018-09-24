import React, { Component, Fragment } from 'react'
import About from "../../components/About/About";
import { connect } from "react-redux";
import ActionCreators from "../../redux/actionCreators";
import '../styles.css'
import { Link} from 'react-router-dom'
import axios from 'axios'

class Personagens extends Component {
  constructor (props) {
    super(props)
    this.loadDetails = this.loadDetails.bind(this)
  }
  
  componentDidMount(){
    if(this.props.people === undefined){
      this.props.loadPersonagens();
    }
  }

  loadDetails(url){
    axios.get(url).then(res => this.props.loadDetailsSuccess(res.data));
  }

  render() {
    const {people} = this.props
    if(people !== undefined){
    return <Fragment>
        <About title="Personagens" subtitle="Aqui você encontrará detalhes sobre todos os personagens de Star Wars" />
        <div className="container">
          <div className="row">
            {people.map(p => (
              <div className="col-md-3 card-wrapper" key={p.name}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <div className="card-text">
                      <p>Sexo: {p.gender}</p>
                    </div>
                    <Link
                      to={`/personagens/${p.name}`}
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
    return <h1>Carregando</h1>
  }
}


const mapStateToProps = state => {
  return {
    people: state.people.data.results
  };
};

const mapDispatchToProps = dispatch => {
  return { 
    loadPersonagens: () => dispatch(ActionCreators.loadPeoplesRequest()),
    loadDetailsSuccess: (data) => dispatch(ActionCreators.loadDetailsSuccess(data))
   };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Personagens);