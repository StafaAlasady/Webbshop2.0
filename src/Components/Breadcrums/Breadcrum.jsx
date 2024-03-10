import React from 'react'
import './Breadcrum.css'
import ArrowRightSIcon from 'remixicon-react/ArrowRightSLineIcon'

export const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <ArrowRightSIcon /> SHOP <ArrowRightSIcon/>{product.name}
    </div>
  )
}
