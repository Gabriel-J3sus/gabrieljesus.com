/* eslint-disable no-use-before-define */
import React from 'react'

import { Container } from '../styles/components/creatorDescription'

export const CreatorDescription: React.FC = () => {
  return (
    <Container>
      <img
        src="https://github.com/Gabriel-J3sus.png"
        alt="Gabriel Araújo de Jesus"
      />

      <div className="description">
        <h1>Olá, Eu sou Gabriel, Um curioso</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
          maiores vel aliquid minus cumque, voluptas saepe ipsam molestias.
          Animi ad eveniet amet corrupti eaque inventore labore voluptatum
          magnam quisquam sit.
        </p>

        {/* <button>Baixar currículo</button> */}
      </div>
    </Container>
  )
}
