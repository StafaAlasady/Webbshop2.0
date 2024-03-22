import React, { useContext } from 'react'
import './CSS/Explore.css'
import { ShopContext } from '../Context-api/ShopContext'
import ArrowDropDownLineIcon from 'remixicon-react/ArrowDropDownLineIcon'
import { Item } from '../Components/Item/Item'

export const Explore = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='explore-category'>
      <div className='explore-indexsort'>
        <p>
          <span>Showing 1-12</span> out of 56 products
        </p>
        <div className="explore-sort">
          sort by <ArrowDropDownLineIcon className='dropdown-icon'/>
        </div>
      </div>
      <div className="explore-products">
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
  );
};