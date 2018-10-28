import React, { Component } from 'react'
import NavBar from './shared_components/NavBar';
import MainImage from './shared_components/MainImage';
import PostList from './shared_components/PostList';

export default class UserProfilePage extends Component {
    state = {
        user: {
            name: 'Bob',
            posts: [
                {id: 1,
                title: 'Sample Post 1',
                content: 'This is a sample post!'},
                {id: 2,
                title: 'Sample Post 2',
                content: 'This is a second sample post!'},
                {id: 3,
                title: 'Sample Post 3',
                content: 'This is a third sample post!'},
            ],
            photo_url: 'https://thumbs.dreamstime.com/z/gl%C3%BCckliche-daumen-des-jungen-mannes-oben-lokalisiert-auf-wei%C3%9Fem-hintergrund-31653620.jpg'
        }
    }

  render() {
    return (
      <div>
        <NavBar 
        title={'User Profile'} 
        />

        <MainImage 
        title={this.state.user.name}
        imageSrc={this.state.user.photo_url} 
        />

        <PostList posts={this.state.user.posts} />
      </div>
    )
  }
}
