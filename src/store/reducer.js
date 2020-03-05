import * as actions from "./actions";

const initialState = {
  counter: 0,
  results: []
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.increment:
      return {
        ...state,
        counter: state.counter + 1
      };
    case actions.decrement:
      return {
        ...state,
        counter: state.counter - 1
      };
    case actions.add:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case actions.subtract:
      return {
        ...state,
        counter: state.counter - action.value
      };
    case actions.storeResults:
      return {
        ...state,
        results: state.results.concat({ value: state.counter, id: new Date() })
      };
    case actions.deleteResults:
      const newArray = state.results.filter(
        result => result.id !== action.elementID
      );
      return {
        ...state,
        results: newArray
      };
    default:
      return state;
  }
};

export default Reducer;
