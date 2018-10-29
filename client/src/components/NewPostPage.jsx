import React, { Component } from 'react'
import NavBar from './shared_components/NavBar';
import Axios from 'axios';
import { Redirect } from 'react-router-dom'

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
        const response = await Axios.get(`/api/cities/${this.props.match.params.cityId}`)
        console.log(response)
        this.setState({ city: response.data[0]})
      }

    componentDidMount = async () => {
        this.getCity()
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        if (this.state.newPost.title) {
            await Axios.post(`/api/cities/${this.props.match.params.cityId}/posts`, this.state.newPost)
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
                <form onSubmit={this.handleSubmit} >
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

                </form>
            </div>
        )
    }
}
