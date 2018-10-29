import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const StyledDiv = styled.div`
display: flex;
justify-content: center;
a {
    margin: 10px;
}
`
export default class CityList extends Component {
    state = {
        cities: []
    }

getCity = async () => {
  const response = await axios.get(`/api/cities`)
    console.log(response)
    return response.data
  }

componentDidMount = async () => {
  const cities = await this.getCity()
  this.setState({cities})
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
