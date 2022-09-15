import styled from "styled-components";
export const ShopWrapper = styled.div`
    min-height: 70vh;
    padding: 60px 0;
`

export const ShopItemWrapper = styled.div`
 padding: 5px 0;
 display: grid;
 grid-template-columns: 78% 20%;
 gap: 2%;

 @media screen and (max-width: 1024px){
  grid-template-columns: 1fr;
  overflow: hidden;
 }
`

export const ProductCard = styled.div`
 box-shadow: var(--box-shadow);
 padding: 30px;
`

export const CardItems = styled.div`
 box-shadow: var(--box-shadow);
 padding: 5px;
`

export const ProductFilter = styled.div`
 opacity: 0.78;
 margin-top: 22px;
 margin-right: 5px;
 display: block;
 flex-direction: column;
 justify-content: space-between;
 gap: 2rem;
 padding: 8px;
`

export const FilterSelector = styled.div`
 background: #fff;
 min-height: 70vh;
 box-shadow: var(--box-shadow);
`

export const ShopSky = styled.div`
 margin-top: 5rem;
 padding: 100px 0;
 background: var(--main-bg);

 h1{
    color: #fff;
    text-transform: uppercase;
    margin: 10px;
}
`

export const ShopHeading = styled.div`
 color: #03032e;
 font-size: 20px;
 font-weight: 700;
 margin-top: 7%;
 text-align: center;
 text-decoration: underline;
`

export const Selectors = styled.div`
 font-size: 14px;
 margin-left: 15px;
 cursor: pointer;

 h1{
    font-size: 15px;
    padding: 10px 0;
 }
`

export const BungCate = styled.div`
 margin-top: 18px;
 box-shadow: var(--box-shadow);
 padding: 8px;
 text-align: center;
 font-size: 12px;
 font-weight: 700;
`

export const SkyList = styled.div`
 background: #fff;
`

export const ShopBed = styled.div`
 margin: 5rem auto;
`