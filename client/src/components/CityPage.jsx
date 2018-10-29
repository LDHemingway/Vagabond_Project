import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import NavBar from './shared_components/NavBar';
import MainImage from './shared_components/MainImage';
import PostList from './shared_components/PostList';
import Axios from 'axios';


export default class CityPage extends Component {
  state = {
    city: {
      location: '',
      picture_url: ''
    },
    posts: []
  }

  getCity = async () => {
    const response = await Axios.get(`/api/cities/${this.props.match.params.cityId}`)
    console.log(response)
    return response.data
  }

  aggregateState = (response) => {
    this.setState({ city: response[0], posts: response[1]})
  }

  componentDidMount = async () => {
    const response = await this.getCity()
    this.aggregateState(response)
  }

  render() {
    return (
      <div>
        <NavBar
          title={'City Profile'}
        />

        <MainImage
          title={this.state.city.location}
          imageSrc={this.state.city.picture_url}
        />

        <PostList posts={this.state.posts} />

        <Link to={`/cities/${this.props.match.params.cityId}/posts/new`} ><button>+ New Post</button></Link>
      </div>
    )
  }
}