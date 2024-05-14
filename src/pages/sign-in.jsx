import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';

import Button from '../components/button';

import { UseStateContext } from '../context/contextProvider';

import { signInWithGoogle, auth } from '../firebase/firebase.utils';
import Input from '../components/input';

const SignIn = () => {
  const { currentUser } = UseStateContext();

  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = event => {
    event.preventDefault();

    setState({email: '', password: ''});
  }

  const handleEmail = (e) => (
    setState({...state, email:e.target.value})
  )
  const handlePassword = (e) => (
    setState({...state, password:e.target.value})
  )

    return(
      <div className='sign-in'>
        <h1 className='header-h2'>Sign in with your and password</h1>

        <form onSubmit={handleSubmit}>
          <Input
            name="email" 
            type="email" 
            onChange={handleEmail}
            value={state.email} 
          />
          <label className='email-label'>Email</label>

          <Input
            name="password" 
            type="password" 
            onChange={handlePassword}
            value={state.password}  
            required 
          />
          <label className='password-label'>Password</label>

          <div className='buttons'>
            <button
              type='submit'
              className='sign-in-btn'
              onClick={handleSubmit}
            > Sign in </button>

            <button
            className='sign-in-with-goggle-btn'
              onClick={signInWithGoogle}
            > Sign in with Google </button>
          </div>
        </form>

        <div>
          <h2 className='header-h2'>Dont have an account ?</h2>
          <Link to='/signup'>
            <button className='sign-in-btn'>
              sign Up
            </button>
          </Link>
        </div>
      </div>
    )
  }

export default SignIn;