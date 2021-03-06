import styled from 'styled-components'
import { h1FontStyles } from '../variables'

export const Container = styled.article`
  max-width: 855px;
  width: 100%;

  min-height: 54vh;

  display: flex;
  flex-direction: column;

  padding: 0 1.5rem;

  > span {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    > h1 {
      ${h1FontStyles}
    }

    > h2 {
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 3rem;
      color: #8695a4;
    }
  }

  > .PostsWrapper {
    display: grid;
    grid-template-rows: auto;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }

  @keyframes up {
    from {
      opacity: 0;
      transform: translateY(35px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 350px) {
    > span {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      > h1 {
        font-size: 1.8rem;
        font-weight: 700;
        line-height: 3rem;
      }
    }
  }
`
