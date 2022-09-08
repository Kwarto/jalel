import styled from "styled-components";

export const HeaderWrapper = styled.div`
 background: linear-gradient(155deg, var(--main-bg-f), var(--main-bg));
 min-height: 3rem;
`

export const HeaderContentWrapper = styled.div`
 padding: 10px 0;
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin: 0 30px;

 @media screen and (max-width: 1024px){
     display: flex;
    align-items: center;
    margin: 0 5px;
 }
`

export const HeaderText = styled.h3`
 font-size: 20px;
 font-weight: 600;
 color: var(--text-color-f);

 @media screen and (max-width: 1024px){
    font-size: 15px;
 }
`

export const FollowWrapper = styled.div`
.h-icons{
    margin: 0 10px;
    font-size: 28px;
    background: var(--main-bg-f);
    padding: 5px;
    border-radius: .2rem;
    box-shadow: var(--box-shadow);
    color: var(--text-color-f);
    cursor: pointer;

    @media screen and (max-width: 1024px){
    font-size: 20px;
    margin: 3px;
    transform: translateY(2px);

 }
}

`