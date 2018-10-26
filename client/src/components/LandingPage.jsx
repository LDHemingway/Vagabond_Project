import React, { Component } from 'react'
import styled from 'styled-components'
import NavBar from './shared_components/NavBar';

const StyledBackground = styled.div`
  background-image: url("https://www.wheretraveler.com/sites/default/files/styles/promoted_image_social_large/public/skyline-atlanta_c-davidkosmossmith-flickr.jpg?itok=uMQTObyt");
  height: 100vh;
`
const StyledWelcome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 10vh;
  height: 90%;
  h1 {
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }
`

export default class LandingPage extends Component {
  render() {
    return (
      <StyledBackground>
        <NavBar></NavBar>
        <StyledWelcome>
        <h1>Vagabond</h1>
        </StyledWelcome>
        
      </StyledBackground>
    )
  }
}
