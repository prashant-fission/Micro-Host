import * as React from 'react';
import "./styles.css";
import AddedTasks from './AddedTasks';
import DeletedTasks from './DeletedTasks';

export default function App({ onChange }) {
  return (
    <div>
      <div className="MicroApp">
        <h1>Micro App</h1>
        <div className='d-flex'>
          <input onChange={onChange} type="text" placeholder="Enter your name" />
          <button className='btn btn-primary ml-20'>Add Task</button>
        </div>
      </div>
      <div className='container mt-20'>
        <div className='col-xs-6'>
          <AddedTasks />
        </div>
        <div className='col-xs-6'>
          <DeletedTasks />
        </div>
      </div>
    </div>
  );
}