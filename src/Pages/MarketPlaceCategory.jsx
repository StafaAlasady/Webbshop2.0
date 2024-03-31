import React, { useContext, useEffect, } from 'react'
import './CSS/MarketplaceCategory.css'
import { ShopContext } from '../Context-api/ShopContext'
import ArrowDropDownLineIcon from 'remixicon-react/ArrowDropDownLineIcon'
import { Item } from '../Components/Item/Item'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle'


export const MarketPlaceCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  useEffect(() => {
    console.log('Swiper initialized');
    // Initialize Swiper after component mounts
    Swiper.use([Navigation, Pagination])
    const swiper = new Swiper('.tranding-slider', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 4, // Display 4 slides per view
      spaceBetween: 70, // Add space between slides
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    // Destroy Swiper instance when component unmounts
    return () => {
      swiper.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div className='marketplace-category'>
      <img src={props.banner} className='marketplacebanner' alt='' />
      <div className='MarketPlaceCategory-indexsort'>
        <p>
          <span>Showing 1-12</span> out of {all_product.length} products
        </p>
        <div className="marketplacecategory-sort">
          sort by <ArrowDropDownLineIcon className='dropdown-icon' />
        </div>
      </div>
      {/* Start of the slide section */}
      <section id='tranding'>
        <div className="container">
          <h3 className='text-center section-subheading'>- popular products -</h3>
        </div>
        <div className="container">
          <div className="swiper tranding-slider">
            <div className="swiper-wrapper">
              {/* Render all products fetched from the backend */}
              {all_product.map(product => (
                <div className="swiper-slide tranding-slide" key={product.id}>
                  <div className="tranding-slide-img">
                    <Item
                      id={product.id}
                      name={product.name}
                      image={product.image}
                      new_price={product.new_price}
                      old_price={product.old_price}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="tranding-slider-control">
        <div className="swiper-button-prev slider-arrow">
          <ArrowLeftSLineIcon className='ico arrow-back-outline'/>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ArrowRightSLineIcon className='ico arrow-forward-outline'/>
        </div>
        <div className="swiper-pagination"></div>
      </div>
      {/* End of the slide section */}
      <div className="MarketPlaceCategory-loadmore">
        Explore More
      </div>
    </div>
  );
};