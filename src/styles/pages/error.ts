import styled from 'styled-components'
import { h1FontStyles, pagesStyles } from '../variables'

export const Container = styled.div`
  ${pagesStyles};

  > .contentWrapper {
    max-width: 855px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.5rem;

    > h1 {
      margin-bottom: 1rem;
      ${h1FontStyles}
    }

    > p {
      margin-bottom: 2rem;
    }
  }
`
