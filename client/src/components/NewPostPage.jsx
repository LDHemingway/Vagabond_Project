import React, { Component } from 'react'
import NavBar from './shared_components/NavBar';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
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

export default class NewPostPage extends Component {
    state = {
        newPost: {
            title: '',
            comment: ''
        },
        city: {
            location: ''
        },
        redirect: false
    }

    getCity = async () => {
        const response = await axios.get(`/api/cities/${this.props.match.params.cityId}`)
        this.setState({ city: response.data[0]})
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
                    comment: '',
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
                    <input placeholder='Title'
                        type='text'
                        name='title'
                        value={this.state.newPost.title}
                        onChange={this.handleChange}
                    />

                    <p>Comment</p>
                    <input placeholder='Comment'
                        type='text'
                        name='comment'
                        value={this.state.newPost.comment}
                        onChange={this.handleChange}
                    />

                    <div>
                        <input type='submit' value='Create' />
                    </div>

                </StyledForm>
            </div>
        )
    }
}
