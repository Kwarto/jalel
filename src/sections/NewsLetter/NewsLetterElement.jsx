import styled from "styled-components";

export const NewsLetterWrapper = styled.div`
  padding: 100px 0;
`

export const NewsLetterHead = styled.div`
margin-top: 5rem;
 text-align: center;
 color: rgb(241, 174, 43);
 text-transform: capitalize;
 font-size: 40px;
 font-weight: 600;

 @media screen and (max-width: 1024px){
    font-size: 30px;
 }
`

export const NewsletterForm = styled.div`
padding: 40px;

form{
    margin: 0 auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input{
        width: 80%;
        padding: 15px 50px;
        border-bottom: 2px solid var(--main-bg);

        ::placeholder{
            font-size: 18px;
        }
    }

    button{
        cursor: pointer;
        padding: 10px 60px;
        border-radius: 50px;
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        width: max-content;
        margin: 15px auto;
        background: rgb(241, 174, 43);
    }

    @media screen and (max-width: 1024px){
        width: 100%;

        input{
            width: 100%;
            padding: 15px 25px;
        }
    }
}
`

export const NewsLetterImg = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 margin-top: 15px;
 img{
    width: 70%;
    margin: 0 auto;
 }
`