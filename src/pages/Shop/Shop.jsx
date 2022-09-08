import React from 'react'
import HeaderCarousel from '../../components/HeaderCarousel/HeaderCarousel'
import Offers from '../../sections/Offers/Offers'
import {ShopWrapper} from './ShopElement'
function Shop() {
  return (
    <>
     <HeaderCarousel />
     <Offers />
     <ShopWrapper>
     </ShopWrapper>
    </>
  )
}

export default Shop