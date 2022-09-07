import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import Categories from '../../sections/Categories/Categories'
import FeaturedSale from '../../sections/FeaturedSales/FeaturedSale'
import CTA from '../../sections/CTA/CTA'
import {HomeHeader, HomeHeaderContent, HomeHeaderText} from './HomeElement'

function Home() {
  return (
    <>
      <HomeHeader>
        <HomeHeaderContent>
          <HomeHeaderText>Your dream house is here</HomeHeaderText>
          <SearchBar />
        </HomeHeaderContent>
      </HomeHeader>
      <Categories />
      <FeaturedSale />
      <CTA />
    </>
  )
}

export default Home