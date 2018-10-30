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
  margin: 20px;
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
    height: 280px;
    width: 100%;
    max-width: 800px;
    font-size: 1.1em;
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
}
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
        redirect: false
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
        if (this.state.newPost.title) {
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
                <NavBar title={`New Post for ${this.state.city.location}`} />
                <StyledForm onSubmit={this.handleSubmit} >
                    <p>Title</p>
                    <input placeholder='Post Title'
                        type='text'
                        name='title'
                        value={this.state.newPost.title}
                        onChange={this.handleChange}
                    />

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

                    <div>
                        <input type='submit' value='Create' />
                    </div>

                </StyledForm>
                <StyledDiv>
                    <Link to={`/cities/${this.props.match.params.cityId}`} ><button>Cancel</button></Link>
                </StyledDiv>
            </div>
        )
    }
}
