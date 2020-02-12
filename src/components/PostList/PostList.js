import React, { Component } from 'react';
import Post from '../Post/Post';
import avatar from '../../assets/icone-dre.png'; // sem outras imagens para colocar :/ sorry
import './PostList.css';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Lucas Cefali",
          avatar: 'https://avatars2.githubusercontent.com/u/59941872?s=400&u=e0c468349bbcd6c157aef6d509ebc1510648d34c&v=4'
        },
        date: "12 Fev 2020",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: 'https://avatars1.githubusercontent.com/u/2254731?s=400&v=4'
            },
            content: "Estamos contratando sim!!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Julio Cesar",
          avatar: 'https://avatars0.githubusercontent.com/u/47666142?s=400&v=4'
        },
        date: "11 Fev 2020",
        content: "React esta me encantando kkkkkkkkk",
        comments: [
          {
            id: 1,
            author: {
              name: "Lucas Cefali",
              avatar: 'https://avatars2.githubusercontent.com/u/59941872?s=400&u=e0c468349bbcd6c157aef6d509ebc1510648d34c&v=4'
            },
            content: "hahahahah eu disse que ia curtir !"
          },
          {
            id: 2,
            author: {
              name: "Eric",
              avatar
            },
            content: "Massa Bro"
          },
          {
            id: 3,
            author: {
              name: "Bruno",
              avatar
            },
            content: "só estou preenchendo os comentarios deste Post.\n Bora codar clã !"
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