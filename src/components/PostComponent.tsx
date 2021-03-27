/* eslint-disable no-use-before-define */
import React from 'react'

import { BlogDataProps } from '../types/BlogPostsProps'

import { Container } from '../styles/components/postComponent'

export const Post: React.FC<BlogDataProps> = ({
  slug,
  title,
  formatedDate,
  type,
  description
}) => {
  return (
    <Container>
      <h2>{title}</h2>

      <p className="dateAndTime">
        {formatedDate} | {type}
      </p>

      <p>{description}</p>
    </Container>
  )
}
