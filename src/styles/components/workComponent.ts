import styled from 'styled-components'
import { h2FontStyles } from '../variables'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 1rem;
  padding-right: 0.25rem;
  padding-left: 0.25rem;

  border-bottom: 1px solid ${props => props.theme.colors.line};
  box-shadow: 1px -2px 10px ${props => props.theme.colors.shadows};

  transition: 0.2s;
  cursor: pointer;

  > img {
    width: 100%;
    height: 100%;
    margin-bottom: 0.8rem;

    border-radius: 6px;
  }

  > .description {
    display: flex;
    flex-direction: column;

    > h2 {
      ${h2FontStyles}
      font-weight: 700;
    }
  }

  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
  }

  @media (min-width: 530px) {
    flex-direction: row;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0.5rem;

    > img {
      width: 15.3rem;
      height: 12rem;

      margin-right: 1rem;
    }

    > .description {
      > h2 {
        font-size: 1.1rem;
      }
    }
  }

  @media (min-width: 850px) {
    > .description {
      > h2 {
        font-size: 1.8rem;
      }
    }
  }
`
