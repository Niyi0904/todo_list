import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import create from './data/btn.create.svg';
import trash from './data/TrashSimple.svg';
import Header from './components/header';
import Todo from './components/todo';
import Input from './components/input';
import Button from './components/button';
import MobileCreateTodo from './components/mobile.createTodo';
import { UseStateContext } from './context/contextProvider';

const App = () => {
  const {screenSize, setScreenSize, add, setAdd, handleChange, handleDate, handleAdd, isClicked, setIsClicked, handleClick } = UseStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  },[screenSize]);

  return (
    <div>
      <Header/>
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
            name='create'
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

export default App;