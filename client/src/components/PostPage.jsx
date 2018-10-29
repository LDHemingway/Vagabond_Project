import React, { Component } from 'react'
import axios from 'axios';
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
import NavBar from './shared_components/NavBar'

const StyledDiv = styled.div`
.post-header {
  text-align: center;
  img {
    width: 200px;
  }
}

p {
margin: 20px;
}
`

export default class PostPage extends Component {
  state = {
    post: {
      title: '',
      comment: '',
      user_id: 1
    },
    user: {
      id: 1,
      name: '',
      image_url: ''
    },
    city: {
      id: 4,
      location: ''
    },
    redirect: false,
    showDelete: false
  }

  getPost = async () => {
    let post = { ...this.state.post }
    const response = await axios.get(`/api/cities/1/posts/${this.props.match.params.postId}`)
    post = response.data
    this.setState({ post })
  }

  getInfo = async () => {
    // let user = { ...this.state.user }
    // const response = await axios.get(`/api/users/1`)
    // user = response.data[0]
    let city = { ...this.state.city }
    const cityResponse = await axios.get(`/api/cities/${this.state.post.city_id}`)
    city = cityResponse.data[0]
    this.setState({ city })
  }

  componentDidMount = async () => {
    await this.getPost()
    await this.getInfo()
  }

  showDelete = () => {
    this.setState({ showDelete: !this.state.showDelete })
  }

  deletePost = async () => {
    await axios.delete(`/api/cities/${this.state.post.city_id}/posts/${this.state.post.id}`)
    this.setState({ redirect: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/cities/${this.state.post.city_id}`} />
  }

    return (
      <StyledDiv>
        <NavBar title={this.state.post.title} />
        <div className='post-header'>
          {/* <Link to={`/users/${this.state.user.id}`} >
            <img src={'https://thumbs.dreamstime.com/z/gl%C3%BCckliche-daumen-des-jungen-mannes-oben-lokalisiert-auf-wei%C3%9Fem-hintergrund-31653620.jpg'} alt='userpic' />
          </Link>
          <h4>Author: <Link to={`/users/${this.state.user.id}`} >{this.state.user.name}</Link></h4> */}
          <h4>City: <Link to={`/cities/${this.state.city.id}`} >{this.state.city.location}</Link></h4>
        </div>
        <p>{this.state.post.comment}</p>
        <Link to={`/cities/${this.state.post.city_id}/posts/${this.state.post.id}/edit`}>Edit</Link>
         {this.state.showDelete ?
          <div>
            <p>Are you sure you want to delete "{this.state.post.title}"?</p>
            <button onClick={this.showDelete}>Cancel</button>
            <p>or</p>
            <button onClick={this.deletePost}>Delete Post :(</button>
          </div>
          :
          <button id='delete' onClick={this.showDelete}>Delete</button>}

      </StyledDiv>
    )
  }
}
