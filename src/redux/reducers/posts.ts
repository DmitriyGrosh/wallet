import { DELETE_POST, SEND_POST } from "../actions/posts";
import { IUsers } from "./users";

const initialState: { posts: IUsers[] } = {
  posts: [],
};

const postsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEND_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case DELETE_POST:
      return { ...state, posts: state.posts.filter((el, i) => i !== action.payload) };
    default:
      return state;
  }
};

export default postsReducer;
