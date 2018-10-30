import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NavBar from './shared_components/NavBar';
import Logo from './shared_components/Logo';
import CityList from './CityList';
import Footer from './shared_components/Footer';

const StyledBackground = styled.div`
  background-image: url("https://www.atlantaga.gov/Home/ShowImage?id=3272&t=636335665341170000");
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
const CityContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background-color: white;
`
const BackgroundContainer = styled.div`
  /* background-color: rgba(255,150,50, 0.8); */
`

export default class LandingPage extends Component {
  render() {
    return (
      <div>
      <StyledBackground>
        <div className="overlay">
            <NavBar onLanding={true} />
            <StyledWelcome>
              <Logo />
            </StyledWelcome>
        </div>
      </StyledBackground>
<BackgroundContainer>
      <CityContainer>
        <CityList/>
      </CityContainer>
      <Footer />
      </BackgroundContainer>
      </div>
    )
  }
}