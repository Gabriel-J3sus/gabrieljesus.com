import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;

  padding-top: 6.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  > .contentWrapper {
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
        font-size: 1.8rem;
        font-weight: 700;
        line-height: 3rem;
      }

      > h2 {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 3rem;
        color: #8695a4;
      }
    }

    > .worksContainer {
      display: grid;
      grid-template-rows: auto;
      grid-auto-rows: 1fr;
      grid-template-columns: 1fr;
      grid-gap: 2rem;
    }
  }

  @media (min-width: 350px) {
    > .contentWrapper {
      > span {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`
