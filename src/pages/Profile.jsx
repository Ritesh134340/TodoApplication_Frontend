import React from 'react'
import { ProfileWrapper } from '../styles/profile.style'
import {FaEdit} from "react-icons/fa"
const Profile = () => {
    const User=JSON.parse(localStorage.getItem("profile")) || ""
    
  return (
 
        <ProfileWrapper>
            <div>
            <h3>Full Name :<span> {User.name} {User.title}</span><FaEdit/></h3>
            <h3>Email :<span>{User.email}</span><FaEdit/></h3>
            </div>
          
        </ProfileWrapper>
  
   
  )
}

export default Profile
