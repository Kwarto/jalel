import React from 'react'
import {CheckoutWrapper, CheckoutContainer, CheckoutList, BillingWrapper, YourOrderWrapper, OrderList, PaymentWrap} from './CheckoutElement'
function Checkout() {
  return (
    <CheckoutWrapper>
     <CheckoutContainer>
        <h1>Checkout</h1>
        <div>
          <p>Have a coupon ?</p>
          <small>Click here to enter</small>
        </div>
     </CheckoutContainer>
     <CheckoutList className='col-md-2'>
       <BillingWrapper>
        <h2>Billing Details</h2>
        <form action="/" method="post">
          <div>
            <input type="text" name='firstName'  placeholder='First Name'/>
            <input type="text" name='lastName' placeholder='Last Name'/>
          </div>
          <input type="text" name='businessName' placeholder='Business Name (Optional)'/>
          <input type="text" name='country' placeholder='Enter Country'/>
          <input type="text" name='city' placeholder='Enter City / Town'/>
          <input type="text" name='streetAddress' placeholder='Enter Street Address'/>
          <input type="text" name='zip' placeholder='Enter Zip Code'/>
          <input type="text" name='country' placeholder='Enter Country'/>
          <input type="text" name='phone' placeholder='Enter Phone'/>
          <input type="email" name='email' placeholder='Enter Email'/>
        </form>
       </BillingWrapper>
       <YourOrderWrapper>
        <h2>Your Order</h2>
        <div>
          <h4>Product</h4>
          <h4>Subtotal</h4>
        </div>
        <OrderList>
          
        </OrderList>
        <PaymentWrap>
          <p>Cash on delivery</p>
          <p>Mobile Money</p>
        </PaymentWrap>
        <button>Place your oder</button>
       </YourOrderWrapper>
     </CheckoutList>
    </CheckoutWrapper>
  )
}

export default Checkout