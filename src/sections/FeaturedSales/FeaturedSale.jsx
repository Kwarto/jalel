import React from 'react'
import { FeaturedSaleWrapper, FeaturedWrapper, SalesListWrapper, SaleItem, PriceCate, LocDis} from './FeaturedSalesElement'

import SaleImg1 from '../../images/image-s4.png'
const Sales = [
    {
        id: 1,
        imgsrc: SaleImg1,
        price: '100, 200, 000,',
        cat: '2 Bedroom',
        loc: 'Kumasi, Ghana',
        dis: '28km'
    },
    {
        id: 2,
        imgsrc: SaleImg1,
        price: '100, 200, 000,',
        cat: '2 Bedroom',
        loc: 'Kumasi, Ghana',
        dis: '28km'
    },
    {
        id: 3,
        imgsrc: SaleImg1,
        price: '100, 200, 000,',
        cat: '2 Bedroom',
        loc: 'Kumasi, Ghana',
        dis: '28km'
    },
    {
        id: 4,
        imgsrc: SaleImg1,
        price: '100, 200, 000,',
        cat: '2 Bedroom',
        loc: 'Kumasi, Ghana',
        dis: '28km'
    },
    {
        id: 5,
        imgsrc: SaleImg1,
        price: '100, 200, 000,',
        cat: '2 Bedroom',
        loc: 'Kumasi, Ghana',
        dis: '28km'
    },
    {
        id: 6,
        imgsrc: SaleImg1,
        price: '100, 200, 000,',
        cat: '2 Bedroom',
        loc: 'Kumasi, Ghana',
        dis: '28km'
    }
]
function FeaturedSale() {
  return (
    <FeaturedSaleWrapper>
        <FeaturedWrapper className='container'>
          <h1>Featured Sales</h1>
          <SalesListWrapper className='col-md-3'>
             {
                Sales.map(({id, imgsrc, price, cat, loc, dis} )=>{
                    return(
                        <>
                         <SaleItem key={id}>
                            <img src={imgsrc} alt="" />
                            <PriceCate>
                             <h4>GH {price}</h4>
                             <h4>{cat}</h4>
                            </PriceCate>
                            <LocDis>
                             <h4>{loc}</h4>
                             <h4>{dis}</h4>
                            </LocDis>
                         </SaleItem>
                        </>
                    )
                })
             }
          </SalesListWrapper>
        </FeaturedWrapper>
    </FeaturedSaleWrapper>
  )
}

export default FeaturedSale