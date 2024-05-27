import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';

import Button from '../components/button';

import { UseStateContext } from '../context/contextProvider';

import { signInWithGoogle, auth, createUserProfileDocument } from '../firebase/firebase.utils';
import Input from '../components/input';

const SignIn = () => {
  const { currentUser } = UseStateContext();

  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async event => {
    event.preventDefault();

    const {email, password} = state

    try{
      const { user } = await auth.signInWithEmailAndPassword(email, password);

      await createUserProfileDocument(user)
    } catch(error) {
      alert("Email or Password don't match")
    }

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
        <h2 className='header-h2'>Sign in with your email and password</h2>

        <form onSubmit={handleSubmit}>
          <Input
            name="email" 
            type="email" 
            onChange={handleEmail}
            value={state.email} 
            placeholder= 'Email'
          />

          <Input
            name="password" 
            type="password" 
            onChange={handlePassword}
            value={state.password}  
            required 
            placeholder= 'Password'
          />

          <div className='buttons'>
            <button
              type='submit'
              className='sign-in-btn'
            > Sign in </button>
          </div>
        </form>

        <div>
        <button
            className='sign-in-with-goggle-btn'
              onClick={signInWithGoogle}
            > Sign in with Google </button>
        </div>
        
        <div>
          <h2 className='header-h2'>Don't have an account ?</h2>
          <Link to='/signup'>
            <button className='sign-in-btn'>
              sign Up
            </button>
          </Link>
          {/* <button
            className='sign-in-with-goggle-btn'
              onClick={() => auth.signOut()}
            > Sign out</button> */}
        </div>
      </div>
    )
  }

export default SignIn;