import React, { Component } from 'react';
import Comment from '../Comment/Comment';
import './Post.css'

function Post({ data }) {
    return(
      <div key={data.id} className="posts">
      <div className="headerPost">
        <img src={data.author.avatar} className="authorAvatar" />
        <div className="authorDescription">
          <strong>{ data.author.name }</strong>
          <small>{ data.date }</small>
        </div>
      </div>
      
      <div className="bodyPost">
        {data.content}
      </div>

      <div className="comments">
        {data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
      </div>
    </div>
    );
}

export default Post;
