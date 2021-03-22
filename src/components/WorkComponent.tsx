/* eslint-disable no-use-before-define */
import React from 'react'

import { Container } from '../styles/components/workComponent'

export const Work: React.FC = () => {
  return (
    <Container>
      <img
        src="https://github.com/Gabriel-J3sus.png"
        alt="Gabriel Araújo de Jesus"
      />

      <div className="description">
        <h2>Designing Dashboards</h2>

        <span className="typesAndData">
          <p className="tag">2021</p>
          <p>Dashboard</p>
        </span>

        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </Container>
  )
}
