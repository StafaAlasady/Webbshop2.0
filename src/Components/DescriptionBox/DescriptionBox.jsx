import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
          <div className="descriptionbox-nav-box">Description</div>
          <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>

        <div className="descriptionbox-description">
          <p>An art website where youll spend most days scrolling through the beautiful art!</p>
             <p> you could choose the size of the art that will be delivered in a canva style!</p>
        </div>
    </div>
  )
}
