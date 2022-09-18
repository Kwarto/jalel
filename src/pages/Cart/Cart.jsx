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
         <Heading>Update</Heading>
        </ColItemsHead>
        <ColItemsInCart>
        </ColItemsInCart>
      </CartItemColWrapper>
      <CartItemSubTotalWrapper>
         <div>
          <h1>SUBTOTAL</h1>
          <a href="/checkout">Checkout</a>
         </div>
      </CartItemSubTotalWrapper>
     </CartContentWrapper>
    </CartWrapper>
   </>
  )
}

export default Cart