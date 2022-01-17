import { all } from "redux-saga/effects";
import { countWatcher } from "./counter";
import { usersWatcher } from "./users";

export default function* rootSaga() {
  yield all([countWatcher(), usersWatcher()]);
}
