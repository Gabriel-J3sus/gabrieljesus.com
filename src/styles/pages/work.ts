import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;

  padding-top: 6.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

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

    > .worksContainer {
      display: grid;
      grid-template-rows: auto;
      grid-template-columns: 1fr;
      grid-gap: 2rem;
    }
  }
`
