import React from 'react'
import { CtaWrapper, CtaContent, ContentImg, ContentText} from './CTAElement'
import CtaImg from '../../images/about.png'
function CTA() {
  return (
    <>
     <CtaWrapper>
       <CtaContent className='container col-md-2'>
        <ContentImg>
          <img src={CtaImg} alt=""/>
        </ContentImg>
        <ContentText>
          <article>
            <h2>SuperMega Sale</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure nihil reiciendis ipsam ipsum omnis adipisci quam consequatur, placeat deleniti doloribus quaerat blanditiis iste voluptates odit!
            </p>
          </article>
          <a href="shop">Shop Now</a>
        </ContentText>
       </CtaContent>
     </CtaWrapper>
    </>
  )
}

export default CTA