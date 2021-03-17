import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: ${props => props.theme.colors.background};
  }
  
  body, input, button, textarea {
    font: 400 1rem 'Heebo', sans-serif;
    color: ${props => props.theme.colors.primary};
  }

  a {
    text-decoration: none;
  }
`
