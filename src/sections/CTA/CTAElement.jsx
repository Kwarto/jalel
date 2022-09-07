import styled from "styled-components";

export const CtaWrapper = styled.div`
 padding: 50px 0;
`

export const CtaContent = styled.div`
 padding: 5px;
`
export const ContentImg = styled.div`
 width: 100%;
` 
export const ContentText = styled.div`
 background: var(--main-bg-v);
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 padding: 5px;

 article{
    h2{
        font-size: 40px;
        text-align: center;
        padding: 30px 0;
        text-transform: uppercase;
        font-weight: 700;
    }

    p{
        width: 95%;
        text-align: center;
        font-size: 18px;
    }
 }

 a{
   margin-top: 30px;
   padding: 15px 50px;
   background: var(--main-bg-f);
   border-radius: 50px;
   font-size: 20px;
   font-weight: 700;
  }
`