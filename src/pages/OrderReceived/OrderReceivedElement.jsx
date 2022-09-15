import styled from "styled-components";

export const OrderReceivedWrapper = styled.div`
 padding: 100px 0;
`

export const OrderResponseWrapper = styled.div`
 margin-top: 10rem;
 box-shadow: var(--box-shadow);
 min-height: 200px;
 height: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

 .check{
    font-size: 10rem;
    background: green;
    padding: 10px;
    border-radius: 100%;
    color: #fff;
 }
`

export const OrderSuccessNote = styled.div`
 margin: 50px 0;
 text-align: center;
 h1{
    padding: 15px 0;
    font-size: 30px;
 }
`