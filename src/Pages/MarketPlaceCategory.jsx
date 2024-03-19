import React, { useContext } from 'react'
import './CSS/MarketplaceCategory.css'
import { ShopContext } from '../Context-api/ShopContext'
import ArrowDropDownLineIcon from 'remixicon-react/ArrowDropDownLineIcon'
import { Item } from '../Components/Item/Item'

export const MarketPlaceCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='marketplace-category'>
      <img src={props.banner} className='marketplacebanner' alt=''/>
      <div className='MarketPlaceCategory-indexsort'>
        <p>
          <span>Showing 1-12</span> out of 56 products
        </p>
        <div className="marketplacecategory-sort">
          sort by <ArrowDropDownLineIcon className='dropdown-icon'/>
        </div>
      </div>
      <div className="MarketPlaceCategory-products">
        {all_product.map((item,i)=>{
          if (props.Category===item.Category){
            return <Item key={i}
             id={item.id} 
             name={item.name} 
             image={item.image} 
             new_price={item.new_price} 
             old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="MarketPlaceCategory-loadmore">
        Explore More
      </div>
    </div>
  )
}
