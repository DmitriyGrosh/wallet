import { INCREMENT, DECREMENT } from "../actions/counter";

const initialState = { counter: 0 };

const counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export default counterReducer;
