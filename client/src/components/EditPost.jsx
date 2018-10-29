import React, { Component } from 'react'
import NavBar from './shared_components/NavBar'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

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
      <NavBar title={`Update Post for ${this.state.post.title}`} />
      <form onSubmit={this.handleSubmit} >
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

      </form>
  </div>
)
}
}
