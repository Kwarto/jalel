import styled from "styled-components";

export const  CheckoutWrapper = styled.div`
 padding: 100px 0;
 min-height: 90vh;

 @media screen and (max-width: 1024px){
    min-height: 70vh;
 }
`

export const CheckoutContainer = styled.div`
 height: 100%;
 margin: 3rem 0;

 h1{
    padding: 0 30px;
 }

 div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
    background-color: var(--main-bg);
    width: 50%;
    margin: 0 auto;
    color: var(--text-color-f);
    padding: 10px 20px;
    font-weight: bold;
    small{
        text-decoration: underline;
        cursor: pointer;
    }

    @media screen and (max-width: 768px){
        width: 90%;
        padding: 10px 5px;
    }
 }
`

export const CheckoutList = styled.div`
 margin: 0 auto;
 padding: 0 20px;
`

export const BillingWrapper = styled.div`
 min-height: 80vh;

 form{
    width: 90%;
    div{
        display: flex;
        gap: 5px;
        margin: 14px 0;
        input{
            width: 50%;
        }

        @media screen and (max-width: 768px){
         flex-direction: column;
         input{
            width: 100%;
         }
        }
    }
    input{
        border: 1px solid var(--main-bg);
        padding: 12px 15px;
        width: 100%;
        margin: 10px 0;
        box-shadow: var(--box-shadow);
    }

    @media screen and (max-width: 768px){
     width: 100%;
    } 
 }
`
export const YourOrderWrapper = styled.div`
h2{
    padding: 10px 0;
    font-size: 18px;
}
 div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
 }

 button{
    margin-top: 10px;
    padding: 10px 20px;
    background: var(--main-bg);
    color: var(--text-color-f);
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
 }
`

export const OrderList = styled.div`
 min-height: 300px;
 box-shadow: var(--box-shadow);
`

export const PaymentWrap = styled.div`
 min-height: 220px;
 margin-top: 10px;
 box-shadow: 0 5px 10px var(--main-bg-v);
 
 p{
    font-size: 18px;
    font-weight: bold;
    color: var(--main-bg);
 }

`