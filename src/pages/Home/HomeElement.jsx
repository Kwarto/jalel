import styled from "styled-components";
import HeaderBg from '../../images/banner.svg'
export const HomeHeader = styled.div`
 min-height: 100vh;
 background: linear-gradient(rgba(0, 0, 0, 0.39), rgba(0, 0, 0, 0.274)),url(${HeaderBg});
 background-size: cover;
 background-position: center;
`

export const HomeHeaderContent = styled.div`
 position: absolute;
 top: 20rem;
 left: 25%;
`
export const HomeHeaderText = styled.h2`
 font-size: 60px;
 color: var(--text-color-f);
 text-align: center;
`