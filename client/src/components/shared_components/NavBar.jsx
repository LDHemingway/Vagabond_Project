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

p {
  color: rgba(255,150,50, 0.8);
  font-size: 20px;
  padding: 10px;
  font-weight: bold;
  margin: 0;
}

  img {
    padding: 10px;
    height: 30px;
  }
`

export default class NavBar extends Component {
  render() {
    return (
      <StyledNavBar>
        <p>Sign Up | Log In</p>
        {this.props.onLanding ? null :
          <Link to='/'>
            <Logo />
          </Link>
        }
      </StyledNavBar>
    )
  }
}
