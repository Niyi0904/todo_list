import React from 'react';
import profile from '../data/Icons.svg';

const Header = () => (
  <div className='header'>
    <h1 className='header-h1'>My Todo List</h1>
    <img
      className='profile-image'
      src={profile}
    />
  </div>
);

export default Header;