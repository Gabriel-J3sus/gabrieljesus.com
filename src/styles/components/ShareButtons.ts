import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  margin-top: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  //react-share creates components using buttons
  button {
    display: flex;
    justify-content: center;
  }

  button:not(:first-child) {
    margin-left: 0.75rem;
  }
`
