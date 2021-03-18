import styled, { css } from 'styled-components'
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineTwitter
} from 'react-icons/ai'

export const Container = styled.footer`
  bottom: 0;

  width: 100%;
  height: 11.3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${props => props.theme.colors.background};

  .iconContainer {
    margin-bottom: 1.6rem;
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

export const Facebook = styled(AiFillFacebook)`
  ${icon}
`

export const Instagram = styled(AiFillInstagram)`
  ${icon}
`

export const Twitter = styled(AiOutlineTwitter)`
  ${icon}
`
