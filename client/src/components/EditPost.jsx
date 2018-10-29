import React, { Component } from 'react'
import NavBar from './shared_components/NavBar'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'

const StyledForm = styled.form`
text-align: center;

input {
  height: 30px;
  width: 280px;
  font-size: 1.1em;
}

[type~=submit] {
  margin: 20px;
  padding-bottom: 36px;
  font-weight: 400;
  font-size: 1.4em;
  border-radius: 0 0 9px 0;
  border-top: none;
  border-left: none;
  border-bottom: 2px solid rgba(255,150,50, 0.8);
  border-right: 2px solid rgba(255,150,50, 0.8);
  max-width: 50vw;
  color: rgba(255,150,50, 0.8);
}
[type~=submit]:hover {
  transform: scale(1.1);
}

h1 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 400;
  font-size: 1.6em;
  color:  rgba(255,150,50, 0.8);
}
`

export default class EditPost extends Component {
  state = {
    updatedPost: {
        title: '',
        comment: ''
    },
    post: {
        title: ''
    },
    redirect: false
}

getPost = async () => {
  const response = await axios.get(`/api/cities/${this.props.match.params.cityId}/posts/${this.props.match.params.id}`)
  console.log(response)
  this.setState({ updatedPost: response.data, post: response.data})
}

componentDidMount = async () => {
  await this.getPost()
}

handleChange = (event) =>{
  const updatedPost = {...this.state.updatedPost}
  updatedPost[event.target.name] = event.target.value
  this.setState({updatedPost})
}

handleSubmit = async(event) => {
  event.preventDefault()
  if (this.state.updatedPost.title) {
    await axios.put(`/api/cities/${this.props.match.params.cityId}/posts/${this.props.match.params.id}`, this.state.updatedPost)
  }
  this.setState({ redirect: true })
}
  render() {
    if (this.state.redirect) {
      return <Redirect to={`/posts/${this.props.match.params.id}`} />
  }

    return (
      <div>
      <NavBar />
      <StyledForm onSubmit={this.handleSubmit} >
          <h1>Update Post for {this.state.post.title}</h1>
          <p>Title</p>
          <input placeholder='Title'
              type='text'
              name='title'
              value={this.state.updatedPost.title}
              onChange={this.handleChange}
          />

          <p>Comment</p>
          <input placeholder='Comment'
              type='text'
              name='comment'
              value={this.state.updatedPost.comment}
              onChange={this.handleChange}
          />

          <div>
              <input type='submit' value='Update' />
          </div>

      </StyledForm>
  </div>
)
}
}
