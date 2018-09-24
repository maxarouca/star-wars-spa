import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ActionCreators from "../../redux/actionCreators";
import "../styles.css";
import { Route } from "react-router-dom";

import Espaconaves from './Espaconaves'
import Detalhes from '../Detalhes'

class EspaconavesHome extends Component {
  render() {
    return <Fragment>
      <Route exact path={`${this.props.match.path}/`} component={Espaconaves} />
      <Route exact path={`${this.props.match.path}/:name`} component={Detalhes} />
    </Fragment>;
  }
}


const mapStateToProps = state => {
  return {
    people: state.people.data.results
  };
};

const mapDispatchToProps = dispatch => {
  return { loadData: () => dispatch(ActionCreators.loadPeoplesRequest()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EspaconavesHome);