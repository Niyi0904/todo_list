import React from 'react';
import trash from '../data/TrashVector.svg';
import mark from '../data/Vector.svg';

import Button from './button';
import { UseStateContext } from '../context/contextProvider';

const Todo = () => {  
  const { add, setAdd, currentUser } = UseStateContext();

   const handleDelete = (index) => {
    const update = add.filter(( _, i) => i !== index);
    alert('You are about to delete this Todo');
    setAdd(update);
   }

  return (
    <div>
      <h1 className='todo-title'>My Todos</h1>
      <div>
          {currentUser && add.map((task, index) => (
            <div className='todo' key={index}>
              <div className='todo-list'>
                <div className='todo-list-plan'>{task.task}</div>
                <div>{task.date}</div>
              </div>
              <Button 
                imageName='todo-image'
                name='trash'
                image={trash}
                click={() =>handleDelete(index)}
              />
            </div>
          ))}
      </div>
    </div>
  )
};

export default Todo;
