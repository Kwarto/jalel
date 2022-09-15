import styled from "styled-components";

export const ProductWrapper = styled.div`
 h1{
    text-align: center;
    font-size: 20px;
 }

 div{
    color: rgb(241,174,43);
 }

 p{
    text-align: center;
 }
`

export const PRWrap = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding-top: 25px;

 h4{
    color: #0e0301;
 }

 button{
    background: var(--main-bg);
    padding: 5px 10px;
    font-size: 20px;
    text-align: center;
    color: #fff;
    border-radius: 50px;
    box-shadow: 0 10px 10px var(--main-bg-variant-a);
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1/1;
    cursor: pointer;
 }
`


