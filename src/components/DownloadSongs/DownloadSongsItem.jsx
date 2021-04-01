import React from 'react'
import useNearScreen from '../../hooks/useNearScreen'
import ButtonPlay from '../Common/Play'
import { HeadlineOutline3 } from '../Common/Text/Headline'
import { HeadlineBase } from '../Common/Text/Headline/styles'
import { DownloadImg, DownloadItem, DownloadOverlay } from './styles'

const DownloadSongsItem = ({ img, title }) => {
  const [show, el] = useNearScreen()
  return (
    <DownloadItem ref={el}>
      {show && (
        <>
          <DownloadOverlay>
            <HeadlineBase as={HeadlineOutline3} text={title}></HeadlineBase>
            <ButtonPlay />
          </DownloadOverlay>
          <DownloadImg src={img} />
        </>
      )}
    </DownloadItem>
  )
}

export default DownloadSongsItem
