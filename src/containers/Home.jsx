import React from 'react'
import Banner from '../components/Banner'
import BannerEnd from '../components/BannerEnd'
import FloatPlayer from '../components/Common/FloatPlayer'
import DownloadSongs from '../components/DownloadSongs'
import Filters from '../components/Filters'
import Information from '../components/Information'
import SoundTrack from '../components/SoundTracked'
import Uplifting from '../components/Uplifting'

const Home = () => {
  return (
    <>
      <Banner />
      <DownloadSongs />
      <SoundTrack />
      <Uplifting />
      <Filters />
      <Information />
      <BannerEnd />
      <FloatPlayer />
    </>
  )
}

export default Home
