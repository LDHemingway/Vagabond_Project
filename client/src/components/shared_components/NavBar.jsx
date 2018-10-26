import React, { Component } from 'react'
import styled from 'styled-components'

const StyledNavBar = styled.div`
  color: rgba(205,235,205, 0.8);
  font-size: 30px;
  padding: 20px;
  font-weight: bold;
`

export default class NavBar extends Component {
  render() {
    return (
      <StyledNavBar>
        Sign Up | Log In
      </StyledNavBar>
    )
  }
}
