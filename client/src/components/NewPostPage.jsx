import React, { Component } from 'react'
import NavBar from './shared_components/NavBar';
import axios from 'axios';
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
height: 95vh;
`

export default class NewPostPage extends Component {
    state = {
        newPost: {
            title: '',
            content: '',
            photo_url: ''
        },
        city: {
            location: ''
        },
        redirect: false,
        titleError: false,
        contentError: false
    }

    getCity = async () => {
        const response = await axios.get(`/api/cities/${this.props.match.params.cityId}`)
        this.setState({ city: response.data[0] })
    }

    componentDidMount = async () => {
        this.getCity()
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        if (this.state.newPost.title.length > 200 || this.state.newPost.title.length < 1) {
            return this.setState({titleError: true })
        } else if (!this.state.newPost.content) {
            this.setState({titleError: false })
            this.setState({contentError: true })
        }
        else {
            await axios.post(`/api/cities/${this.props.match.params.cityId}/posts`, this.state.newPost)
            this.setState({
                newPost: {
                    title: '',
                    content: '',
                    city_id: this.props.match.params.cityId
                }
            })
            this.setState({ redirect: true })
        }
    }

    handleChange = (event) => {
        const newPost = { ...this.state.newPost }
        newPost[event.target.name] = event.target.value
        this.setState({ newPost })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={`/cities/${this.props.match.params.cityId}`} />
        }

        return (
            <div>
                <NavBar />
                <CoolDiv>
                    <ColorDiv>
                        <StyledForm onSubmit={this.handleSubmit} >
                        <h1>New Post for {this.state.city.location}</h1>
                            <p>Title</p>
                            <input placeholder='Post Title'
                                type='text'
                                name='title'
                                value={this.state.newPost.title}
                                onChange={this.handleChange}
                            />
                            <h6 className={this.state.titleError ? '' : 'hidden'} >A post's title should be 1-200 characters.</h6>

                            <p>Image</p>
                            <input placeholder='Post Image Adress'
                                type='text'
                                name='photo_url'
                                value={this.state.newPost.photo_url}
                                onChange={this.handleChange}
                            />

                            <p>Content</p>
                            <textarea placeholder='Post Content'
                                name='content'
                                value={this.state.newPost.content}
                                onChange={this.handleChange}
                            />
                            <h6 className={this.state.contentError ? '' : 'hidden'} >A post's content must not be empty.</h6>

                            <div>
                                <input type='submit' value='Create' />
                            </div>

                        </StyledForm>
                        <StyledDiv>
                            <Link to={`/cities/${this.props.match.params.cityId}`} ><button>Cancel</button></Link>
                        </StyledDiv>
                    </ColorDiv>
                </CoolDiv>
            </div>
        )
    }
}
