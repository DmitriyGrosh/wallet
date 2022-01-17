import { GET_USERS } from "../actions/users";

export interface IUsers {
  userId: string;
  id: number;
  title: string;
  body: string;
}

interface IInitialState {
  users: IUsers[];
}

const initialState: IInitialState = {
  users: [],
};

const usersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
