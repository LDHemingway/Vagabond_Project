import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from './Logo';

const StyledNavBar = styled.div`
display: flex;
flex-direction: row-reverse;
justify-content: space-between;
align-items: center;
height: 50px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

a {
  text-decoration: none;
  margin: 0;
}

#sign-in {
  margin: 0 10px 0 0;
}

p {
  color: rgba(255,150,50, 0.8);
  font-size: 20px;
  margin: 0;
  display: inline;
  margin-block-start: 0;
  margin-block-end: 0;
}

img {
  padding: 7px;
  height: 36px;
}

@media (max-width: 500px) {
  p {
    font-size: 16px;
  }
}
`

export default class NavBar extends Component {
  render() {
    return (
      <StyledNavBar>
        <Link id='sign-in' to='/users/1'><p>Sign Up | Log In</p></Link>
        {this.props.title ? <p>{this.props.title}</p> : null}
        {this.props.onLanding ? null :
          <Link to='/home'>
            <Logo />
          </Link>
        }
      </StyledNavBar>
    )
  }
}
