import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import couples from '../assets/Images/couples/couples.png'


const Intro = () => {

    useEffect(() => {
    AOS.init({ duration: 1000 });
    }, []);

  return (
    <div className="Intro_Section">
        <div className="Deco_Images" >
            <img src={couples} alt="" />
        </div>
        <div className="Names" data-aos="fade-up">
            <p>Ayesha & Imran</p>
        </div>
        <div className="Details" data-aos="fade-up">
            <h2>Save the Date</h2>
            <div className="Event_details">
                <div className="Date">
                    <p>Saturday</p>
                    <p>15th April 2026</p>
                </div>
                <div className="Time">
                    <p>7 PM <br />
                       Onwards
                    </p>
                </div>
                <div className="Location">
                    <p>Royal archide,<br />
                       Banquet Hall.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro