import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NavBar from './shared_components/NavBar';
import Logo from './shared_components/Logo';
import CityList from './CityList';

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
  flex-direction: column;
  align-items: center;
  height: 90%;
  img {
    padding: 200px 0 0 0;
    width: 70vw;
  }

  i {
    font-size: 100px;
    margin: 60px 0 0 0;
    color: rgba(250,250,250,0.8);
  }

  @media(min-width: 1000px) {
    i {
      margin: 30px 0 0 0;
    }
  }

  @media(max-width: 600px) {
    i {
      font-size: 80px;
    }
  }
`
const CityContainer = styled.div`
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
              <div>
                <Logo />
              </div>
              <div>
                <i className="fas fa-arrow-circle-down"></i>
              </div>
            </StyledWelcome>
          </div>
        </StyledBackground>
        <BackgroundContainer>
          <CityContainer>
            <CityList />
          </CityContainer>
        </BackgroundContainer>
      </div>
    )
  }
}