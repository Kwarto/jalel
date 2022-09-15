import styled from "styled-components";

export const CartWrapper = styled.div`
 padding: 150px 0;
`

export const CartContentWrapper = styled.div`
 min-height: 60vh;
 box-shadow: var(--box-shadow);
 display: grid;
 grid-template-columns: 70% 28%;
 gap: 2%;
 margin: 0 10px;
`
export const CartItemColWrapper = styled.div`
 padding: 60px;
`
export const CartItemSubTotalWrapper = styled.div`
 padding: 60px;
 border: 5px solid var(--main-bg-v);
`

export const ColItemsHead = styled.div`
 display: flex;
 justify-content: space-evenly;
 border-bottom: 2px solid var(--main-bg-v);
`
export const Heading = styled.div`
 text-transform: uppercase;
 font-weight: 600;
`

export const ColItemsInCart = styled.div`
 color: black;
`