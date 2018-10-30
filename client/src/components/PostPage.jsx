import React, { Component } from 'react'
import axios from 'axios';
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
import NavBar from './shared_components/NavBar'
import MainImage from './shared_components/MainImage'

const StyledDiv = styled.div`
text-align: center;

.post-header {
  text-align: center;
}

p {
margin: 20px auto;
padding: 0 10px;
text-align: left;
max-width: 800px;
white-space: pre-line;
}

a {
  color: rgba(255,150,50, 0.8);
}

h4 {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 400;
  font-size: 1.2em;
}

button {
  margin-top: 30px;
  border: none;
  background: none;
  color:  rgba(255,150,50, 0.8);
  font-size: 1.2em;
}
button:hover {
  color: rgb(60,190,180);
}
`

const StyledOverlay = styled.div`
#modal-overlay {
  z-index: 1000;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: rgba(50,50,55,0.5);
  display: flex;
  opacity: 1;
  transform: scale(1) translate(-50%, -50%);
  transition: transform 0.2s ease, opacity 0.2s ease;
  &.hidden {
  opacity: 0;
  z-index: -1000;
  transform: scale(1) translate(-50%, -50%);
}
}
`

const StyledModal = styled.div`
button {
  margin: 10px 20px;
}
p {
  text-align: center;
}
#delete {
  color: red;
}
position: fixed;
top: 50%;
left: 50%;
transition: transform 0.2s ease, opacity 0.2s ease;
opacity: 100%;
z-index: 1010;
padding: 30px;
border-radius: 3px;
background: #fff;
transform: scale(1) translate(-50%, -50%);
width: 300px;
&.hidden {
  transition: transform 0.3s ease, opacity 0.2s ease;
  opacity: 0;
  z-index: -1000;
  transform: scale(0.96) translate(-50%, -46%);
}
`

export default class PostPage extends Component {
  state = {
    post: {
      title: '',
      content: '',
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

  deletePost = async () => {
    await axios.delete(`/api/cities/${this.state.post.city_id}/posts/${this.state.post.id}`)
    this.setState({ redirect: true })
  }

  showDelete = () => {
    this.setState({ showDelete: !this.state.showDelete })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/cities/${this.state.post.city_id}`} />
    }
    const navTitle = this.state.city.location
    const navId = this.state.city.id
    return (
      <div>
        <NavBar title={<Link to={`/cities/${navId}`}>{navTitle}</Link>} />
        <StyledDiv>
          <div className='post-header'>

            <MainImage title={this.state.post.title} imageSrc={this.state.post.photo_url} />

          </div>

          <Link to={`/cities/${this.state.post.city_id}`} ><button><i className="fas fa-arrow-left"></i></button></Link>

          <Link to={`/cities/${this.state.post.city_id}/posts/${this.state.post.id}/edit`}><button><i className="far fa-edit"></i></button></Link>

          <button id='delete' onClick={this.showDelete}><i className="far fa-trash-alt"></i></button>

          <p>{this.state.post.content}</p>



          <StyledOverlay>
            <StyledModal className={this.state.showDelete ? '' : "hidden"}>
              <p>Are you sure you want to delete "{this.state.post.title}"?</p>
              <button onClick={this.showDelete}>Cancel</button>
              <button id='delete' onClick={this.deletePost} >Delete Post</button>
            </StyledModal>
            <div id='modal-overlay'
              onClick={this.showDelete}
              className={this.state.showDelete ? '' : 'hidden'}></div>
          </StyledOverlay>
        </StyledDiv>
      </div>
    )
  }
}
