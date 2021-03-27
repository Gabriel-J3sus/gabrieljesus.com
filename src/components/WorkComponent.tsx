/* eslint-disable no-use-before-define */
import React from 'react'
import Link from 'next/link'

import { ProjectDataProps } from '../types/ProjectsPostProps'
import { Container } from '../styles/components/workComponent'

export const Work: React.FC<ProjectDataProps> = ({
  slug,
  title,
  year,
  type,
  description
}) => {
  return (
    <Link href={`/work/${slug}`}>
      <Container>
        <img
          src="https://github.com/Gabriel-J3sus.png"
          alt="Gabriel Araújo de Jesus"
        />

        <div className="description">
          <h2>{title}</h2>

          <span className="typesAndData">
            <p className="tag">{year}</p>
            <p>{type}</p>
          </span>

          <p>{description}</p>
        </div>
      </Container>
    </Link>
  )
}
