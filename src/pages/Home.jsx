import React, { useState } from 'react'
import Intro from '../components/Intro'
import Photo_gallery from '../components/Photo_gallery'
import Bride_Groom from '../components/Bride_Groom'
import Location from '../components/Location'
import Social_Sharing from '../components/Social_Sharing'
import Footer from '../components/Footer'
import Count_Down from '../components/Count_Down'
import MusicPlayer from '../components/MusicPlayer'

import OpeningScreen from '../components/OpenScreen'


const Home = () => {
  const [open, setOpen] = useState(false);


   return(
        <div className='Home'>

      {/* Show Opening Screen First */}
      {!open && <OpeningScreen onOpen={() => setOpen(true)} />}

      {/* Show Main Website Only After Opening */}
      {open && (
        <div className="Home-page">
          <Intro/>
          <Bride_Groom/>
          <Location/>
          <Count_Down/>
          <Photo_gallery/>
          <Social_Sharing/>
          <Footer/>
          <MusicPlayer/>
        </div>
      )}

    </div>
   )
}

export default Home