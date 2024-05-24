import React from 'react';
import profile from '../data/Icons.svg';
import {Link} from 'react-router-dom';
import { UseStateContext } from '../context/contextProvider';


const Header = () => {
  const {currentUser} = UseStateContext();
  return(
  <div className='header'>
    <Link to='/'>
      <h1 className='header-h1'>My Todo List</h1>
    </Link>
    <Link to={currentUser ? '/userprofile' : '/signin'}>
      <img
        className='profile-image'
        src={profile}
      />
    </Link>
  </div>
)};

export default Header;