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
 
 button{
   display: none;
   background: transparent;
   cursor: pointer;
   .burger-ico{
      font-size: 25px;
      color: black;
   }
 }

 @media screen and (max-width: 1024px){ button{
      display: flex;
}

.nav-links-mobile{
 display: none;
 justify-content: space-between;
 align-items: center;
}

.nav-links{
 display: flex;
 flex-flow: column;
 padding: 30px 10px;
 position: absolute;
 left: 0;
 top: 4.5rem;
 z-index: 100;
 background: linear-gradient(to left bottom, var(--main-bg),var(--main-bg-f));
 box-shadow: var(--box-shadow);
 width: 100%;

 .nav-list{
  margin: 30px 0;
  background: #fff;
  padding: 20px 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  box-shadow: var(--box-shadow);
  border-radius: .2rem;
  animation: SlidInNavItem 300ms forwards ease;
  transform-origin: left;

  .nav-list:nth-child(1) {
        animation-delay: 200ms;
    }

    .nav-list:nth-child(1) {
        animation-delay: 400ms;
    }
    .nav-list:nth-child(2) {
        animation-delay: 600ms;
    }

    .nav-list:nth-child(4) {
        animation-delay: 800ms;
    }


    @keyframes SlidInNavItem {
        0%{
          transform: rotateY(90deg);
        }
        100%{
          transform: rotateY(0deg);
          opacity: 1;
        }
    }

}

@media screen and (max-width: 1024px) {
  width: 60%;
}

@media screen and (max-width: 768px) {
  width: 100%;
}
}

}

@media screen and (max-width: 1024px){
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   margin-top: 0;
 }
 @media screen and (max-width: 768px){
   margin-top: 0;
   
 }
`

export const LogoWrapper = styled.div`
 margin-left: 20px;
 img{
    width: 80px;
 }

 @media screen and (max-width: 1024px){
   margin-left: 10px;
 }
`

export const NavItemsWrapper = styled.div`
  .nav-list{
    color: var(--text-color);
    padding: 0 30px;
    font-size: 18px;
    font-weight: 600;
    position: relative;

    span{
        background: red;
        font-size: 12px;    
        width: 20px;
        height: 20px;
        aspect-ratio: 1/1;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        position: absolute;
        top: -19px;
        left: 38px;

        @media screen and (max-width: 1024px){
         position: static;
         width: 22px;
         height: 22px;
         margin-left: 5px;
        }
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

 @media screen and (max-width: 768px) {
   margin-right: 2px;
   padding: 8px 20px;
   display: flex;
   align-items: center;
   .nav-list{
      font-size: 12px;
   }
 }
`
