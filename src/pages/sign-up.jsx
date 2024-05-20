import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';

import Button from '../components/button';

import { UseStateContext } from '../context/contextProvider';

import { signInWithGoogle, auth, createUserProfileDocument } from '../firebase/firebase.utils';
import Input from '../components/input';

const SignUp = () => {
  // const { currentUser } = UseStateContext();

  const [state, setState] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = state

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      
      await createUserProfileDocument(user, {displayName})
      
      setState({email: '', password: '', displayName: '', confirmPassword: ''});
      
    } catch(error) {
      console.log(error);
    }

  }

  const handleEmail = (e) => (
    setState({...state, email:e.target.value})
  )
  const handlePassword = (e) => (
    setState({...state, password:e.target.value})
  )
  const handleConfirmPassword = (e) => (
    setState({...state, confirmPassword:e.target.value})
  )
  const handleDisplayName = (e) => (
    setState({...state, displayName:e.target.value})
  )


    return(
      <div className='sign-up'>
        <h1 className='header-h3'>Sign up with your and password</h1>

        <form onSubmit={handleSubmit}>
          <Input
            name="displayName" 
            type="text" 
            onChange={handleDisplayName}
            value={state.displayName} 
          />
          <label className='displayName-label'>Display Name</label>

          <Input
            name="sign-up-email" 
            type="email" 
            onChange={handleEmail}
            value={state.email} 
          />
          <label className='sign-up-email-label'>Email</label>

          <Input
            name="sign-up-password" 
            type="password" 
            onChange={handlePassword}
            value={state.password}  
            required 
          />
          <label className='sign-up-password-label'>Password</label>

          <Input
            name="sign-up-confirm" 
            type="password" 
            onChange={handleConfirmPassword}
            value={state.confirmPassword} 
          />
          <label className='sign-up-confirm-label'>Confirm Password</label>

          <div className='buttons'>
            <button
              type='password'
              className='sign-in-btn'
              onClick={handleSubmit}
            > Sign up </button>
          </div>
        </form>
      </div>
    )
  }

export default SignUp;