import React from 'react'
import {FooterWrapper, FooterContentContainer, FooterArticle, ArticleWrap, Ftext, Flist, FooterCopy} from './FooterElement'
import FooterLogo from '../../images/jalel-real-estate-logoWT.png'
function Footer() {
  return (
   <>
     <FooterWrapper>
      <FooterContentContainer className='container col-md-3'>
         <FooterArticle>
          <ArticleWrap>
            <img src={FooterLogo} alt="" />
            <Ftext>Jalel Real Estate is a leading firm in the real estate industry in Ghana.</Ftext>
             <Ftext><strong>Kumasi, Ghana</strong></Ftext>
          </ArticleWrap>
         </FooterArticle>
         <FooterArticle>
          <ArticleWrap>
            <h2>Quick Links</h2>
            <Flist>
            <a href="/">Home</a>
            <a href="/">Product</a>
            <a href="/">Categories</a>
            <a href="/">Get Account</a>
            </Flist>
          </ArticleWrap>
         </FooterArticle>
         <FooterArticle>
          <ArticleWrap>
            <h2>Support</h2>
            <Flist>
            <a href="/">FAQs</a>
            <a href="/">NewsLetter</a>
            <a href="/">Terms & Conditions</a>
            <a href="/">Privacy Policy</a>
            </Flist>
          </ArticleWrap>
         </FooterArticle>
      </FooterContentContainer>
    </FooterWrapper>
    <FooterCopy>
        <Ftext><strong>Jalel Real Estate &copy; 2022 | All Rights Reserved </strong></Ftext>
    </FooterCopy>
   </>
  )
}

export default Footer