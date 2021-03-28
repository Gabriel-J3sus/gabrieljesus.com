/* eslint-disable no-use-before-define */
import React from 'react'

import { PostsContainerProps } from '../types/components/PostsContainerProps'

import { Container } from '../styles/components/PostsContainer'

export const PostsContainer: React.FC<PostsContainerProps> = ({
  title,
  postsLength,
  children
}) => {
  return (
    <Container>
      <span>
        <h1>{title}</h1>
        <h2>{postsLength} Post</h2>
      </span>

      <div className="PostsWrapper">{children}</div>
    </Container>
  )
}
