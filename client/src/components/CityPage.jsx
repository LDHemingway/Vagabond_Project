import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './shared_components/NavBar';
import MainImage from './shared_components/MainImage';
import PostList from './shared_components/PostList';
import axios from 'axios';
import styled from 'styled-components'

const StyledDiv = styled.div`
text-align: center;

button {
  margin: 0 auto;
  padding: 5px 20px;
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
button:hover {
  transform: scale(1.1);
}
`


export default class CityPage extends Component {
  state = {
    city: {
      location: '',
      picture_url: ''
    },
    posts: []
  }

  getCity = async () => {
    const response = await axios.get(`/api/cities/${this.props.match.params.cityId}`)
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
      <StyledDiv>
        <NavBar
          title={'City Profile'}
        />

        <MainImage
          title={this.state.city.location}
          imageSrc={this.state.city.picture_url}
        />

        <PostList posts={this.state.posts} />

        <Link to={`/cities/${this.props.match.params.cityId}/posts/new`} ><button>+ New Post</button></Link>
      </StyledDiv>
    )
  }
}