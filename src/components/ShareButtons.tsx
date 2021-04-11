/* eslint-disable no-use-before-define */
import React from 'react'
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from 'react-share'

import { ShareProps } from '../types/components/ShareButtonsProps'

import { Container } from '../styles/components/ShareButtons'

export const ShareButtons: React.FC<ShareProps> = ({
  url,
  title,
  description,
  source
}) => {
  return (
    <Container>
      <FacebookShareButton url={url}>
        <FacebookIcon size={30} round />
      </FacebookShareButton>

      <TelegramShareButton url={url} title={title}>
        <TelegramIcon size={30} round />
      </TelegramShareButton>

      <LinkedinShareButton
        url={url}
        title={title}
        summary={description}
        source={source}
      >
        <LinkedinIcon size={30} round />
      </LinkedinShareButton>

      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={30} round />
      </TwitterShareButton>

      <WhatsappShareButton url={url} title={title} separator=" ">
        <WhatsappIcon size={30} round />
      </WhatsappShareButton>

      <RedditShareButton url={url} title={title}>
        <RedditIcon size={30} round />
      </RedditShareButton>
    </Container>
  )
}
