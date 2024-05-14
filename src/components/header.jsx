import React from 'react';
import profile from '../data/Icons.svg';
import {Link} from 'react-router-dom';


const Header = () => (
  <div className='header'>
    <h1 className='header-h1'>My Todo List</h1>
    <Link to='/signin'>
      <img
        className='profile-image'
        src={profile}
      />
    </Link>
  </div>
);

export default Header;