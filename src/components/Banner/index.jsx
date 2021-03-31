import React from 'react'
import Button from '../Common/Button'
import { Headline1, Headline2, Headline3 } from '../Common/Text/Headline'
import { HeadlineBase } from '../Common/Text/Headline/styles'
import {
  BannerNumberBig,
  BannerWrapper,
  BannerText,
  BannerTextContent,
} from './styles'

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerNumberBig>
        <HeadlineBase as={Headline1} text="20" />
      </BannerNumberBig>
      <BannerText>
        <BannerTextContent>
          <HeadlineBase as={Headline3} text="2020" mt={0} secondary />
          <HeadlineBase as={Headline2} text="Your year as an Artlist Creator" />
          <Button text="PLAY" primary />
        </BannerTextContent>
      </BannerText>
    </BannerWrapper>
  )
}

export default Banner
