/* eslint-disable no-use-before-define */
import React, { ReactNode } from 'react'
import { useRouter } from 'next/dist/client/router'

import { Container } from '../styles/components/workComponent'
import Link from 'next/link'

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

          <p>{children}</p>
        </div>
      </Container>
    </Link>
  )
}
