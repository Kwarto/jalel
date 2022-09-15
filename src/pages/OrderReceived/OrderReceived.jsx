import React from 'react'
import {OrderReceivedWrapper, OrderResponseWrapper, OrderSuccessNote} from './OrderReceivedElement'
import {FaCheck} from 'react-icons/fa'
function OrderReceived() {
  return (
    <>
      <OrderReceivedWrapper>
         <OrderResponseWrapper className='container'>
           <FaCheck className='check'/>
           <OrderSuccessNote>
             <h1>Thank You !!</h1>
             <h3>Your Order has been received successfully</h3>
           </OrderSuccessNote>
         </OrderResponseWrapper>
      </OrderReceivedWrapper>
    </>
  )
}

export default OrderReceived