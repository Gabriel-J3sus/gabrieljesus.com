---
  title: 'Criando blog com Next.js e Typescript'
  date: '01-04-2021'
  year: '2021'
  type: 'Blog | Next.js + Typescript'
  darkImage: 'https://og-image.vercel.app/.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg&images=https%3A%2F%2Fcdn.worldvectorlogo.com%2Flogos%2Ftypescript.svg'
  lightImage: 'https://og-image.vercel.app/.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fremojansen%2Flogo.ts%40master%2Fts.svg'
  description: 'Com a necessidade de práticar o que estou aprendendo ultimamente em relação a Reactjs, Typescript, Next.js e Nodejs, decidi criar a minha primeira aplicação web, um blog.'
---

Com a necessidade de práticar o que estou aprendendo ultimamente em relação a Reactjs, Typescript, Next.js e Nodejs, decidi criar a minha primeira aplicação web, um blog. Com ele pretendo encarar os desafios de manter uma aplicação operando, e realizando melhorias conforme vou aprendendo.

<br />
<br />

<img src="../../.github/gabrjesus.png" alt="Gabrjesus.com" />

<br />
<br />

# Sobre o Projeto

<br />

Esse foi o meu primeiro grande projeto, feito totalmente por mim, onde eu consegui provar para mim mesmo, que tudo o que estou aprendendo não está sendo em vão.

<br />

O principal objetivo é explicar os meus projetos de maneira detalhada, e manter programadores inteirados com algumas notícias e atualizações do mundo da programação.

<br />
<br />

# Detalhes Técnicos

<br />

Feito com Next.js, o projeto é basicamente uma mistura de Reactjs com Styled-Components, e Typescript permitindo uma melhor organização do código.

<br />

Como o Next.js possui estrátegias de renderização atráves de um servidor Nodejs, isso tirou a necessidade da criação de um backend para rodar a minha aplicação, assim utilizei principalmente SSG (Server Side Generation) para apresentar o site inteiro para o usúario, de maneira estática, sem ter um carregamento do site em tempo real, desse modo ele é pré-renderizado atráves da build da aplicação.

<br />

Para apresentar os posts para os usuários, eu criei uma espécie de motor de leitura de arquivos .md (Markdown), os quais são leves e são utilizados principalmente para escrever textos. O motor foi feito com códigos apresentados na <a target="_blank" rel="noopener oreferrer" href="https://nextjs.org/learn/basics/create-nextjs-app">documentação</a> do Next.js.

<br />

## Técnologias:

<br />

- Javascript
- Typescript
- Next.js
- Styled-Components
- Remark e Remark-html
- Gray-matter
- Husky
- Eslint, Prettier, EditorConfig

<br />
<br />

# Desafios

<br />

Alguns dos principais desafios que passei foi a criação do motor de leitura de arquivos .md, e a configuração do Husky o qual permite realizar commits no github de maneira mais explicativa e detalhada.

<br />

Essa foi a primeira vez que utilizei o Eslint para a organização do projeto. Foi um pouco trabalhoso para configurar, mas premitiu que meu código ficasse muito mais legível, e explicativo.

<br />
<br />
<br />

### Código do projeto: <a target="_blank" rel="noopener oreferrer" href="https://github.com/Gabriel-J3sus/gabrieljesus.com"> gabrjesus.com </a>

