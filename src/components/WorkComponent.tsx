/* eslint-disable no-use-before-define */
import React, { ReactNode } from 'react'
import { useRouter } from 'next/dist/client/router'

import { Container } from '../styles/components/workComponent'

interface WorkProps {
  slug: string
  title: string
  year: string
  type: string
}

export const Work: React.FC<WorkProps> = ({
  slug,
  title,
  year,
  type,
  children
}) => {
  const router = useRouter()

  function handlenavigateToProjectPost() {
    return router.push(`/work/${slug}`)
  }

  return (
    <Container onClick={handlenavigateToProjectPost}>
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

        <p>{children}</p>
      </div>
    </Container>
  )
}
