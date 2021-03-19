import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 1rem;

  border-bottom: 1px solid ${props => props.theme.colors.line};
  box-shadow: 1px -2px 10px ${props => props.theme.colors.shadows};

  transition: 0.2s;

  > img {
    width: 100%;
    height: 100%;
    margin-bottom: 1rem;

    border-radius: 6px;
  }

  > .description {
    display: flex;
    flex-direction: column;

    > h2 {
      font-size: 1.5rem;
      font-weight: 700;
    }

    > span {
      display: flex;

      margin: 1rem 0 1.5rem;

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

        background: ${props => props.theme.colors.tagBackground};
        color: #fff;
        border-radius: 1rem;
        font-weight: 900;
      }
    }
  }

  @media (min-width: 440px) {
    flex-direction: row;
    padding-bottom: 0;

    > img {
      width: 15.3rem;
      height: 12rem;

      margin-right: 1rem;
    }

    > .description {
      > h2 {
        font-size: 1.3rem;
      }

      > span {
        margin: 0.5rem 0 1rem;
      }
    }
  }

  @media (min-width: 850px) {
    > .description {
      > h2 {
        font-size: 1.8rem;
      }

      > span {
        margin: 1rem 0 2rem;
      }
    }

    &:hover {
      opacity: 0.8;
      transform: translateY(-2px);
    }
  }
`
