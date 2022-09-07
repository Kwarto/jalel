import React from 'react'
import { HeaderWrapper, HeaderContentWrapper, HeaderText, FollowWrapper} from './HeaderElement'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
function Header() {
  return (
    <HeaderWrapper>
      <HeaderContentWrapper>
        <HeaderText>Jalel Real Estate Black Friday</HeaderText>
        <FollowWrapper>
          <FaFacebook className='h-icons'/>
          <FaTwitter className='h-icons'/>
          <FaInstagram className='h-icons'/>
        </FollowWrapper>
      </HeaderContentWrapper>
    </HeaderWrapper>
  )
}

export default Header