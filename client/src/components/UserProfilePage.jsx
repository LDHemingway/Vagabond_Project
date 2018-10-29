import React, { Component } from 'react'
import axios from 'axios'
import NavBar from './shared_components/NavBar';
import MainImage from './shared_components/MainImage';
import PostList from './shared_components/PostList';
import styled from 'styled-components'

const StyledDiv = styled.div`
text-align: center;

.profilepic {
  max-width: 300px;
  margin: 0 auto;
}
`

export default class UserProfilePage extends Component {
  state = {
    user: {
      created_at: ''
    },
    posts: []
  }

  getUser = async () => {
    const response = await axios.get(`/api/users/${this.props.match.params.userId}`)
    console.log(response)
    return response.data
  }

  aggregateState = (response) => {
    this.setState({ user: response[0], posts: response[1] })
  }

  componentDidMount = async () => {
    const response = await this.getUser()
    this.aggregateState(response)
  }

  render() {

    const prettyDate = this.state.user.created_at.split('').splice(0, 9).join('')

    return (
      <StyledDiv>
        <NavBar
          title={this.state.user.name}
        />

        <div className='profilepic' >
          <MainImage
            imageSrc={'https://thumbs.dreamstime.com/z/gl%C3%BCckliche-daumen-des-jungen-mannes-oben-lokalisiert-auf-wei%C3%9Fem-hintergrund-31653620.jpg'}
          />
        </div>

        <div className='info-container' >
          <h4>Member since: {prettyDate}</h4>
          <h4>Current City: {this.state.user.current_city}</h4>
        </div>

        <div className='post-container' >
          <h2>Posts</h2>
          {this.state.posts[0] ?
            <PostList posts={this.state.posts} />
            : <p>No posts to show.</p>}
        </div>

      </StyledDiv>
    )
  }
}
