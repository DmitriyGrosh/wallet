import { GET_USERS, DELETE_USER } from "../actions/users";

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
    case DELETE_USER:
      return { ...state, users: state.users.filter((el, i) => i !== action.payload) };
    default:
      return state;
  }
};

export default usersReducer;
