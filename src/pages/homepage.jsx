import React from "react";
import { useState, useEffect } from 'react';
import create from '../data/btn.create.svg';
import trash from '../data/TrashSimple.svg';
import Todo from "../components/todo";
import Input from '../components/input';
import Button from '../components/button';
import MobileCreateTodo from '../components/mobile.createTodo';
import { UseStateContext } from "../context/contextProvider";

import { Route, Routes, redirect, Navigate } from 'react-router-dom'; 

const HomePage = () => {
  const {screenSize, setScreenSize, add, setAdd, handleChange, handleDate, handleAdd, isClicked, setIsClicked, handleClick, currentUser } = UseStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  },[screenSize]);

  return (
    <div>
      <div className={screenSize <= 600 || screenSize <= 1300 ? 'container1' : 'container'}>
        {screenSize >= 600 ? 
          <div className='sub-container'>
          <Input 
            type='text'
            onChange={handleChange}
            name= 'input-text'
          />
          <Input 
            type='date'
            onChange={handleDate}
            name='input-date'
          />
          <Button 
            click={handleAdd}
            image={create}
            name='create'
            imageName='todo-create'
          />
        </div> : <div className='sub-container2'>
          {
            <Button 
            click={handleClick}
            image={create}
            name='mobile-create'
            imageName='todo-create'
          />
          }
        </div>
        }
        <div>
          <Todo/>
        </div>
      </div>

      {isClicked && <MobileCreateTodo />}
    </div>
  )
} 

export default HomePage;