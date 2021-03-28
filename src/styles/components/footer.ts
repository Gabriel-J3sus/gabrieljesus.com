import styled from 'styled-components'
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { icon } from '../variables'

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

export const Github = styled(AiFillGithub)`
  ${icon};
  fill: ${props => props.theme.colors.primary};
`

export const Instagram = styled(AiFillInstagram)`
  ${icon};
  margin-left: 2.1rem;
  fill: ${props => props.theme.colors.primary};
`
