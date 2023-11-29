import React from 'react'

const Post = ({id,body,title}) => {

    

    return (
        <div className="container">
        <div className="row">
          <div className="col">
          <span>{id}</span>
          </div>
          <div className="col">
          <span>{title}</span>
          </div>
          <div className="col">
          <span>{body}</span>
          </div>
        </div>
      </div>
    )
}

export default Post
