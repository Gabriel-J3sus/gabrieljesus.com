import { css } from 'styled-components'

export const pagesStyles = css`
  width: 100vw;

  padding-top: 6.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const h1FontStyles = css`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 3rem;

  @media (min-width: 850px) {
    font-size: 2.75rem;
  }
`

export const h2FontStyles = css`
  font-size: 1.5rem;
  font-weight: 500;
`

export const h3FontStyles = css`
  font-size: 1.1rem;
  font-weight: 400;

  @media (min-width: 850px) {
    font-size: 1.3rem;
  }
`

export const icon = css`
  width: 1.8rem;
  height: 1.8rem;
  flex-shrink: 0;
`
