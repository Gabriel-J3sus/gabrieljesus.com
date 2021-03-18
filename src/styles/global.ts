import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body {
    overflow-x: hidden;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
  }

  body, input, button, textarea {
    font: 400 1rem 'Heebo', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
  }

  html::-webkit-scrollbar {
    width: 0.5rem;
  }

  html::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.shadows};
    border-radius: 10px;
  }
  html::-webkit-scrollbar-track {
    background-color: transparent;
  }
`
