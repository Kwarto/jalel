import React from 'react'
import { ProductWrapper, PRWrap} from './ProductElement'
function Product(props) {
  return (
    <>
      <ProductWrapper> 
        <img src={props.productImg} alt="" />
         <h1>{props.name}</h1>
         <p>{props.description}</p>
         <PRWrap>
          <h4>GH {props.price}</h4>
          <div>
           {props.rate}
           {props.rate}
           {props.rate}
           {props.rate}
          </div> 
         </PRWrap>
         <PRWrap>
         <button>{props.addCart}</button>
         <button>{props.talkWit}</button>
         </PRWrap>
      </ProductWrapper>
    </>
  )
}

export default Product