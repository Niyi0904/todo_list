import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import create from './data/btn.create.svg';
import trash from './data/TrashSimple.svg';
import Header from './components/header';
import Todo from './components/todo';
import Input from './components/input';
import Button from './components/button';
import { UseStateContext } from './context/contextProvider';

const App = () => {
  const {screenSize, setScreenSize, add, setAdd, handleChange, handleDate, handleAdd } = UseStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  },[screenSize]);

  return (
    <div>
      <Header/>
      <div className={screenSize <= 1300 ? 'container1' : 'container'}>
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
        </div>
        <div>
          <Todo 
            tasks={add}
            setTask={setAdd}
            
          />
        </div>
      </div>
    </div>
  )
} 

export default App;