import React, { Fragment } from 'react'
import { connect } from "react-redux";
import ActionCreators from "../redux/actionCreators";
import './styles.css'
import About from "../components/About/About";

const Detalhes = props => {
  const {details} = props
  console.log(props)

  return <Fragment>
      <About title={details.name} />
      <div className="container details">
        <div className="row">
          <div className="col-md-12">
            {props.match.path === "/personagens/:name" && <ul className="list-group">
                <li className="list-group-item">
                  <strong>Nome:</strong> {details.name}
                </li>
                <li className="list-group-item">
                  <strong>Altura:</strong> {details.height}
                </li>
                <li className="list-group-item">
                  <strong>Ano de Nascimento:</strong> {details.birth_year}
                </li>
                <li className="list-group-item">
                  <strong>Planeta:</strong> {details.homeworld}
                </li>
              </ul>}
            {props.match.path === "/planetas/:name" && <ul className="list-group">
                <li className="list-group-item">
                  <strong>Nome:</strong> {details.name}
                </li>
                <li className="list-group-item">
                  <strong>Diametro:</strong> {details.diameter}
                </li>
                <li className="list-group-item">
                  <strong>Clima:</strong> {details.climate}
                </li>
                <li className="list-group-item">
                  <strong>Geografia:</strong> {details.terrain}
                </li>
              </ul>}
            {props.match.path === "/espaconaves/:name" && <ul className="list-group">
                <li className="list-group-item">
                  <strong>Nome:</strong> {details.name}
                </li>
                <li className="list-group-item">
                  <strong>Modelo:</strong> {details.model}
                </li>
                <li className="list-group-item">
                  <strong>Fabricante:</strong> {details.manufacturer}
                </li>
                <li className="list-group-item">
                  <strong>Tamanho:</strong> {details.length}
                </li>
                <li className="list-group-item">
                  <strong>Capacidade:</strong> {details.passengers}
                </li>
              </ul>}
          </div>
        </div>
      </div>
    </Fragment>;
}


const mapStateToProps = state => {
  return {
    details: state.details.data
  };
};

// const mapDispatchToProps = dispatch => {
//   return { loadData: () => dispatch(ActionCreators.loadDetailsRequest()) };
// };

export default connect(
  mapStateToProps,
  null
)(Detalhes);