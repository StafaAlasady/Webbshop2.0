import React, { useContext, useEffect } from 'react'
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
    Swiper.use([Navigation,Pagination])
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

  // Find the specific product to display in the slider
  const product1 = all_product.find(item => item.id === 44);
  const product2 = all_product.find(item => item.id === 50);
  const product3 = all_product.find(item => item.id === 43);
  const product4 = all_product.find(item => item.id === 3);
  const product5 = all_product.find(item => item.id === 40);
  const product6 = all_product.find(item => item.id === 40);
  const product7 = all_product.find(item => item.id === 40);

  return (
    <div className='marketplace-category'>
      <img src={props.banner} className='marketplacebanner' alt='' />
      <div className='MarketPlaceCategory-indexsort'>
        <p>
          <span>Showing 1-12</span> out of 56 products
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
              {/* Render only the specific product in the slider */}
              <div className="swiper-slide tranding-slide">
                <div className="tranding-slide-img">
                  <Item id={product1.id}name={product1.name}image={product1.image}
                  new_price={product1.new_price}old_price={product1.old_price}/>
                </div>
              </div>
              <div className="swiper-slide tranding-slide">
                <div className="tranding-slide-img">
                  <Item id={product2.id}name={product2.name}image={product2.image}
                  new_price={product2.new_price}old_price={product2.old_price}/>
                </div>
              </div> 
              <div className="swiper-slide tranding-slide">
                <div className="tranding-slide-img">
                  <Item id={product3.id}name={product3.name}image={product3.image}
                  new_price={product3.new_price}old_price={product3.old_price}/>
                </div>
              </div>

              <div className="swiper-slide tranding-slide">
                <div className="tranding-slide-img">
                  <Item id={product4.id}name={product4.name}image={product4.image}
                  new_price={product4.new_price}old_price={product4.old_price}/>
                </div>
              </div>

              <div className="swiper-slide tranding-slide">
                <div className="tranding-slide-img">
                  <Item id={product5.id}name={product5.name}image={product5.image}
                  new_price={product5.new_price}old_price={product5.old_price}/>
                </div>
              </div>

              <div className="swiper-slide tranding-slide">
                <div className="tranding-slide-img">
                  <Item id={product6.id}name={product6.name}image={product6.image}
                  new_price={product6.new_price}old_price={product6.old_price}/>
                </div>
              </div> 

              <div className="swiper-slide tranding-slide">
                <div className="tranding-slide-img">
                  <Item id={product7.id}name={product7.name}image={product7.image}
                  new_price={product7.new_price}old_price={product7.old_price}/>
                </div>
              </div>
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