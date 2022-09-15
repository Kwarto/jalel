import styled from "styled-components";

export const OfferWrapper = styled.div`
 /* padding: 40px 0; */
`

export const OfferList = styled.div`
position: relative;
padding: 10px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
 box-shadow: var(--box-shadow);
    img{
        width: 60%;
        margin: 30px 0;
    }

@media screen and (max-width: 1024px){
    margin: 30px 0;
}
`
export const OfferCat = styled.h3`
 position: absolute;
 top: -40px;
 background: var(--text-color-f);
 padding: 8px 30px;
 box-shadow: var(--box-shadow);
`
export const OfferCaption = styled.p`
 background: var(--main-bg-v);
 padding: 20px 0;
 text-align: center;
 border-radius: 15px 15px 0 0;
`
export const OfferBtn = styled.a`
 background: var(--main-bg-f);
 transform: translateY(2rem);
 padding: 10px 15px;
 cursor: pointer;
 border-radius: 50px;
 width: 60%;
 text-align: center;
 font-weight: 600;
`