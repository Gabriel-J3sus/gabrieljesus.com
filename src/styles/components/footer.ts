import styled, { css } from 'styled-components'
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'

export const Container = styled.footer`
  width: 100%;
  height: 11.3rem;

  margin-top: 2rem;

  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${props => props.theme.colors.background};

  > .iconContainer {
    margin-bottom: 1.6rem;
  }

  > p {
    text-align: center;
  }
`

const icon = css`
  width: 1.8rem;
  height: 1.8rem;
  fill: ${props => props.theme.colors.primary};
  flex-shrink: 0;

  margin-left: 2.1rem;
`

export const Github = styled(AiFillGithub)`
  ${icon};
  margin-left: 0;
`

export const Instagram = styled(AiFillInstagram)`
  ${icon}
`
