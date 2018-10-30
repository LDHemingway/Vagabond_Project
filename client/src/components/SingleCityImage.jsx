import React, { Component } from 'react'
import styled from 'styled-components'

const StyledCity = styled.div`
   max-width: 600px;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   max-height:300px;
   align-items: center;
&:hover {
    opacity: 0.5;
}

`
const StyledImage = styled.img`
   max-height: 250px;
   width: 100%;

`
const StyledText = styled.div`
   position: absolute;
   color: white;
   font-weight: 800;
   font-size: 80px;
   padding: 10px;
   @media (max-width: 600px) {
   font-size: 60px;
}
   `

export default class SingleCityImage extends Component {
 render() {
   return (
     <StyledCity>
       <StyledImage src={this.props.image} alt={this.props.location} />
           <StyledText>{this.props.location}</StyledText>
     </StyledCity>
   )
 }
}