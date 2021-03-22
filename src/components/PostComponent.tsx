/* eslint-disable no-use-before-define */
import React from 'react'

import { Container } from '../styles/components/postComponent'

export const Post: React.FC = () => {
  return (
    <Container>
      <h2>Criando um blog com Nextjs</h2>

      <p className="dateAndTime"> 18 Mar 2021 | Development </p>

      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
    </Container>
  )
}
