import React from 'react'
import shopBg from '../../images/shop-header.png'
import ShopBg2 from '../../images/nine.jpg'
import ShopBg3 from '../../images/one.jpg'
import {CarouselContainerText, CText, CarouselContainerImg} from './HeaderCarouselElement'
import {Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const slider = [
  {
    id: 1,
    sliderImg: shopBg,
    sliderText: 'Helping you find right home at right price'
  },
  {
    id: 2,
    sliderImg: ShopBg2,
    sliderText: 'Your future home is our priority'
  },
  {
    id: 3,
    sliderImg: ShopBg3,
    sliderText: 'Get a home at ease and affordable rate'
  }
]

function HeaderCarousel() {
  return (
    <>
     <Swiper className="slider"
      // install Swiper modules
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 7500,
        disableOnInteraction: false,
      }}
     >
     {
      slider.map(({id, sliderImg, sliderText}) => {
        return(
        <>
          <SwiperSlide className='col-md-2 sliderWrap' key={id}>
           <CarouselContainerImg>
            <img src={sliderImg} alt="" />
           </CarouselContainerImg>
           <CarouselContainerText>
            <CText>{sliderText}</CText>
           </CarouselContainerText>
          </SwiperSlide>
        </>
        )
      })
     }
     </Swiper>
    </>
  )
}

export default HeaderCarousel