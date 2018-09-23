import React, { Component } from "react";
import { connect } from "react-redux";
import ActionCreators from "../redux/actionCreators";

class Main extends Component {
  componentDidMount() {
    this.props.loadData()
  }
  render() {
    return <div>Count: {JSON.stringify(this.props.people.count)}</div>;
  }
}

const mapStateToProps = state => {
  return {
    people: state.people.data
  };
};

const mapDispatchToProps = dispatch => {
  return { loadData: () => dispatch(ActionCreators.loadPeoplesRequest()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
