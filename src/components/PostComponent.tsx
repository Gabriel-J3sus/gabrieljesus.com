import React from 'react'
import Link from 'next/link'

import { BlogDataProps } from '../types/BlogPostsProps'

import { Container } from '../styles/components/postComponent'
import { BlogPostDetailsComponent } from './SmallerComponents'

export const Post: React.FC<BlogDataProps> = ({
  slug,
  title,
  formatedDate,
  type,
  description
}) => {
  return (
    <Link href={`/blog/${slug}`}>
      <Container>
        <h2>{title}</h2>

        <BlogPostDetailsComponent formatedDate={formatedDate} type={type} />

        <p>{description}</p>
      </Container>
    </Link>
  )
}
