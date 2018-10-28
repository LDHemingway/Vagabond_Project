import React, { Component } from 'react'
import styled from 'styled-components'
import NavBar from './shared_components/NavBar';
import MainImage from './shared_components/MainImage';
import CityList from './CityList';

const StyledDiv = styled.div`
max-width: 800px;
margin: 0 auto;
`

export default class HomePage extends Component {
  render() {
    return (
      <StyledDiv>
        <NavBar />
        <div className="body">
          <MainImage
            title={'Atlanta'}
            imageSrc={'https://www.atlantaga.gov/Home/ShowImage?id=3272&t=636335665341170000'}
          />
          <CityList />
        </div>
      </StyledDiv>
    )
  }
}
