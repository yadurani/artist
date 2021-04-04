import React, { useEffect, useRef } from 'react'
import Banner from '../components/Banner'
import BannerEnd from '../components/BannerEnd'
import FloatPlayer from '../components/Common/FloatPlayer'
import DownloadSongs from '../components/DownloadSongs'
import Filters from '../components/Filters'
import Information from '../components/Information'
import SoundTrack from '../components/SoundTracked'
import Uplifting from '../components/Uplifting'

const Home = () => {
  const topRef = useRef()
  useEffect(() => {
    topRef?.current.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <div ref={topRef}>
      <Banner />
      <DownloadSongs />
      <SoundTrack />
      <Uplifting />
      <Filters />
      <Information />
      <BannerEnd />
      <FloatPlayer />
    </div>
  )
}

export default Home
