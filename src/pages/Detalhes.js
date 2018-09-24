import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import ActionCreators from "../redux/actionCreators";
import './styles.css'
import About from "../components/About/About";

class Detalhes extends Component {
  constructor (props) {
    super(props)
    this.state = {
      details : {}
    }
  }
  
  componentDidMount(){
    console.log(this.props.details)
  }
  render () {
    const {details} = this.props
    return (
      <Fragment>
        <About title={details.name}></About>
        <div className="container details">
          <div className="row">
            <div className="col-md-12">
              <ul className="list-group">
                <li className="list-group-item"><strong>Nome:</strong> {details.name}</li>
                <li className="list-group-item"><strong>Altura:</strong> {details.height}</li>
                <li className="list-group-item"><strong>Ano de Nascimento:</strong> {details.birth_year}</li>
                <li className="list-group-item"><strong>Planeta:</strong> {details.homeworld}</li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>  

    )
  }
}


const mapStateToProps = state => {
  return {
    details: state.details.data
  };
};

const mapDispatchToProps = dispatch => {
  return { loadData: () => dispatch(ActionCreators.loadDetailsRequest()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detalhes);