import styled from "styled-components";

export const CategoriesWrapper = styled.div`
 padding: 150px 0;
`

export const SearchContainer = styled.div`
    margin: 0 auto;
    width: 50%;

    @media screen and (max-width: 1024px){
        width: 80%;
    }

    @media screen and (max-width: 768px){
        width: 90%;
    }
`

export const BungalowsCatWrapper = styled.div`
margin: 30px 0;
`
export const SkyscrapersCatWrapper = styled(BungalowsCatWrapper)`
 h1{
    font-size: 25px;
    margin-left: 5px;
 }
`
export const BedroomCatWrapper = styled(BungalowsCatWrapper)``
export const ApartmentCatWrapper = styled(BungalowsCatWrapper)``

export const Listenings = styled.div`
 position: relative;
 padding: 10px;
 div{
    background: var(--main-bg-v);
    box-shadow: var(--box-shadow);
    padding: 5px;

    img{
     height: 250px;
   }

   h3{
    position: absolute;
    top: 5rem;
    margin-left: 10%;
    background: #fff;
    padding: 5px;

    @media screen and (max-width: 768px){
        display: none;
    }
   }
 }

 article{
    background: #fff;
    padding: 8px;
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
    .c-ico{
        font-size: 30px;
        background: var(--main-bg);
        padding: 5px;
        border-radius: 50px;
        cursor: pointer;
        color: #fff;
        box-shadow: var(--box-shadow);
    }
 }
`