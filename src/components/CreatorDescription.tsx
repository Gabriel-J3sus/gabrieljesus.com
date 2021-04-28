/* eslint-disable no-use-before-define */
import React from 'react'

import { Container } from '../styles/components/creatorDescription'

export const CreatorDescription: React.FC = () => {
  // function handleCVDownload() {
  //   console.log('ok')
  // }

  return (
    <Container>
      <article className="avatarAndTec">
        <img
          src="https://github.com/Gabriel-J3sus.png"
          alt="Gabriel Araújo de Jesus"
        />
        <span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.javascript.com/"
          >
            <img src="icons/logo-javascript.svg" alt="Javascript" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://nodejs.org/en/"
          >
            <img src="icons/nodejs-icon.svg" alt="NodeJs" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.typescriptlang.org/"
          >
            <img src="icons/typescript.svg" alt="Typescript" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://reactjs.org/"
          >
            <img src="icons/react-2.svg" alt="ReactJs" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.mongodb.com/"
          >
            <img src="icons/mongodb-icon-1.svg" alt="Mongodb" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.postgresql.org/"
          >
            <img src="icons/postgresql.svg" alt="PostgreSQL" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.w3schools.com/css/"
          >
            <img src="icons/css-5.svg" alt="css3" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://code.visualstudio.com/"
          >
            <img src="icons/visual-studio-code-1.svg" alt="VSCode" />
          </a>
        </span>
      </article>

      <main className="description">
        <h1>Olá, eu sou o Gabriel, um desenvolvedor de softwares.</h1>
        <p>
          Bem-vindo ao meu blog. Aqui, eu compartilho alguns fatos interessantes
          do mundo da programação, e mostro os meus projetos mais importantes,
          com o objetivo de expor o meu crescimento como desenvolvedor.
        </p>

        {/* <ButtonComponent
          HandleButtonOnClickFunctions={handleCVDownload}
          title="Baixar currículo"
        /> */}
      </main>
    </Container>
  )
}
