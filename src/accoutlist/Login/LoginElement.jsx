import styled from "styled-components";

export const LoginWrapper = styled.div`
 padding: 100px 0;
`
export const LoginContainer = styled.div`
 padding: 60px 0;
 min-height: 600px;
 height: 100%;
`

export const LoginSideImg = styled.div`
 img{
    height: 500px;
    filter: saturate(0);
 }
`
export const LoginFormWrapper = styled.div`
 text-align: center;
 margin-top: 32px;

 form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    label{
        text-align: start;
    }
    input, button{
        border: 1px solid var(--main-bg);
        width: 90%;
        padding: 12px 20px;
        margin-top: 25px;
        border-radius: 50px;
        box-shadow: 0 1rem .3rem rgba(141, 25, 25, 0.027);
        font-size: 14px;
        font-weight: 600;

        ::placeholder{
         font-size: 16px;
         color: var(--main-bg);
         cursor: unset;
        }

        @media screen and (max-width: 768px){
         width: 100%;
        }
    }

    button{
        width: 70%;
        background: var(--main-bg);
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
    }

    div{
        margin-top: 20px;
        display: flex;
        gap: 10px;

        a{
            color: var(--main-bg);
            text-decoration: underline;
        }
    }
 }
`