import React, { useContext } from 'react'
import { songs } from '../../constants/initialState'
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
import { AppContext } from '../../context/AppContext'

const DownloadSongs = () => {
  const {
    playingAudio,
    hasPlaying,
    state: { mediaCurrent },
    songsRef,
  } = useContext(AppContext)

  const playMedia = (song) => () => playingAudio(song)
  const isPlaying = (song) => song?.id === mediaCurrent.id

  return (
    <SectionWrapper ref={songsRef}>
      <SubHeader>
        <HeadlineBase as={Headline2} text={<TitleDownload />} />
        <BodyBase
          as={Body1}
          text="2020 was a challenging year but you kept creating. Here are some of your favorite songs this year"
        />
      </SubHeader>
      <DownloadWrapper>
        {songs?.map((song) => (
          <DownloadItemWrapper key={song.id}>
            <DownloadSongsItem
              {...song}
              onClick={playMedia(song)}
              hasPlaying={isPlaying(song) && hasPlaying}
            />
          </DownloadItemWrapper>
        ))}
      </DownloadWrapper>
    </SectionWrapper>
  )
}

export default DownloadSongs
