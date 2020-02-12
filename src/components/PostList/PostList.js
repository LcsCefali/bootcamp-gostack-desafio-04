import React, { Component } from 'react';
import Post from '../Post/Post';
import avatar from '../../assets/icone-dre.png';
import './PostList.css'
// import { Container } from './styles';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Lucas Cefali",
          avatar
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "JC",
          avatar
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar
            },
            content: "Estao contratando sim"
          },
          {
            id: 2,
            author: {
              name: "Joaõ",
              avatar
            },
            content: "pao de batata"
          },
          {
            id: 3,
            author: {
              name: "Alow",
              avatar
            },
            content: "só passando para dar oi"
          },
          {
            id: 4,
            author: {
              name: "Bruno",
              avatar
            },
            content: "yesss"
          }
        ]
      }
    ]
  };

  render() {
    return(
      <div className="postList">
        {this.state.posts.map(post => <Post key={post.id} data={post}/>)}
      </div>
    );
  }
};

export default PostList;