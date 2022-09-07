import React from 'react'
import { Link } from 'react-router-dom'
import {NavbarWrapper, MainNavBar, LogoWrapper, NavItemsWrapper, TopButton} from './NavBarElement'
import Header from '../Header/Header'
import Logo from '../../images/jalel-real-estate-logo.png'
import {FaShoppingCart} from 'react-icons/fa'
function NavBar() {
  return (
    <>
      
     <NavbarWrapper>
      <Header />
     <MainNavBar>
      <LogoWrapper>
         <img src={Logo} alt="Jalel Logo" />
      </LogoWrapper>
      <NavItemsWrapper>
       <Link to='/' className='nav-list'>Home</Link>
       <Link to='shop' className='nav-list'>Shop</Link>
       <Link to='categories' className='nav-list'>Categories</Link>
       <Link to='cart' className='nav-list'><FaShoppingCart className='cart-ico' /> <span>0</span></Link>
      </NavItemsWrapper>
      <TopButton>
        <Link to='account/register' className='nav-list'>Register</Link>
      </TopButton>
    </MainNavBar>
    </NavbarWrapper>
    </>
  )
}

export default NavBar