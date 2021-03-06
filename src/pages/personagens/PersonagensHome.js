import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import ActionCreators from "../../redux/actionCreators";
import '../styles.css'
import { Route } from 'react-router-dom'

import Personagens from './Personagens'
import Detalhes from '../Detalhes'

class PersonagensHome extends Component {
  render() {
      return <Fragment>
        <Route exact path={`${this.props.match.path}/`} component={Personagens} />
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
)(PersonagensHome);