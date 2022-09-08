import React from 'react'
import { HeaderWrapper, HeaderContentWrapper, HeaderText, FollowWrapper} from './HeaderElement'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
function Header({facebook, twitter, instagram}) {
  const social = [
    facebook='facebook.com',
    twitter='twitter.com',
    instagram='instagram.com'
  ]
  return (
    <HeaderWrapper>
      <HeaderContentWrapper>
        <HeaderText>Jalel Real Estate Black Friday</HeaderText>
        <FollowWrapper {...social}>
        <a href={`https://${facebook}/jalel-real-estate`} target='_blank' rel="noreferrer">
          <FaFacebook className='h-icons'/>
        </a>
        <a href={`https://${twitter}/jalel-real-estate`} target='_blank' rel="noreferrer">
         <FaTwitter className='h-icons'/>
        </a>
        <a href={`https://${instagram}/jalel-real-estate`} target='_blank' rel="noreferrer">
         <FaInstagram className='h-icons'/>
        </a>
        </FollowWrapper>
      </HeaderContentWrapper>
    </HeaderWrapper>
  )
}

export default Header