import React from 'react'
import Bride_Img from '../assets/Images/Gallery/couple_Img1.png'
import Photo_gallery from './Photo_gallery'
import video from '../assets/video/vinod.mp4'

const Bride_Groom = () => {
  return (
    <div className="Bride_Groom">
        <h2>Bride and Groom</h2>

        {/* Bride */}
        <div className="Bride">
            <img src={Bride_Img} alt="" /><br />
            <h3>Ayesha</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum cumque delectus neque expedita facere aliquid animi, voluptatibus voluptatem placeat reprehenderit tempore, doloribus dolorum quaerat, dignissimos vel pariatur officiis in assumenda.</p>
        </div>

        {/* Groom */}
        <div className="Bride">
            <img src={Bride_Img} alt="" /><br />
            <h3>Imran</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum cumque delectus neque expedita facere aliquid animi, voluptatibus voluptatem placeat reprehenderit tempore, doloribus dolorum quaerat, dignissimos vel pariatur officiis in assumenda.</p>
        </div>

        {/* Video */}
        <div className="Video-Player">
             <video controls autoPlay muted loop>
                <source src={video} type="video/mp4" />
                Your browser does not support video.
            </video>
        </div>
       
       {/* Photo Gallery */}
       <Photo_gallery/>

       {/* Best Wishes */}
       <div className="Best_wishes">
        <h2>Best Wishes</h2>
        <div className="Greethings">
            <p>Dr.Shyam Sundher</p>
            <p>Mr.Henry</p>
            <p>Mr.Benjimen adward</p>
            <p>Mr.Devid</p>
        </div>
       </div>

    </div>
  )
}

export default Bride_Groom