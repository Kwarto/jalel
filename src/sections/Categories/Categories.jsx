import React from 'react'
import {CategoriesWrapper, CategoriesList, List} from './CategoriesElement'
import bungImg from '../../images/bungalow.svg'
import apartImg from '../../images/apartment.png'
import skyImg from '../../images/skyscraper.svg'
import bedImg from '../../images/2-bedroom.png'
function Categories() {
  return (
    <CategoriesWrapper>
        <CategoriesList className='container col-md-4'>
            <List>
                <img src={bungImg} alt="" />
                <div>BUNGALOW</div>
            </List>
            <List>
                <img src={apartImg} alt="" />
                <div>APARTMENT</div>
            </List>
            <List>
                <img src={skyImg} alt="" />
                <div>SKYSCRAPER</div>
            </List>
            <List>
                <img src={bedImg} alt="" />
                <div>2 BEDROOM</div>
            </List>
        </CategoriesList>
    </CategoriesWrapper>
  )
}

export default Categories