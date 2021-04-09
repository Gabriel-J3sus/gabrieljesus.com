/* eslint-disable no-use-before-define */
import React from 'react'
import Link from 'next/link'

import { ProjectDataProps } from '../types/ProjectsPostProps'

import { CardDetailsComponent } from './SmallerComponents'

import { Container } from '../styles/components/workComponent'

export const Work: React.FC<ProjectDataProps> = ({
  slug,
  title,
  year,
  type,
  image,
  description
}) => {
  return (
    <Link href={`/work/${slug}`}>
      <Container>
        <img
          // src={theme.title === 'dark' ? darkImage : lightImage}
          src={image}
          alt={title}
        />

        <div className="description">
          <h2>{title}</h2>

          <CardDetailsComponent year={year} type={type} tagColor="normal" />

          <p>{description}</p>
        </div>
      </Container>
    </Link>
  )
}
