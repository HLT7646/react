import React from "react";

const PostForm = ({ onAdd }) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.id.value,e.target.title.value,e.target.body.value);
    e.target.id.value ="" ;
    e.target.title.value = "";
    e.target.body.value = "";
}

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h3>Add Post</h3>
       
        <input placeholder="Id" name="id" />
        <input placeholder="Title" name="title" />
        <input placeholder="Body" name="body" />
        <button onSubmit={handleOnSubmit}>Add</button>
        <hr />
      </form>
    </div>
  );
};

export default PostForm;
