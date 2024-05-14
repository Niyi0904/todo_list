import React, { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import Header from './components/header';
import HomePage from './pages/homepage';
import SignIn from './pages/sign-in';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import { UseStateContext } from './context/contextProvider';

import { Route, Routes, redirect, Navigate } from 'react-router-dom'; 
import SignUp from './pages/sign-up';

const App = () => {
  const { currentUser, setCurrentUser} = UseStateContext()

  useEffect(() => {
    const unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth);
      }
    })

    return unsuscribeFromAuth;
  },[]);

  return (
    <div>
      <Header/>
      <Routes>
          <Route exact path='/' Component={HomePage} />
          {/* <Route exact path='/signin' element= {
            this.props.currentUser ? (
            <Navigate to='/' />
            ) : (
              <SignInAndSignUpPage />)} 
          /> */}
          <Route exact path='/signin' Component={SignIn} />
          <Route exact path='/signup' Component={SignUp} />
        </Routes>
    </div>
  )
} 

export default App;