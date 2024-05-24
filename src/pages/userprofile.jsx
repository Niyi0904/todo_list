import React, { useEffect } from 'react';
import profile from '../data/Icons.svg';

import {auth, createUserProfileDocument} from '../firebase/firebase.utils'
import { UseStateContext } from '../context/contextProvider';
import { Link } from 'react-router-dom';


const UserProfile = () => {
  const {userName, setUserName} = UseStateContext();
  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
  
        userRef.onSnapshot(async snapShot => {
          const userName = snapShot.data()
          setUserName(userName)
        })
      } 
    })
  })

  return(
    <div className='user-profile'>
      <img
        className='user-profile-image'
        src={profile}
      />
      <div className='user-profile-info'>
        <div className='user-profile-info-de'>
          <h3>Name : <span>{userName.displayName }</span></h3>
          <h3 className='user-email'>Email : <span>{userName.email }</span></h3>
          <Link to='/'>
            <button
            className='sign-in-btn'
              onClick={() => auth.signOut()}
            > LOG OUT </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserProfile;