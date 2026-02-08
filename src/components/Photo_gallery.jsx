import React from 'react'
import couple_Img1 from '../assets/Images/Gallery/couple_Img1.png'
import couple_Img2 from '../assets/Images/Gallery/couple_Img2.png'
import couple_Img3 from '../assets/Images/Gallery/couple_Img3.png'
import couple_Img4 from '../assets/Images/Gallery/couple_Img4.png'
import couple_Img5 from '../assets/Images/Gallery/couple_Img5.png'
import LightGallery from "lightgallery/react";

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

const data = [
    { imgSrc : couple_Img1},
    { imgSrc : couple_Img2},
    { imgSrc : couple_Img3},
    { imgSrc : couple_Img4},
    { imgSrc : couple_Img5},,
]



const Photo_gallery = () => {
  return (
    <div className="Photo_gallery">
        <h2 data-aos="fade-up">Photo Gallery</h2>
        <div className="Gallery" data-aos="fade-up">
             <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}

             >
                {
                 data.map((item,index) => {
                    return(
                        <a className='Pics' href={item.imgSrc} key={index}>
                            <img src={item.imgSrc} alt="" />
                        </a>
                    )
                 })
                }
             </LightGallery>
        </div>
    </div>
  )
}

export default Photo_gallery