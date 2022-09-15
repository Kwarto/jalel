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
 margin-top: 3%;

 @media screen and (max-width: 768px){
   margin-top: 10%;
 }
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

        @media screen and (max-width: 1024px){
         position: static;
         width: 28px;
         margin-left: 15px;
        }
    }
 }

 @media screen and (max-width: 1024px) {
   display: none;
   flex-flow: column;
   padding: 30px 10px;
   position: absolute;
   left: 10%;
   top: 8rem;
   z-index: 100;
   background: linear-gradient(to left bottom, var(--main-bg),var(--main-bg-f));
   box-shadow: var(--box-shadow);
   width: 80%;

   .nav-list{
      margin: 30px 0;
      background: #fff;
      padding: 20px 30px;
      width: 100%;
      display: flex;
      justify-content: center;
      box-shadow: var(--box-shadow);
      border-radius: .2rem;
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
