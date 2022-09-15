import styled from "styled-components";

export const TestimonialsWrapper = styled.div`
 padding: 20px 0;
 background: linear-gradient(to left top,var(--main-bg),var(--main-bg-f));
 margin: 5rem 0;
`

export const TestHeading = styled.div`
 text-align: center;
 font-size: 3rem;
 padding-bottom: 10px;
 color: #fff;
 font-weight: 700;
 @media screen and (max-width: 1024px){
   font-size: 2.2rem;
 }
 @media screen and (max-width: 768px){
   font-size: 2rem;
 }
`

export const TestimonialListWrapper = styled.div`
 background: #fff;
 box-shadow: var(--box-shadow);
 gap: 1rem;
 margin: 0 auto;
 padding: 60px 20px;
 @media screen and (max-width: 1024px){
   padding: 20px 8px;
  }
  @media screen and (max-width: 768px){
   padding: 22px 5px;
  }
`

export const ListItems = styled.article`
 background: rgb(241,174,43);
 height: max-content;
 strong{
    text-align: center;
    margin: 0 30%;
    font-size: 20px;
 }
 @media screen and (max-width: 1024px){
   margin-top: 15px;
 }
`
export const Items = styled.div`
  width: 100%;
  display: flex;
  background: #fff;
  padding: 2rem;
  position: relative;
  bottom: 30px;
  height: max-content;
  border: 1px solid rgba(243, 175, 2, 0.975);
  right: 40px;
  @media screen and (max-width: 1024px){
    right: 34px;
  }
  @media screen and (max-width: 768px){
    right: 15px;
  }
  img{
    width: 15%;
    position: relative;
    right: 50px;
    border: 3px solid var(--main-bg);
    border-radius: 100%;
    display: flex;
    height: 10%;
  }
`