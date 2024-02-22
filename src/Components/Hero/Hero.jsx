import React from 'react'
import './Hero.css'
import HomeHeartlineIcon from 'remixicon-react/HomeHeartLineIcon'
import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon'
import Astronoutfloating from '../Assets/Astronout-floating(1).png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="home-heart-icon">
                    <p>New</p>
                    <HomeHeartlineIcon className='home-icon-properties'/>
                </div>
                <p>Collection</p>
            </div>
            <div className='hero-latest-button'>
                <div>Latest</div>
                <ArrowRightLineIcon/>
            </div>
        </div>
        <div className="hero-right">
        <img className='hero-astronout-floating' src={Astronoutfloating} alt=''/>
        </div>
    </div>
  )
}
