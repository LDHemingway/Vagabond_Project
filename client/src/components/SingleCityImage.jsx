import React, { Component } from 'react'
import styled from 'styled-components'

const StyledCity = styled.div`
   width: 800px;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   max-height:300px;
   width: auto;
   align-items: center;

`
const StyledImage = styled.img`
   height: 250px;
   width: 100%;

   &:hover {
       opacity: 0.5;
   }
`
const StyledText = styled.div`
   position: absolute;
   color: white;
   font-weight: 800;
   font-size: 100px;
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