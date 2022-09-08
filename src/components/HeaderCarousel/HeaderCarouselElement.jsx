import styled from "styled-components";

export const CarouselContainerText = styled.div`
 background-color: var(--main-bg-v);
 display: flex;
 justify-content: center;
 align-items: center;
` 
export const CarouselContainerImg = styled.div`
 background-position: center;
 background-size: cover;

 img{
  min-height: 70vh;
  height: 100%;
  filter: brightness(0.8) saturate(0.8);
    transition: filter 2s ease;

    &:hover{
        filter: brightness(1) saturate(1);
    }

   
  @media screen and (max-width: 1024px){
    min-height: 50vh;
  }
  @media screen and (max-width: 768px){
    min-height: 30vh;
  }
 }
`

export const CText = styled.h2`
 font-size: 45px;
 font-weight: 600;
 text-align: center;

 @media screen and (max-width: 1024px){
  font-size: 30px;
  padding: 10px 8px;
}

@media screen and (max-width: 1024px){
  font-size: 25px;
  padding: 10px 8px;
}

`