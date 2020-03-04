import React, { Component } from "react";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.cto} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAdd} />
        <CounterControl label="Subtract 5" clicked={this.props.onSubtract} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cto: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAdd: () => dispatch({ type: "ADD", value: 5 }),
    onSubtract: () => dispatch({ type: "SUBTRACT", value: 5 })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
