import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import counterReducer from "./reducers/counter";
import usersReducer, { IUsers } from "./reducers/users";
import postsReducer from "./reducers/posts";
import rootSaga from "./saga";

export interface IRootStore {
  counter: { counter: number };
  users: { users: IUsers[] };
  posts: { posts: IUsers[] };
}

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
  posts: postsReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
