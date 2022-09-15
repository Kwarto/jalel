import styled from "styled-components";

export const PopSalesWrapper = styled.div`
 padding: 100px 0;
 border-radius: 0 0 80rem 0;
 min-height: 60vh;

 @media screen and (max-width: 1024px){
  padding: 30px 0;
 }
`
export const PopSaleHeader = styled.h1`
 margin-left: 20px;
 transform: translateY(20px);
 background: linear-gradient(183deg, var(--main-bg), var(--main-bg-f));
 color: #fff;
 width: fit-content;
 padding: 5px 30px;
 animation: animateDown linear infinite 1.5s;
`

export const PopSaleItem = styled.div`
 padding: 10px;
 background: #fff;
 box-shadow: var(--box-shadow);
 min-height: 50vh;
 margin: 0 10px;
 position: relative;
 top: 30px;

 @media screen and (max-width: 1024px){
  margin-top: 30px;
 }
`
export const PopCate = styled.div`
 text-align: center;
 transform: translateY(-25px);
 background: rgb(241, 174, 43);
 padding: 8px;
 font-size: 20px;
 font-weight: 600;
`

export const CartIcon = styled.div`
 background: var(--main-bg);
 box-shadow: var(--box-shadow);
 width: max-content;
 padding: 10px;
 border-radius: 100%;
 display: flex;
 align-items: center;
 color: #fff;
 position: relative;
 bottom: 20px;
 cursor: pointer;
`

export const PopSaleImg = styled.div`
 img{
    width: 100%;
    transform: scale(1.07);
    transition: transform 2s ease;

    &:hover{
      transform: scale(1);
    }
 }

 @media screen and (max-width: 1024px) {
  img{
    transform: scale(1.03);
    transition: transform 2s ease;

    &:hover{
      transform: scale(1);
    }
 }
 }
`

export const PopCaption = styled.div`
 text-align: center;
 box-shadow: var(--box-shadow);
 transform: translateY(20px);
 background: #fff;
 font-size: 13px;
 padding: 2px;
`

export const PRWrapper = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 font-size: 20px;
`

export const Price = styled.div`
 font-weight: 600;
`

export const Rate = styled.div`
 font-size: 16px;
 color: rgba(241, 175, 43, 0.925);
 margin: 2px;
`