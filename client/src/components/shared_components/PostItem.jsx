import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledDiv = styled.div`
margin: 30px;
h4 {
  margin: 0;
}
a {
    margin: 0 5px;
}
`

export default class PostItem extends Component {
  render() {
    return (
      <StyledDiv>
        <Link to={`/posts/${this.props.post.id}`} >
        <h4>{this.props.post.title}</h4>
        </Link>
        <p>{this.props.post.comment}</p>
        <Link to={`/posts/${this.props.post.id}/edit`}>Edit</Link>
        <Link to={`/`}>Delete</Link>
      </StyledDiv>
    )
  }
}
