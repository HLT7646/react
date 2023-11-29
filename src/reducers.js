import { combineReducers } from "redux";
import { FETCH_POSTS_SUCCESS, ADD_POST_SUCCESS } from "./actionTypes";

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return action.payload;
    case ADD_POST_SUCCESS:
      return [...state, action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
