import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`
display: flex;
justify-content: center;
a {
    margin: 10px;
}
`

export default class CityList extends Component {
    state = {
        cities: [
            { location: 'Atlanta', id: 1 },
            { location: 'Atlanta', id: 1 },
            { location: 'Atlanta', id: 1 }
        ]
    }

    render() {
        const cityList = this.state.cities.map((city, i) => {
            return <Link key={i} to={`/cities/${city.id}`}>{city.location}</Link>
        })
        return (
            <StyledDiv>
                {cityList}
            </StyledDiv>
        )
    }
}
