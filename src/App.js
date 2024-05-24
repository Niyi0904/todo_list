import React, { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import Header from './components/header';
import HomePage from './pages/homepage';
import SignIn from './pages/sign-in';
import {auth, createUserProfileDocument, firestore} from './firebase/firebase.utils'
import { UseStateContext } from './context/contextProvider';

import { Route, Routes, redirect, Navigate } from 'react-router-dom'; 
import SignUp from './pages/sign-up';
import UserProfile from './pages/userprofile';

const App = () => {
  const {setCurrentUser, currentUser, setAdd, add} = UseStateContext();

  useEffect(() => {
    const unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(async snapShot => {
          const userRef = firestore.doc(`users/${snapShot.id}`).collection('Posts').doc('my tasks')
          const snapshot = await userRef.get()
          if (snapshot.exists) {
            const result = snapshot.data()
  
            setAdd(result.newTasks)
          }
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            } 
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    })

    return unsuscribeFromAuth;
  },[]);

  return (
    <div className='yyy'>
      <Header/>
      <Routes>
          <Route exact path='/' Component={HomePage} />
          <Route exact path='/signin' element= {
            currentUser ? (
            <Navigate to='/' />
            ) : (
              <SignIn/>)} 
          />
          <Route exact path='/signup' element= {
            currentUser ? (
            <Navigate to='/' />
            ) : (
              <SignUp/>)} 
          />
          {/* <Route exact path='/user' Component={User}/> */}
          <Route exact path='/signin' Component={SignIn} />
          <Route exact path='/signup' Component={SignUp} />
          <Route exact path='/userprofile' Component={UserProfile} />

        </Routes>
    </div>
  )
} 

export default App;