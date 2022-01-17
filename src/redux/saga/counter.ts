import { takeLatest, put } from "redux-saga/effects";
import { ASYNC_INCREMENT, increment } from "../actions/counter";

function* workerIncrementRegister() {
  yield put(increment());
}

export function* countWatcher() {
  yield takeLatest(ASYNC_INCREMENT, workerIncrementRegister);
}
