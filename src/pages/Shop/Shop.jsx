import React from 'react'
import HeaderCarousel from '../../components/HeaderCarousel/HeaderCarousel'
import PopularSales from '../../components/HomeSales/PopularSales'
import Offers from '../../sections/Offers/Offers'
import Product from '../../sections/Products/Product'
import Testimonials from '../../sections/Testimonials/Testimonials'
import proImg from '../../images/seven.jpg'
import {FaComment, FaShoppingCart, FaStar} from 'react-icons/fa'
import{
  ShopWrapper,ShopItemWrapper, ProductCard, 
  CardItems, ProductFilter, 
  FilterSelector,ShopSky,
  SkyList,ShopHeading,
  Selectors, BungCate,
} from './ShopElement'
function Shop() {
  return (
    <>
     <HeaderCarousel />
     <Offers />
     <ShopWrapper>
     <ShopItemWrapper>
        <ProductCard className='col-md-3'>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
        </ProductCard>
        <ProductFilter>
          <ShopHeading>Product Category</ShopHeading>
          <FilterSelector>
            <Selectors>
               <h1>Bungalow</h1>
               <BungCate>
                 Un-going  Bungalow
               </BungCate>
               <BungCate>
                  Finished Bungalows
               </BungCate>
               <BungCate>
                 Out For Sale  Bungalow
               </BungCate>
            </Selectors>
            <Selectors>
               <h1>Skyscrapers</h1>
               <BungCate>
                 Un-going  Bungalow
               </BungCate>
               <BungCate>
                  Finished Bungalows
               </BungCate>
               <BungCate>
                 Out For Sale  Bungalow
               </BungCate>
            </Selectors>
            <Selectors>
               <h1>2 Bed Room</h1>
               <BungCate>
                 Un-going  Bungalow
               </BungCate>
               <BungCate>
                  Finished Bungalows
               </BungCate>
               <BungCate>
                 Out For Sale  Bungalow
               </BungCate>
            </Selectors>
            <Selectors>
               <h1>Full Apartment</h1>
               <BungCate>
                 Un-going  Bungalow
               </BungCate>
               <BungCate>
                  Finished Bungalows
               </BungCate>
               <BungCate>
                 Out For Sale  Bungalow
               </BungCate>
            </Selectors>
          </FilterSelector>
        </ProductFilter>
      </ShopItemWrapper>
     </ShopWrapper>
     <PopularSales />
     <ShopSky>
       <h1>New Listening</h1>
        <SkyList>
        <ProductCard  className='col-md-4'>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
          <CardItems>
          <Product
          productImg={proImg}
          name='Bungalow'
          description='lorem ipsum suite amet consecturture' 
          price='100, 500, 000'
          rate={<FaStar />}
          addCart={<FaShoppingCart/>}
          talkWit={<FaComment/>}
          />
          </CardItems>
        </ProductCard>
        </SkyList>
      </ShopSky>
     <Testimonials />
    </>
  )
}

export default Shop
