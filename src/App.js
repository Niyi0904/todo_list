import React from 'react';
import { useState } from 'react';
import './App.css';
import create from './data/btn.create.svg';
import trash from './data/TrashSimple.svg';
import Todo from './components/todo';
import Input from './components/input';
import Button from './components/button';

const App = () => {

  const [value, setValue] = useState('')
  const [date, setDate] = useState('');


  const [add, setAdd] = useState([]);

  const handleChange = (e) => (
    setValue(e.target.value)
  )
  const handleDate = (e) => (
    setDate(e.target.value)
  )

  const newTask = {
    plan: value,
    dates: date
  }

  const handleAdd = () => {
    setAdd([...add, newTask]);

    console.log(add)
  }

  return (
    <div className='container'>
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
        />
      </div>
    </div>
  )
} 

export default App;