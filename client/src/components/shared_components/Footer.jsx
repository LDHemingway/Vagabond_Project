import React, { Component } from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: rgb(60,190,180);
    color: white;
    text-align: center;
    font-size: 1em;
    letter-spacing: 0.3em;
    padding-top: 10px;
    padding-bottom: 10px;
`

export default class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        &copy; JECLBOND
      </StyledFooter>
    )
  }
}
