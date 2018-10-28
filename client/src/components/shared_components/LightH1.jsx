import React, { Component } from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
h1 {
    color: rgb(255,255,255);
    font-size: 15vw;
}
`


export default class LightH1 extends Component {
    render() {
        return (
            <StyledDiv>
                <h1>
                    {this.props.title}
                </h1>
            </StyledDiv>
        )
    }
}
