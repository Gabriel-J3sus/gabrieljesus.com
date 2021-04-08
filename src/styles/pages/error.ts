import styled from 'styled-components'
import { pagesStyles } from '../variables'

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
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 3rem;
    }
    > span {
      display: flex;
      margin: 1rem 0 1.4rem;
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
    > button {
      width: 13rem;
      height: 2.9rem;
      margin-top: 1.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 2px;
      background: ${props => props.theme.colors.buttonBackground};
      font-size: 1.25rem;
      font-weight: 500;
      color: #fff;
      transition: 0.2s;
      &:hover {
        filter: brightness(0.9);
      }
    }
  }
  @media (min-width: 850px) {
    > .contentWrapper {
      > h1 {
        font-size: 2.5rem;
      }
      > button {
        margin-top: 2rem;
      }
    }
  }
`
