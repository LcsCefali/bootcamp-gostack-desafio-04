import React, { Component } from 'react';
import './Comment.css';

function Comment({ data }) {
  return (
    <div key={data.id} className="content">             
      <img src={data.author.avatar} className="commentsAvatar" />
      <div className="comment">
        <strong>{data.author.name}</strong>
        {data.content}
      </div>
    </div>
  );
}

export default Comment;