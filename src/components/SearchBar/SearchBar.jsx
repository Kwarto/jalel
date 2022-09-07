import React from 'react'
import { SearchWrapper, SearchContainer } from './SearchBarElement'
function SearchBar() {
  return (
    <>
     <SearchWrapper>
       <SearchContainer>
         <input type="search" name="search" placeholder='Search your dream house' />
       </SearchContainer>
     </SearchWrapper>
    </>
  )
}

export default SearchBar