import React from 'react'
import useIntersection from '../../hooks/useIntersection'
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
  const [show, el] = useIntersection()
  return (
    <SoundTrackWrapper ref={el}>
      <SoundTrackText>
        <HeadlineBase
          as={Headline2}
          mb={5.5}
          text="Rex Banner soundtracked most of your videos"
        />
        <BodyBase as={Body1} text={<ParagraphSound />} mb={1.5} />
        <SoundTrackImages>
          <SoundTrackPicture>
            <SoundTrackSource
              srcset="images/card-4.jpg (max-width: 560px)"
              alt="Imagen 1"
            />
            <SoundTrackImg src="images/card-6.jpg" alt="Imagen 1" />
          </SoundTrackPicture>
          <SoundTrackPicture>
            <SoundTrackSource
              srcset="images/card-6.jpg (max-width: 560px)"
              alt="Imagen 2"
            />
            <SoundTrackImg src="images/card-5.jpg" alt="Imagen 2" />
          </SoundTrackPicture>
          <SoundTrackPicture>
            <SoundTrackImg src="images/card-1.jpg" alt="Imagen 3" />
          </SoundTrackPicture>
        </SoundTrackImages>
      </SoundTrackText>
      <SoundTrackRight>
        <SoundTrackBg show={show}>
          <SoundTrackImg src="images/elipse-soundtrack.png" alt="Imagen 4" />
        </SoundTrackBg>
      </SoundTrackRight>
    </SoundTrackWrapper>
  )
}

export default SoundTrack
