import React from 'react'
import {CategoriesWrapper, SearchContainer, BungalowsCatWrapper, SkyscrapersCatWrapper, BedroomCatWrapper, ApartmentCatWrapper, Listenings} from './CategoriesElement'
import {FaPhone, FaShare, FaRegEye} from 'react-icons/fa'
import SearchBar from '../../components/SearchBar/SearchBar'
import BungImg2 from '../../images/cat-bung-2.jpg'
import BungImg3 from '../../images/cat-bung-3.jpg'
import BungImg4 from '../../images/cat-bung-4.jpg'
function Categories() {
  return (
   <>
      <CategoriesWrapper>
        <SearchContainer>
          <SearchBar />
        </SearchContainer>
        <BungalowsCatWrapper>
          <h1>Bungalows</h1>
          <Listenings className='col-md-3'>
            <div>
              <img src={BungImg4} alt="" />
              <article>
                <FaPhone className='c-ico'/>
                <FaShare className='c-ico'/>
                <FaRegEye className='c-ico'/>
              </article>
              <h3>Finished Project</h3>
            </div>
            <div>
              <img src={BungImg2} alt="" />
              <article>
                <FaPhone className='c-ico'/>
                <FaShare className='c-ico'/>
                <FaRegEye className='c-ico'/>
              </article>
              <h3>Out For Sale</h3>
            </div>
            <div>
              <img src={BungImg3} alt="" />
              <article>
                <FaPhone className='c-ico'/>
                <FaShare className='c-ico'/>
                <FaRegEye className='c-ico'/>
              </article>
              <h3>Ongoing Project</h3>
            </div>
          </Listenings>
        </BungalowsCatWrapper>
        <SkyscrapersCatWrapper>
          <h1>Skyscrapers</h1>
          <Listenings className='col-md-3'>
            <div>
              <img src={BungImg4} alt="" />
              <article>
                <FaPhone className='c-ico'/>
                <FaShare className='c-ico'/>
                <FaRegEye className='c-ico'/>
              </article>
              <h3>Finished Project</h3>
            </div>
            <div>
              <img src={BungImg2} alt="" />
              <article>
                <FaPhone className='c-ico'/>
                <FaShare className='c-ico'/>
                <FaRegEye className='c-ico'/>
              </article>
              <h3>Out For Sale</h3>
            </div>
            <div>
              <img src={BungImg3} alt="" />
              <article>
                <FaPhone className='c-ico'/>
                <FaShare className='c-ico'/>
                <FaRegEye className='c-ico'/>
              </article>
              <h3>Ongoing Project</h3>
            </div>
          </Listenings>
        </SkyscrapersCatWrapper>
        <BedroomCatWrapper>
          <h1>2 Bedroom</h1>
          <Listenings className='col-md-3'>
            <div>
              <img src={BungImg4} alt="" />
              <article>
                <FaPhone className='c-ico'/>
                <FaShare className='c-ico'/>
                <FaRegEye className='c-ico'/>
              </article>
              <h3>Finished Project</h3>
            </div>
            <div>
              <img src={BungImg2} alt="" />
              <article>
                <FaPhone className='c-ico'/>
                <FaShare className='c-ico'/>
                <FaRegEye className='c-ico'/>
              </article>
              <h3>Out For Sale</h3>
            </div>
            <div>
              <img src={BungImg3} alt="" />
              <article>
                <FaPhone className='c-ico'/>
                <FaShare className='c-ico'/>
                <FaRegEye className='c-ico'/>
              </article>
              <h3>Ongoing Project</h3>
            </div>
          </Listenings>
        </BedroomCatWrapper>
        <ApartmentCatWrapper>
          <h1>Apartment</h1>
          <Listenings className='col-md-3'>
            <div>
              <img src={BungImg4} alt="" />
              <article>
                <FaPhone className='c-ico'/>
                <FaShare className='c-ico'/>
                <FaRegEye className='c-ico'/>
              </article>
              <h3>Finished Project</h3>
            </div>
            <div>
              <img src={BungImg2} alt="" />
              <article>
                <FaPhone className='c-ico'/>
                <FaShare className='c-ico'/>
                <FaRegEye className='c-ico'/>
              </article>
              <h3>Out For Sale</h3>
            </div>
            <div>
              <img src={BungImg3} alt="" />
              <article>
                <FaPhone className='c-ico'/>
                <FaShare className='c-ico'/>
                <FaRegEye className='c-ico'/>
              </article>
              <h3>Ongoing Project</h3>
            </div>
          </Listenings>
        </ApartmentCatWrapper>
      </CategoriesWrapper>
   </>
  )
}

export default Categories