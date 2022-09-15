import React from 'react'
import {LoginWrapper, LoginContainer, LoginSideImg, LoginFormWrapper} from './LoginElement'
import SideImg from '../../images/Ten.jpg'
function Login() {
  return (
    <LoginWrapper>
      <LoginContainer className='container col-md-2'>
         <LoginSideImg>
          <img src={SideImg} alt="" />
         </LoginSideImg>
         <LoginFormWrapper>
             <h1>LOGIN HERE</h1>
             <form action="" method="post">
               <input type="email" name="email" placeholder='Enter Email' />
               <input type="password" name="password" placeholder='Enter Password' />
               <input type="password" name="email" placeholder='Confirm Password' />
               <button type="submit">Login</button>
               <div>
                <p>Don't have an account</p>
                <a href="/account/register">Register here</a>
               </div>
             </form>
         </LoginFormWrapper>
      </LoginContainer>
    </LoginWrapper>
  )
}

export default Login