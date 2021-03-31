import React from 'react'
import { TitleInformation } from '../Common/CompositeText'
import { Body1 } from '../Common/Text/Body'
import { BodyBase } from '../Common/Text/Body/styles'
import { Headline2 } from '../Common/Text/Headline'
import { HeadlineBase } from '../Common/Text/Headline/styles'
import { InformationWrapper } from './styles'

const Information = () => (
  <InformationWrapper>
    <BodyBase
      as={Body1}
      text="You grew as a creator, we grew together with you"
    />
    <HeadlineBase as={Headline2} text={<TitleInformation />} mt={2.5} />
  </InformationWrapper>
)

export default Information
