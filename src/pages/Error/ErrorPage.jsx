import React from 'react'
import {ErrorPageWrapper, ErrorPageContainer} from './ErrorPageElement'
function ErrorPage() {
  return (
    <ErrorPageWrapper>
      <ErrorPageContainer className='container'>
        <h2>Oops Sorry</h2>
        <h1>404</h1>
        <p>The page your are trying to access could not be found</p>
      </ErrorPageContainer>
    </ErrorPageWrapper>
  )
}

export default ErrorPage