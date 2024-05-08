import React from 'react';
import trash from '../data/TrashVector.svg';
import mark from '../data/Vector.svg';

import Button from './button';
import { UseStateContext } from '../context/contextProvider';

const Todo = () => {  
  const { add, setAdd } = UseStateContext();

   const handleDelete = (index) => {
    const update = add.filter(( _, i) => i !== index);
    alert('you are about to delete');
    setAdd(update);
   }

  return (
    <div>
      <h1 className='todo-title'>My Todos</h1>
      <div>
        <ol>
          {add.map((task, index) => (
            <div className='todo' key={index}>
              <li className='todo-list'>
                <div className='todo-list-plan'>{task.plan}</div>
                <div>{task.dates}</div>
              </li>
              <Button 
                imageName='todo-image'
                name='trash'
                image={trash}
                click={() =>handleDelete(index)}
              />
            </div>
          ))}
        </ol>
      </div>
    </div>
  )
};

export default Todo;
