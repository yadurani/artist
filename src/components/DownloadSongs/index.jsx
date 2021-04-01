import React from 'react'
import data from '../../constants/initialState'
import {
  DownloadItemWrapper,
  DownloadWrapper,
  SectionWrapper,
  SubHeader,
} from './styles'
import { HeadlineBase } from '../Common/Text/Headline/styles'
import { Headline2 } from '../Common/Text/Headline'
import { Body1 } from '../Common/Text/Body'
import { BodyBase } from '../Common/Text/Body/styles'
import { TitleDownload } from '../Common/CompositeText'
import DownloadSongsItem from './DownloadSongsItem'

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
        {data?.songs?.map((song, i) => (
          <DownloadItemWrapper key={song.img + i}>
            <DownloadSongsItem {...song} />
          </DownloadItemWrapper>
        ))}
      </DownloadWrapper>
    </SectionWrapper>
  )
}

export default DownloadSongs
