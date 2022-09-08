import styled from "styled-components";

export const FeaturedSaleWrapper = styled.div`
 padding: 100px 0;
`

export const FeaturedWrapper = styled.div`
  h1{
    color: var(--main-bg);
 }
`

export const SalesListWrapper = styled.div``

export const SaleItem = styled.div`
 margin-top: 30px;
 box-shadow: var(--box-shadow);
 padding: 15px;
`
export const PriceCate = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin: 0 8px;

 h4{
    font-size: 16px;
    @media screen and (max-width: 1024px){
      font-size: 14px;
    }
 }
`
export const LocDis = styled(PriceCate)`
 padding-top: 15px;
`