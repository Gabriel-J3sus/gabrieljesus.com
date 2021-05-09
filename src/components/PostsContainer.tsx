import React from 'react'

import { PostsContainerProps } from '../types/components/PostsContainerProps'

import { NoPostFound } from './NoPostFound'

import { Container } from '../styles/components/PostsContainer'

export const PostsContainer: React.FC<PostsContainerProps> = ({
  title,
  postsLength,
  children
}) => {
  if (postsLength === 0) {
    children = <NoPostFound />
  }

  return (
    <Container>
      <span>
        <h1>{title}</h1>
        <h2>{postsLength} Posts</h2>
      </span>

      <div className="PostsWrapper">{children}</div>
    </Container>
  )
}
