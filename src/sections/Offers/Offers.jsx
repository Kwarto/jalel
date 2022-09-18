import React from 'react'
import {OfferWrapper, OfferList, OfferCat, OfferCaption, OfferBtn} from './OffersElement'
import OfferImg1 from '../../images/Vector.png'
import OfferImg2 from '../../images/Vector2.png'
import OfferImg3 from '../../images/Vector3.png'

const offer = [
  {
    id: 1,
    OfferImgSrc: OfferImg1,
    OfCat: 'Buy Home',
    OfCap: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum!',
    OfBtn: 'Get Home'
  },
  {
    id: 2,
    OfferImgSrc: OfferImg2,
    OfCat: 'Sell House',
    OfCap: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum!',
    OfBtn: 'Sell House'
  },
  {
    id: 3,
    OfferImgSrc: OfferImg3,
    OfCat: 'Rent Home',
    OfCap: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum!',
    OfBtn: 'Rent Now'
  }
]
function Offers() {
  return (
    <>
     <OfferWrapper className='container col-md-3'>
       {
        offer.map(({id, OfferImgSrc, OfCat, OfCap, OfBtn}) =>{
          return(
            <>
              <OfferList key={id}>
                <img src={OfferImgSrc} alt="" />
                <OfferCat>{OfCat}</OfferCat>
                 <OfferCaption>{OfCap}</OfferCaption>
                 <OfferBtn href="/error_page">{OfBtn}</OfferBtn>
              </OfferList>
            </>
          )
        })
       }
     </OfferWrapper>
    </>
  )
}

export default Offers