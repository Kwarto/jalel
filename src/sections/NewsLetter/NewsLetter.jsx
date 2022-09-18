import React from 'react'
import { NewsLetterWrapper, NewsLetterHead, NewsletterForm, NewsLetterImg } from './NewsLetterElement'
import NewImg from '../../images/jalel-real-estate-logoWT.png'
function NewsLetter() {
  return (
    <>
      <NewsLetterWrapper>
        <NewsLetterHead>Subscribe to our newsletter</NewsLetterHead>

        <NewsletterForm className='container'>
            <form action="/" method="post">
                <input type="email" name="subscribers email" placeholder='Please enter your email' required/>
                <button type="submit">Subscribe</button>
            </form>
        </NewsletterForm>
        <NewsLetterImg className='container'>
          <img src={NewImg} alt="jalel real estate big banner" />
        </NewsLetterImg>
      </NewsLetterWrapper>
    </>
  )
}

export default NewsLetter