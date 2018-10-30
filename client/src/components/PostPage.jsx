import React, { Component } from 'react'
import axios from 'axios';
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
import NavBar from './shared_components/NavBar'

const StyledDiv = styled.div`
text-align: center;

.post-header {
  text-align: center;
  img {
  height: 400px;
  border-radius: 50%;
}
}

p {
margin: 20px;
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
  border: none;
  background: none;
  color:  rgba(255,150,50, 0.8);
  font-size: 1.2em;
}
`

const StyledOverlay = styled.div`
#modal-overlay {
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(50,50,55,0.5);
  display: flex;
  opacity: 1;
  transition: opacity .2s;
  &.hidden {
  opacity: 0;
  z-index: -1000;
  transform: scale(0.96) translate(-50%, -46%);
}
}
`

const StyledModal = styled.div`
button {
  margin: 10px 20px;
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
transform: scale(1.0) translate(-50%, -50%);
width: 300px;
&.hidden {
  opacity: 0;
  z-index: -1000;
  transform: scale(0.96) translate(-50%, -46%);
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

    return (
      <div>
        <NavBar title={this.state.post.title} />
        <StyledDiv>
          <div className='post-header'>

            <img src='http://t.upstc.com/dAhP9HrDiyamBY1eTS1wC91_5ho=/720x0/smart/upout.data.live/activities/2/16551/original_1377631307.jpg' alt='post' />

            <h4>City: <Link to={`/cities/${this.state.city.id}`} >{this.state.city.location}</Link></h4>
          </div>

          <p>{this.state.post.comment}</p>

          <Link to={`/cities/${this.state.post.city_id}/posts/${this.state.post.id}/edit`}><button><i className="far fa-edit"></i></button></Link>

          <button id='delete' onClick={this.showDelete}><i className="far fa-trash-alt"></i></button>

          <StyledOverlay>
            <StyledModal className={this.state.showDelete ? '' : "hidden"}>
              <p>Are you sure you want to delete "{this.state.post.title}"?</p>
              <button onClick={this.showDelete}>Cancel</button>
              <button  id='delete' onClick={this.deletePost} >Delete Post</button>
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
