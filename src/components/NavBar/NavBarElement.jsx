import styled from "styled-components";

export const NavbarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 100;
`
export const MainNavBar = styled.nav`
 background: #fff;
 box-shadow: var(--box-shadow);
 display: flex;
 justify-content: space-between;
 align-items: center;
`

export const LogoWrapper = styled.div`
 margin-left: 20px;
 img{
    width: 80px;
 }
`

export const NavItemsWrapper = styled.ul`
 display: flex;
 justify-content: space-between;
 align-items: center;
 .nav-list{
    color: var(--text-color);
    padding: 0 30px;
    font-size: 18px;
    font-weight: 600;
    position: relative;

    span{
        background: red;
        font-size: 12px;    
        width: 15px;
        aspect-ratio: 1/1;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        position: absolute;
        top: -9px;
        left: 40px;
    }
 }
`

export const TopButton = styled.div`
 margin-right: 20px;
 background: var(--main-bg);
 padding: 8px 40px;
 border-radius: 50px;

 .nav-list{
    color: var(--text-color-f);
    font-size: 18px;
    font-weight: 600;
 }
`
