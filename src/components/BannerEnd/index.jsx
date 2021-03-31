import React from 'react'
import Button from '../Common/Button'
import { Body1 } from '../Common/Text/Body'
import { BodyBase } from '../Common/Text/Body/styles'
import { Headline1 } from '../Common/Text/Headline'
import { HeadlineBase } from '../Common/Text/Headline/styles'
import { BannerEndText, BannerEndWrapper } from './styles'

const BannerEnd = () => (
  <BannerEndWrapper>
    <HeadlineBase as={Headline1} text="2021" />
    <BannerEndText>
      <BodyBase
        as={Body1}
        text="Check out the best of 2020 collections"
        mb={1.5}
      />
      <Button text="Browse Collections" outline />
    </BannerEndText>
  </BannerEndWrapper>
)

export default BannerEnd
