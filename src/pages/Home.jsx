import React from 'react'
import Intro from '../components/Intro'
import Photo_gallery from '../components/Photo_gallery'
import Bride_Groom from '../components/Bride_Groom'
import Location from '../components/Location'
import Social_Sharing from '../components/Social_Sharing'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='Home'>
      <div className="Home-page">
        <Intro/>
        <Bride_Groom/>
        <Location/>
        <Social_Sharing/>
        <Footer/>
      </div>

    </div>
  )
}

export default Home