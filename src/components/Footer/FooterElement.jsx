import styled from "styled-components";

export const FooterWrapper = styled.div`
    padding: 50px 0;
    background: linear-gradient(to top right, var(--main-bg-f), var(--main-bg));
`

export const FooterContentContainer = styled.div`
 background: var(--text-color-f);
 min-height: 55vh;
 padding: 10px;

 @media screen and (max-width: 1024px) {
    min-height: 30vh;
 }
`

export const FooterArticle = styled.div`
 padding-top: 15px;
 margin-left: 10px;
 margin-top: 50px;
`

export const ArticleWrap = styled.article`
 h2{
   /* text-align: center; */
 }
`
export const Ftext = styled.p`
 text-align: start;
 padding-top: 5px;
`
export const Flist = styled.div`
 margin-left: 10px;
 a{
    display: flex;
    flex-flow: column;
    padding: 10px 0;
    color: var(--main-bg);
    font-size: 18px;
    font-weight: 600;
 }
`


export const FooterCopy = styled.div`
 background: var(--text-color-f);
 padding: 20px;
 p{
   text-align: center;
   font-size: 16px;
   font-weight: 500;
 }
`