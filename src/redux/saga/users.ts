import { takeLatest, put, call } from "redux-saga/effects";

import { FETCH_USERS, getUsers } from "../actions/users";
import axios, { AxiosResponse } from "axios";
import { IUsers } from "../reducers/users";

const fetchData = () => axios.get("https://jsonplaceholder.typicode.com/posts");

function* workerUsersRegister() {
  const users: AxiosResponse<IUsers[]> = yield call(fetchData);
  yield put(getUsers(users.data));
}

export function* usersWatcher() {
  yield takeLatest(FETCH_USERS, workerUsersRegister);
}
