import React, { Component } from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
h1 {
    color: rgb(255,255,255);
    font-size: 12vh;
    text-shadow: 1px 1px gray;
}
@media(max-width: 800px) {
    h1 {
        font-size: 12vw;
    }
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
