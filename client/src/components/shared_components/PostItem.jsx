import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledDiv = styled.div`
margin: 30px;
h4 {
  margin: 0 auto;
  padding: 5px;
  font-weight: 400;
  font-size: 2em;
  border-radius: 0 0 9px 0;
  border: 1px solid rgba(255,150,50, 0.8);
  max-width: 50vw;
}
h4:hover {
  color: rgb(60,190,180);
}
a {
    margin: 0 5px;
    text-decoration: none;
    color: rgba(255,150,50, 0.8);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
p{
  text-align: left;
  white-space: pre-line;
}
border: 1px solid rgb(60,190,180);
border-radius: 0 0 9px 0;
padding: 20px;
box-shadow: 7px 10px rgb(230,232, 234);
i {
  font-size: 0.8em;
}
`

export default class PostItem extends Component {

  render() {
    return (
      <StyledDiv>
        <Link to={`/posts/${this.props.post.id}`} >
          <h4>{this.props.post.title} <i class="fas fa-arrow-right"></i></h4>
        </Link>
        <p>{this.props.post.content}</p>

      </StyledDiv>
    )
  }
}
