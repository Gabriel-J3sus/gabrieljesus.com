import styled from 'styled-components'
import { pagesStyles } from '../variables'

export const Container = styled.div`
  ${pagesStyles}

  > .contentWrapper {
    max-width: 855px;
    width: 100%;

    display: flex;
    flex-direction: column;

    padding: 0 1.5rem;

    > h1 {
      margin-bottom: 1rem;

      font-size: 1.8rem;
      font-weight: 700;
      line-height: 3.75rem;
    }

    > span {
      display: flex;

      margin: 1rem 0 1rem;

      > p {
        color: #8695a4;
      }
      > .tag {
        width: 3.8rem;
        height: 1.5rem;

        margin-right: 1.25rem;

        display: flex;
        align-items: center;
        justify-content: center;

        background: ${props => props.theme.colors.buttonBackground};
        color: #fff;
        border-radius: 1rem;
        font-weight: 900;
      }
    }

    > .content {
      font-size: 1rem;
      font-weight: 400;
      line-height: 23px;

      color: ${props => props.theme.colors.primary};
    }
  }
`
