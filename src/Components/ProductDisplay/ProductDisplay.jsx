import React, { useContext } from 'react'
import './ProductDisplay.css'
import StarFill from 'remixicon-react/StarFillIcon'
import StarLine from 'remixicon-react/StarLineIcon'
import { ShopContext } from '../../Context-api/ShopContext'

export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <StarFill/>
                <StarFill/>
                <StarFill/>
                <StarFill/>
                <StarLine/>
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">KR{product.old_price}</div>
                <div className="productdisplay-right-price-new">KR{product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Inshalla walla you shall buy this product! IF you dont
                boogie man come and rape you at night and you will cry!
                become speedy gonzales and buy it right now!
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        </div>
    </div>
  )
}
