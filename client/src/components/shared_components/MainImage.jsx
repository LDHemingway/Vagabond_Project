import React, { Component } from 'react'
import styled from 'styled-components'
import LightH1 from './LightH1';

const StyledDiv = styled.div`
background-size: cover;
background-position: center;
display: flex;
justify-content: center;
align-items: center;
height: 200px;
width: 100%;

@media (min-width: 600px) {
    height: 300px;
}
`

export default class MainImage extends Component {
  render() {
    return (
      <StyledDiv style={{backgroundImage: 'url(' + this.props.imageSrc + ')'}}>
        <LightH1 title={this.props.title} />
      </StyledDiv>
    )
  }
}
