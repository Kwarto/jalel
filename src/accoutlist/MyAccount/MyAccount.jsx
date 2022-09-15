import React from 'react'
import 
{
  MyAccountWrapper, MyAccountPage, SettingContainer, 
  UpdateContainer, UpdateHeader,UpdateUserInfo,
  UpdateAboutBio
} from './MyAccountElement'
import Profile from '../../images/pro-avatar.png'
import {BsPencil} from 'react-icons/bs'
function MyAccount() {
  return (
    <MyAccountWrapper>
      <MyAccountPage>
        <SettingContainer>
          <h2>Settings</h2>
          <ul>
            <li>My Profile</li>
            <li>Personal Info</li>
            <li>Payment Settings</li>
            <li>Security</li>
            <li>Verification</li>
          </ul>
        </SettingContainer>
        <UpdateContainer>
          <UpdateHeader>
            <img src={Profile} alt="" />
            <div>
              <BsPencil className='edit' />
            </div>
          </UpdateHeader>
          <UpdateUserInfo>
            <h1>Arthur Larbi</h1>
            <p>Software Engineer</p>
            <small>Kumasi, Ashanti, Ghana</small>
          </UpdateUserInfo>
          <UpdateAboutBio>
            <h1>ABOUT</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aperiam quisquam facilis, sed repudiandae veniam nam veritatis amet cupiditate, sit eveniet officiis illo inventore odio sint aspernatur pariatur quam dolorum.
            </p>
            <div>
              <BsPencil />
            </div>
          </UpdateAboutBio>
        </UpdateContainer>
      </MyAccountPage>
    </MyAccountWrapper>
  )
}

export default MyAccount