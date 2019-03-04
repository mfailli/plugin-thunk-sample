import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { initiateValidation } from "../../actions/Validator.js";

class Validator extends Component {
  handleOnClick(number) {
    this.props.initiateValidation(number);
  }

  render() {
    const number = this.props.task.source.attributes.caller;
    return (
      <button onClick={() => this.handleOnClick(number)}>{this.props.attempted === false ? "Validate User" : this.props.success === true ? "Validation was successful" : "Validation Failed."}</button>
    );
  }
}

const mapStateToProps = state => {
  return {
    success: state.verify.success,
    attempted: state.verify.attempted
  };
};

const mapDispatchToProps = dispatch => ({
  initiateValidation: number => dispatch(initiateValidation(number))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Validator);
