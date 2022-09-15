import React from 'react'
import IMG1 from '../../images/house-1.png'
import IMG2 from '../../images/house-3.png'
import IMG3 from '../../images/house-4.png'
import IMG4 from '../../images/image-s4.png'
import { PopSalesWrapper, PopSaleHeader, PopSaleItem, CartIcon, PopCate, PopSaleImg, PRWrapper, Price, Rate, PopCaption} from './PopularSalesElement'
import {FaShoppingCart, FaStar, FaStarHalf} from 'react-icons/fa'
function PopularSales() {
  return (
    <>
    <PopSaleHeader>Popular Sales</PopSaleHeader>
     <PopSalesWrapper className='col-md-4'>
      <PopSaleItem>
      <PopCate>BUNGALOW</PopCate>
      <PopSaleImg>
          <img src={IMG4} alt=''/>
      </PopSaleImg>
        <CartIcon><FaShoppingCart /></CartIcon>
       <PRWrapper>
       <Price>GH 100, 200, 00</Price>
       <Rate>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalf />
       </Rate>
       </PRWrapper>
      <PopCaption>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium magni laudantium esse, aperiam debitis voluptatum!</PopCaption>
      </PopSaleItem>
      <PopSaleItem>
      <PopCate>SKYSCRAPERS</PopCate>
      <PopSaleImg>
          <img src={IMG1} alt="" />
      </PopSaleImg>
        <CartIcon><FaShoppingCart /></CartIcon>
       <PRWrapper>
       <Price>GH 100, 200, 00</Price>
       <Rate>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalf />
       </Rate>
       </PRWrapper>
      <PopCaption>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium magni laudantium esse, aperiam debitis voluptatum!</PopCaption>
      </PopSaleItem>
      <PopSaleItem>
      <PopCate>2 BEDROOM</PopCate>
      <PopSaleImg>
          <img src={IMG2} alt="" />
      </PopSaleImg>
        <CartIcon><FaShoppingCart /></CartIcon>
       <PRWrapper>
       <Price>GH 100, 200, 00</Price>
       <Rate>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalf />
       </Rate>
       </PRWrapper>
      <PopCaption>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium magni laudantium esse, aperiam debitis voluptatum!</PopCaption>
      </PopSaleItem>
      <PopSaleItem>
      <PopCate>APARTMENT</PopCate>
      <PopSaleImg>
          <img src={IMG3} alt="" />
      </PopSaleImg>
        <CartIcon><FaShoppingCart /></CartIcon>
       <PRWrapper>
       <Price>GH 100, 200, 00</Price>
       <Rate>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalf />
       </Rate>
       </PRWrapper>
      <PopCaption>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium magni laudantium esse, aperiam debitis voluptatum!</PopCaption>
      </PopSaleItem>
     </PopSalesWrapper>
    </>
  )
}

export default PopularSales