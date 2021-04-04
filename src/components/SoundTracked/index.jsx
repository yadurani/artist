import React from 'react'
import { ParagraphSound } from '../Common/CompositeText'
import { Body1 } from '../Common/Text/Body'
import { BodyBase } from '../Common/Text/Body/styles'
import { Headline2 } from '../Common/Text/Headline'
import { HeadlineBase } from '../Common/Text/Headline/styles'
import {
  SoundTrackBg,
  SoundTrackImages,
  SoundTrackImg,
  SoundTrackPicture,
  SoundTrackRight,
  SoundTrackSource,
  SoundTrackText,
  SoundTrackWrapper,
} from './styles'

const SoundTrack = () => {
  return (
    <SoundTrackWrapper>
      <SoundTrackText>
        <HeadlineBase
          as={Headline2}
          mb={5.5}
          text="Rex Banner soundtracked most of your videos"
        />
        <BodyBase as={Body1} text={<ParagraphSound />} mb={1.5} />
        <SoundTrackImages>
          <SoundTrackPicture>
            <SoundTrackSource srcset="images/card-4.jpg (max-width: 560px)" />
            <SoundTrackImg src="images/card-6.jpg" alt="Imagen 1" />
          </SoundTrackPicture>
          <SoundTrackPicture>
            <SoundTrackSource srcset="images/card-6.jpg (max-width: 560px)" />
            <SoundTrackImg src="images/card-5.jpg" alt="Imagen 1" />
          </SoundTrackPicture>
          <SoundTrackPicture>
            <SoundTrackImg src="images/card-1.jpg" alt="Imagen 1" />
          </SoundTrackPicture>
        </SoundTrackImages>
      </SoundTrackText>
      <SoundTrackRight>
        <SoundTrackBg>
          <SoundTrackImg src="images/elipse-soundtrack.png" />
        </SoundTrackBg>
      </SoundTrackRight>
    </SoundTrackWrapper>
  )
}

export default SoundTrack
