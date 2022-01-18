import { IUsers } from "../reducers/users";

export const GET_USERS = "GET_USERS";
export const FETCH_USERS = "FETCH_USERS";
export const DELETE_USER = "DELETE_USER";

export const getUsers = (payload: IUsers[]) => {
  return {
    type: GET_USERS,
    payload,
  };
};

export const fetchUsers = () => {
  return {
    type: FETCH_USERS,
  };
};

export const deleteUser = (payload: number) => {
  return {
    type: DELETE_USER,
    payload,
  };
};
