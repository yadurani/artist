import React from 'react'
import data from '../../constants/initialState'
import {
  DownloadImg,
  DownloadWrapper,
  SectionWrapper,
  SubHeader,
  DownloadItem,
} from './styles'
import { HeadlineBase } from '../Common/Text/Headline/styles'
import { Headline2 } from '../Common/Text/Headline'
import { Body1 } from '../Common/Text/Body'
import { BodyBase } from '../Common/Text/Body/styles'
import { TitleDownload } from '../Common/CompositeText'

const DownloadSongs = () => {
  return (
    <SectionWrapper>
      <SubHeader>
        <HeadlineBase as={Headline2} text={<TitleDownload />} />
        <BodyBase
          as={Body1}
          text="2020 was a challenging year but you kept creating. Here are some of your favorite songs this year"
        />
      </SubHeader>
      <DownloadWrapper>
        {data.songs?.map((song, i) => (
          <DownloadItem key={i}>
            <DownloadImg src={song.img} />
          </DownloadItem>
        ))}
      </DownloadWrapper>
    </SectionWrapper>
  )
}

export default DownloadSongs
