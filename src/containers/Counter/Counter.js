import React, { Component } from "react";
import * as actions from "../../store/actions.js";

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
        <hr />
        <button onClick={this.props.onStoreResults}>store results</button>
        <ul>
          {this.props.resultArr.map(el => (
            <li key={el.id} onClick={() => this.props.onDeleteResult(el.id)}>
              {el.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cto: state.counter,
    resultArr: state.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: actions.increment }),
    onDecrementCounter: () => dispatch({ type: actions.decrement }),
    onAdd: () => dispatch({ type: actions.add, value: 5 }),
    onSubtract: () => dispatch({ type: actions.subtract, value: 5 }),
    onStoreResults: () => dispatch({ type: actions.storeResults }),
    onDeleteResult: id =>
      dispatch({ type: actions.deleteResults, elementID: id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
