import React, { Component } from "react";
import { connect } from "react-redux";
import { validatorFetch } from "../../actions/Validator.js";

class Validator extends Component {
  handleOnClick(number) {
    this.props.validatorFetch(number);
  }

  render() {
    const number = this.props.task.source.attributes.caller;
    return (
      <React.Fragment>
        <button onClick={() => this.handleOnClick(number)}>Click to fetch a new random boolean</button>

        {!this.props.attempted && this.props.isLoading && <p>Loading....</p>}

        {this.props.attempted && !this.props.isLoading && this.props.success && <p>Result = true! Validation was successful</p>}

        {this.props.attempted && !this.props.isLoading && !this.props.success && this.props.error && <p style={{ color: "red" }}>{this.props.error}</p>}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.verify);
  return {
    success: state.verify.success,
    attempted: state.verify.attempted,
    isLoading: state.verify.isLoading,
    error: state.verify.error
  };
};

const mapDispatchToProps = dispatch => ({
  validatorFetch: number => dispatch(validatorFetch(number))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Validator);
