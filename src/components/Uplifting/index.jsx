import React from 'react'
import { uplifting } from '../../constants/initialState'
import { SubtitleUplifting } from '../Common/CompositeText'
import { Body1 } from '../Common/Text/Body'
import { BodyBase } from '../Common/Text/Body/styles'
import { Headline2, HeadlineOutline2 } from '../Common/Text/Headline'
import { HeadlineBase } from '../Common/Text/Headline/styles'
import {
  UpliftingGallery,
  UpliftingGalleryImg,
  UpliftingGalleryWrapper,
  UpliftingHead,
  UpliftingWrapper,
} from './styles'

const Uplifting = () => (
  <UpliftingWrapper>
    <UpliftingHead>
      <HeadlineBase
        as={Headline2}
        text="You created a lot of Uplifting videos this year"
      />
      <BodyBase as={Body1} text={<SubtitleUplifting />} />
    </UpliftingHead>
    <UpliftingGallery>
      <HeadlineBase as={HeadlineOutline2} text="Uplifting" />
      <UpliftingGalleryWrapper>
        {uplifting?.map((post, i) => (
          <UpliftingGalleryImg src={post.img} key={i} />
        ))}
      </UpliftingGalleryWrapper>
    </UpliftingGallery>
  </UpliftingWrapper>
)

export default Uplifting
