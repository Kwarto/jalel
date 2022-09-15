import React from 'react'
import {
  RegisterWrapper, RegisterFormContainer, 
  FormWrapper, AlreadyWrapper,
  LoginWith, UserData, SideImg} from './RegisterElement'
import {FaFacebook, FaGoogle, FaApple} from 'react-icons/fa'
function Register() {
  return (
     <>
       <RegisterWrapper>
        <RegisterFormContainer className='container'>
            <FormWrapper>
            <h3>SIGN IN WITH</h3>
             <LoginWith>
               <FaGoogle className='log-wit'/>
               <FaFacebook className='log-wit'/>
               <FaApple className='log-wit'/>
             </LoginWith>
               <h3>OR</h3>
             <form action="/" method="post">
              <UserData>
               <input type="text" name="firstName" placeholder='First Name' />
               <input type="text" name="lastName" placeholder='Last Name' />
              </UserData>
              <UserData>
              <input type="email" name="email" placeholder='Email Address' />
              <input type="password" name="password" placeholder='Enter Password' />
              </UserData>
              <button type="submit">Sign Up</button>
             </form>
             <AlreadyWrapper>
              <p>Already a user ?</p>
              <a href="login">Login Here</a>
             </AlreadyWrapper>
            </FormWrapper>
            <SideImg>
              <h3>YOUR FUTURE HOME IS OUR PRIORITY</h3>
            </SideImg>
        </RegisterFormContainer>
       </RegisterWrapper>
     </>
  )
}

export default Register