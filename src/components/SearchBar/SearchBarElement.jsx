import styled from "styled-components";

export const SearchWrapper = styled.div`
 padding: 30px 0;
`

export const SearchContainer = styled.div`
 margin: 0 auto;

 input{
    padding: 20px 20px;
    width: 100%;
    border-radius: 50px;
    box-shadow: 0 1rem .5rem var(--main-bg-v);
    ::placeholder{
        font-size: 18px;
    }
 }
`