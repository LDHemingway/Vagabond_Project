import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import SingleCityImage from './SingleCityImage';

const StyledDiv = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
align-items: center;
text-shadow: 1px 1px gray;
padding-top: 30px;

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
    return response.data
  }

componentDidMount = async () => {
  const cities = await this.getCity()
  this.setState({cities})
  }

    render() {
        const cityList = this.state.cities.map((city, i) => {
            return <Link key={i} to={`/cities/${city.id}`}><SingleCityImage location={city.location} image={city.picture_url}/></Link>
        })
        return (
            <StyledDiv>
                {cityList}
            </StyledDiv>
        )
    }
}
