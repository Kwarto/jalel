import styled from "styled-components";
import HeaderBg from '../../images/banner.svg'
export const HomeHeader = styled.div`
 min-height: 100vh;
 background: linear-gradient(rgba(0, 0, 0, 0.39), rgba(0, 0, 0, 0.274)),url(${HeaderBg});
 background-size: cover;
 background-position: center;

 @media screen and (max-width: 1024px){
    min-height: 60vh;
 }

 @media screen and (max-width: 768px){
    min-height: 80vh;
 }
`

export const HomeHeaderContent = styled.div`
 position: absolute;
 top: 20rem;
 left: 25%;
 @media screen and (max-width: 1024px){
  position: relative;
  left: 0;
  top: 15rem;
 }
`
export const HomeHeaderText = styled.h2`
 font-size: 60px;
 color: var(--text-color-f);
 text-align: center;

 @media screen and (max-width: 1024px){
    font-size: 40px;
 }
 @media screen and (max-width: 768px){
    font-size: 25px;
 }
`