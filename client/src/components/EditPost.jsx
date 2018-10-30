import React, { Component } from 'react'
import NavBar from './shared_components/NavBar'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`
text-align: center;
button {
  height: 50px;
  padding: 10px;
  font-weight: 400;
  font-size: 1.4em;
  border-radius: 0 0 9px 0;
  border: 2px solid rgba(255,150,50, 0.8);
  max-width: 50vw;
  color: rgba(255,150,50, 0.8);
}
button:hover {
  color: rgb(60,190,180);
}
`

const StyledForm = styled.form`
text-align: center;

input {
  height: 30px;
  width: 280px;
  font-size: 1.1em;
}
textarea {
    height: 180px;
    width: 90%;
    max-width: 800px;
    font-size: 1.1em;
    padding: 10px;
}
[type~=submit] {
  height: 50px;
  padding: 10px;
  margin: 20px;
  font-weight: 400;
  font-size: 1.4em;
  border-radius: 0 0 9px 0;
  border: 2px solid rgba(255,150,50, 0.8);
  max-width: 50vw;
  color: rgba(255,150,50, 0.8);
}
[type~=submit]:hover {
  color: rgb(60,190,180);
}
h1 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 400;
  font-size: 1.6em;
  color:  rgba(255,150,50, 0.8);
  margin: 0;
  padding: 20px;
}
h6 {
    color: red;
    margin: 3px;
}
.hidden {
    display: none;
}
`
const ColorDiv = styled.div`
background-color: #fff;
max-width: 800px;
margin: 0 auto;
height: 100vh;
border-left: 1px solid rgba(60,190,180, 0.5);
border-right: 1px solid rgba(60,190,180, 0.5);
box-shadow: 0 15px 30px rgb(200,200,200);
`

const CoolDiv = styled.div`
border-top:  1px solid rgba(60,190,180, 0.5);
background-image: url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/B2b8RSzfgivu3v9nb/modern-urban-sketch-city-center-with-skyscraper-building-cityscape-animated-available-in-4k-uhd-fullhd-and-hd-3d-video-animation-footage_sttrlm5ml_thumbnail-full15.png');
background-size: contain;
width: 100%;
height: 100vh;
`

export default class EditPost extends Component {
  state = {
    updatedPost: {
      title: '',
      content: '',
      photo_url: ''
    },
    post: {
      title: ''
    },
    redirect: false,
    titleError: false,
    contentError: false
  }

  getPost = async () => {
    const response = await axios.get(`/api/cities/${this.props.match.params.cityId}/posts/${this.props.match.params.id}`)
    this.setState({ updatedPost: response.data, post: response.data })
  }

  componentDidMount = async () => {
    await this.getPost()
  }

  handleChange = (event) => {
    const updatedPost = { ...this.state.updatedPost }
    updatedPost[event.target.name] = event.target.value
    this.setState({ updatedPost })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    if (this.state.updatedPost.title.length > 200 || this.state.updatedPost.title.length < 1) {
      return this.setState({ titleError: true })
    } else if (!this.state.updatedPost.content) {
      this.setState({ titleError: false })
      this.setState({ contentError: true })
    }
    else {
      await axios.put(`/api/cities/${this.props.match.params.cityId}/posts/${this.props.match.params.id}`, this.state.updatedPost)
      this.setState({ redirect: true })
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to={`/posts/${this.props.match.params.id}`} />
    }

    return (
      <div>
        <NavBar />
        <CoolDiv>
          <ColorDiv>
            <StyledForm onSubmit={this.handleSubmit} >
              <h1>Update Post for {this.state.post.title}</h1>
              <p>Title</p>
              <input placeholder='Post Title'
                type='text'
                name='title'
                value={this.state.updatedPost.title}
                onChange={this.handleChange}
              />
              <h6 className={this.state.titleError ? '' : 'hidden'} >A post's title should be 1-200 characters.</h6>

              <p>Image</p>
              <input placeholder='Post Image Adress'
                type='text'
                name='photo_url'
                value={this.state.updatedPost.photo_url}
                onChange={this.handleChange}
              />

              <p>Content</p>
              <textarea placeholder='Post Content'
                name='content'
                value={this.state.updatedPost.content}
                onChange={this.handleChange}
              />
              <h6 className={this.state.contentError ? '' : 'hidden'} >A post's content must not be empty.</h6>

              <div>
                <input type='submit' value='Update' />
              </div>

            </StyledForm>
            <StyledDiv>
              <Link to={`/posts/${this.props.match.params.id}`} ><button>Cancel</button></Link>
            </StyledDiv>
          </ColorDiv>
        </CoolDiv>
      </div>
    )
  }
}
