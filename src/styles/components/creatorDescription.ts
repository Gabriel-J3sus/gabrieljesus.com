import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 3.6rem;

  > .avatarAndTec {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > img {
      width: 10.6rem;
      height: 10.6rem;

      padding: 0.2rem;
      border: 2px solid ${props => props.theme.colors.line};

      margin-left: 0;

      border-radius: 100%;
    }

    > span {
      display: flex;
      justify-content: center;
      align-items: center;

      margin-top: 1.5rem;

      > a {
        display: flex;
        align-items: center;
        justify-content: center;

        &:not(:last-child) {
          margin-right: 0.5rem;
        }

        img {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }

  > .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h1 {
      max-width: 312px;
      margin-top: 2.1rem;

      text-align: center;
      font-size: 2rem;
      font-weight: 700;
    }

    > p {
      max-width: 312px;
      margin: 1.3rem 0;

      text-align: center;
    }

    > button {
      width: 13rem;
      height: 2.9rem;

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
    max-width: 855px;
    margin-bottom: 4.4rem;

    flex-direction: row-reverse;

    > .avatarAndTec {
      margin-left: 5.5rem;
      height: 100%;

      > img {
        width: 15rem;
        height: 15rem;
      }

      > span {
        > a {
          img {
            width: 1.7rem;
            height: 1.7rem;
          }
        }
      }
    }

    > .description {
      max-width: 506px;

      align-items: flex-start;

      > h1 {
        max-width: none;
        margin-top: 0;

        text-align: left;
        font-size: 2.75rem;
      }

      > P {
        max-width: none;
        margin: 2rem 0 2.3rem;

        text-align: left;
      }
    }
  }
`
