import React from 'react';
import trash from '../data/TrashVector.svg';
import mark from '../data/Vector.svg';

import Button from './button';

const Todo = ({tasks}) => {  

  return (
    <div>
      <h1 className='todo-title'>My Todos</h1>
      <div>
        <ol>
          {tasks.map((task, index) => (
            <div className='todo'>
              <li className='todo-list'>
                <div className='todo-list-plan'>{task.plan}</div>
                <div>{task.dates}</div>
              </li>
              <Button 
                imageName='todo-image'
                name='trash'
                image={trash}
              />
            </div>
          ))}
        </ol>
      </div>
    </div>
  )
};

export default Todo;
