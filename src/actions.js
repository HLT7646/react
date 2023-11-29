import { FETCH_POSTS_SUCCESS, ADD_POST_SUCCESS } from "./actionTypes";

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const addPostSuccess = (post) => ({
  type: ADD_POST_SUCCESS,
  payload: post,
});

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      dispatch(fetchPostsSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addPost = (post) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to add post");
      }
      const data = await response.json();
      dispatch(addPostSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
};