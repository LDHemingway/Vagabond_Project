import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NavBar from './shared_components/NavBar';
import Logo from './shared_components/Logo';

const StyledBackground = styled.div`
  background-image: url("https://www.wheretraveler.com/sites/default/files/styles/promoted_image_social_large/public/skyline-atlanta_c-davidkosmossmith-flickr.jpg?itok=uMQTObyt");
  background-size: cover;
  background-position: center;

  .overlay {
    height: 100vh;
    background-color: rgba(220,240,250,0.65);
  }

  a {
    text-decoration: none;
  }
`
const StyledWelcome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  img {
    width: 70vw;
  }
`

export default class LandingPage extends Component {
  render() {
    return (
      <StyledBackground>
        <div className="overlay">
          <Link to='/home'>
            <NavBar onLanding={true} />
            <StyledWelcome>
              <Logo />
            </StyledWelcome>
          </Link>
        </div>
      </StyledBackground>
    )
  }
}