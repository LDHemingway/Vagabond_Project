import React, { Component } from 'react'
import NavBar from './shared_components/NavBar';

export default class PostPage extends Component {
  render() {
    return (
      <div>
          <NavBar title={'One Post Showing'} />
        this is a post lmao
      </div>
    )
  }
}
