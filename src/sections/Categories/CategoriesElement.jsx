import styled from "styled-components";

export const CategoriesWrapper = styled.div`
 padding: 60px 0;
 position: relative;
 &::before{
    content: 'Categories';
    position: absolute;
    left: 10rem;
    width: 10%;
    padding: 10px 30px;
    background: var(--main-bg);
    text-align: center;
    transform: translateY(-30px);
    font-size: 20px;
    font-weight: 700;
    color: var(--text-color-f);
 }
`

export const CategoriesList = styled.div`
 min-height: 200px;
 height: 100%;
 background: var(--main-bg-v);
 padding: 20px 20px;
`

export const List = styled.div`
 display: flex;
 align-items: center;
 flex-direction: column;
 box-shadow: var(--box-shadow);
 padding: 0 30px;
 div{
    margin-top: 2px;
    text-align: center;
    background: var(--main-bg-f);
    font-size: 18px;
    font-weight: 700;
    padding: 8px 20px;
    color: var(--main-bg);
    border-radius: 15px 0 15px 0;
    cursor: default;
 }

 img{
    width: 70%;
 }
`