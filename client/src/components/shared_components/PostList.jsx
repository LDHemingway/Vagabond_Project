import React, { Component } from 'react'
import PostItem from './PostItem';
import styled from 'styled-components'

const StyledDiv = styled.div`
text-align: center;
`

export default class PostList extends Component {

  render() {
    const postList = this.props.posts.map((post, i) => {
        return <PostItem key={i} post={post} />
    })

    return (
      <StyledDiv>
        {postList}
      </StyledDiv>
    )
  }
}
