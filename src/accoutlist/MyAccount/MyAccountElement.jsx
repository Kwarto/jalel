import styled from "styled-components";

export const MyAccountWrapper = styled.div`
 padding: 100px 0;
`

export const MyAccountPage = styled.div`
    margin-top: 5rem;
    min-height: 80vh;
    height: 100%;
    display: grid;
    grid-template-columns: 20% 78%;
    gap: 2%;

    @media screen and (max-width: 1025px){
        grid-template-columns: 40% 60%;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 100%;
    }
`

export const SettingContainer = styled.div`
 box-shadow: var(--box-shadow);
 text-align: center;
 border-radius: 20px 20px;
 h2{
    padding: 10px 0;
    font-size: 30px;
 }

 ul{
    margin-top: 70px;
    li{
        padding: 10px 10px;
        font-size: 20px;
        font-weight: 600;
        color: var(--text-color);
        cursor: pointer;
        margin: 20px 0;
        box-shadow: var(--box-shadow);
        border-radius: 0 30px 30px 0;
        margin-left: 20px;
    }

    @media screen and (max-width: 1024px){
        margin-top: 6rem;

        li{
            margin-top: 5rem;
        }
    }
 }
`
export const UpdateContainer = styled.div``

export const UpdateHeader = styled.div`
 background: linear-gradient(135deg, var(--main-bg-v), var(--main-bg-f));
 min-height: 25vh;
 margin: 0 auto;
 width: 90%;
 border-radius: 40px 0 0 0;
 position: relative;

 img{
    width: 15%;
    border-radius: 100%;
    transform: translate(3rem, 3rem);
 }

 div{
    position: absolute;
    right: 3rem;
    top: 2rem;
    background: #fff;
    padding: 10px;
    border-radius: 50px;
    display: flex;
    cursor: pointer;
    box-shadow: var(--box-shadow);
    
    .edit{
        color: var(--main-bg);
        font-weight: 600;
    }
 }
`

export const UpdateUserInfo = styled.div`
 min-height: 20vh;
 margin-top: 35px;
 width: 90%;
 margin: 0 auto;

 h1{
    padding: 45px 0 0 30px;
 }
 p{
    margin-left: 55px;
 }
 small{
    margin-left: 50px;
    padding: 2px 0;
 }
`

export const UpdateAboutBio = styled.div`
 box-shadow: var(--box-shadow);
 background: rgba(0, 0, 0, 0.507);
 border-radius: 0 0 30px 0;
 min-height: 35vh;
 margin: 5px auto;
 width: 90%;
 text-align: center;
 position: relative;

 h1{
    padding: 10px 0;
    color: var(--text-color-f);
 }

 p{
    width: 80%;
    margin: 10px auto;
    color: var(--text-color-f);

    @media screen and (max-width: 768px){
     width: 100%;
     font-size: 14px;
     margin: 30px 0;
    }
 }

 div{
    position: absolute;
    right: 3rem;
    top: 2rem;
    background: #fff;
    padding: 10px;
    border-radius: 50px;
    display: flex;
    cursor: pointer;
    box-shadow: var(--box-shadow);
 }
`
