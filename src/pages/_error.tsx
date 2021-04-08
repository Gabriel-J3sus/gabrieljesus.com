/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { Container } from '../styles/pages/error'

interface ErrorPage {
  statusCode: number
}

const Error: NextPage<ErrorPage> = ({ statusCode }) => {
  const router = useRouter()

  function handleNavigateToHome() {
    router.replace('/')
  }

  return (
    <Container>
      <div className="contentWrapper">
        <h1>
          {statusCode
            ? `${statusCode} - An error occurred on server`
            : 'An error occurred on client'}
        </h1>

        <span className="typesAndData">
          <p className="tag">Error</p>
          <p>{statusCode} | Error</p>
        </span>

        <p>
          {statusCode
            ? 'Hey!! How are you doing? An error occured on our server, and a fix has already been started. Please return to home.'
            : 'An error occurred on client, please return to home'}
        </p>

        <button onClick={handleNavigateToHome}>Voltar para Home</button>
      </div>
    </Container>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404

  return {
    statusCode
  }
}

export default Error
