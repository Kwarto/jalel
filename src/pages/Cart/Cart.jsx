import React from 'react'
import {CartWrapper, CartContentWrapper, CartItemColWrapper, ColItemsHead, Heading, ColItemsInCart, CartItemSubTotalWrapper} from './CartElement'
function Cart() {
  return (
   <>
     <CartWrapper>
     <CartContentWrapper>
      <CartItemColWrapper>
        <ColItemsHead>
         <Heading>Product</Heading>
         <Heading>Price</Heading>
         <Heading>Quantity</Heading>
         <Heading>SubTotal</Heading>
         <Heading>Destroy</Heading>
        </ColItemsHead>
        <ColItemsInCart>
        </ColItemsInCart>
      </CartItemColWrapper>
      <CartItemSubTotalWrapper>
      
      </CartItemSubTotalWrapper>
     </CartContentWrapper>
    </CartWrapper>
   </>
  )
}

export default Cart