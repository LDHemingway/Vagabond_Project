import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledDiv = styled.div`
margin: 30px;
h4 {
  margin: 0 auto;
  padding: 0 0 5px 0;
  font-weight: 400;
  font-size: 2em;
  border-radius: 0 0 9px 0;
  border-bottom: 1px solid rgba(255,150,50, 0.8);
  border-right: 1px solid rgba(255,150,50, 0.8);
  max-width: 50vw;
}
h4:hover {
  transform: scale(1.1);
}
a {
    margin: 0 5px;
    text-decoration: none;
    color: rgba(255,150,50, 0.8);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
p{
  text-align: left;
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
     
      </StyledDiv>
    )
  }
}
