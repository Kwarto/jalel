import React from 'react'

import {TestimonialsWrapper, TestHeading, TestimonialListWrapper, ListItems, Items} from './TestimonialsElement'

import TestImg from '../../images/user.png'

function Testimonials() {
  return (
    <>
      <TestimonialsWrapper>
         <TestHeading>OUR CLIENTS SAY !!</TestHeading>
        <TestimonialListWrapper className='container col-md-2'>
           <ListItems>
             <Items>
                <img src={TestImg} alt="Clients on testimonial profile" />
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam minima consectetur, libero rem cumque tempora!
                </p>
             </Items>
             <strong>Evans Hills</strong>
           </ListItems>
           <ListItems>
             <Items>
                <img src={TestImg} alt="Clients on testimonial profile" />
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam minima consectetur, libero rem cumque tempora!
                </p>
             </Items>
             <strong>Evans Hills</strong>
           </ListItems>
        </TestimonialListWrapper>
      </TestimonialsWrapper>
    </>
  )
}

export default Testimonials