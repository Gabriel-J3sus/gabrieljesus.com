import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    overflow-y: auto;
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

  body::-webkit-scrollbar {
    width: 0.5rem;
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.shadows};
    border-radius: 10px;
  }
  body::-webkit-scrollbar-track {
    background-color: transparent;
  }
`
