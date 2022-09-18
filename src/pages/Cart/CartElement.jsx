import styled from "styled-components";

export const CartWrapper = styled.div`
 padding: 150px 0;
`

export const CartContentWrapper = styled.div`
 min-height: 60vh;
 box-shadow: var(--box-shadow);
 display: grid;
 grid-template-columns: 70% 28%;
 gap: 2%;
 margin: 0 10px;

 @media screen and (max-width: 1024px) {
   grid-template-columns: 100%;
 }

 @media screen and (max-width: 768px) {
   grid-template-columns: 100%;
 }
`
export const CartItemColWrapper = styled.div`
 padding: 60px;
`
export const CartItemSubTotalWrapper = styled.div`
 padding: 60px;
 border: 5px solid var(--main-bg-v);

 div{
    display: flex;
    justify-content: space-between;
    gap: 12rem;
    flex-flow: column;
    h1{
      text-align: center;
    }
    a{
      background: linear-gradient(var(--main-bg), var(--main-bg-f));
      text-align: center;
      padding: 10px 15px;
      border-radius: 50px;
      font-size: 20px;
      font-weight: 600;
      color: var(--text-color-f);
      text-transform: uppercase;

      @media screen and  (max-width: 1024px) {
        width: 50%;
        margin: 0 auto;
      }
    }
 }
`

export const ColItemsHead = styled.div`
 display: flex;
 justify-content: space-evenly;
 border-bottom: 2px solid var(--main-bg-v);
`
export const Heading = styled.div`
 text-transform: uppercase;
 font-weight: 600;
`

export const ColItemsInCart = styled.div`
 color: black;
`