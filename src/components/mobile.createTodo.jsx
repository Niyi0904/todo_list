import React from 'react';
import Input from './input';
import Button from './button';
import create from '../data/btn.create.svg'
import { UseStateContext } from '../context/contextProvider';

const MobileCreateTodo = () => {
  const {handleAdd, handleChange, handleDate} = UseStateContext();
  return (
    <div className='mobile'>
      <div className='mobile-container'>
        <div className='mobile-sub-container'>
          <h1 className='todo-title'>Add Todo</h1>
          <Input 
            type='text'
            onChange={handleChange}
            name= 'mobile-input-text'
          />
          <Input 
            type='date'
            onChange={handleDate}
            name='mobile-input-date'
          />
          <Button 
            click={handleAdd}
            image={create}
            name='create'
            imageName='mobile-todo-create'
          />
        </div>
      </div>
    </div>
  )
} 

export default MobileCreateTodo ;