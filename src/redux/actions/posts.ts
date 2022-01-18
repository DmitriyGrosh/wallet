import { IUsers } from "../reducers/users";

export const SEND_POST = "SEND_POST";
export const DELETE_POST = "DELETE_POST";

export const sendPost = (payload: IUsers) => {
  return {
    type: SEND_POST,
    payload,
  };
};

export const deletePost = (payload: number) => {
  return {
    type: DELETE_POST,
    payload,
  };
};
