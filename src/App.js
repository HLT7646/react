
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import PostForm from "./components/PostForm";
import Post from "./components/Post";
import { fetchPosts, addPost } from "./actions";


const App = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleAddPost = (post) => {
    dispatch(addPost(post));
  };

  return (
    
      <div className="App">
       

        <br />
        <PostForm onAdd={handleAddPost} />
        <div>
          {posts.map((post) => (
            <Post key={post.id} id={post.id} body={post.body} title={post.title} />
          ))}
        </div>
      </div>
    
  );
};

export default App;
