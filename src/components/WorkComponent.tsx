/* eslint-disable no-use-before-define */
import React, { useContext } from 'react'
import Link from 'next/link'
import { ThemeContext } from 'styled-components'

import { ProjectDataProps } from '../types/ProjectsPostProps'
import { Container } from '../styles/components/workComponent'

export const Work: React.FC<ProjectDataProps> = ({
  slug,
  title,
  year,
  type,
  darkImage,
  lightImage,
  description
}) => {
  const theme = useContext(ThemeContext)

  return (
    <Link href={`/work/${slug}`}>
      <Container>
        <img
          src={theme.title === 'dark' ? darkImage : lightImage}
          alt={title}
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
