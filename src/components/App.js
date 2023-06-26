import * as React from 'react';
import { useState } from 'react';
import "./styles.css";
import AddedTasks from './AddedTasks';
import DeletedTasks from './DeletedTasks';

export default function App () {
  const [todos, setTodos] = useState(['create a todo task','Microfrontend']);
  const [newTodo, setNewTodo] = useState('');
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  return (
    <div>
      <div className="MicroApp">
        <h1>Micro App</h1>
        <div className='d-flex'>
          <input type="text" value={newTodo} onChange={handleInputChange} placeholder="Add your Todo" />
          <button onClick={handleAddTodo} className='btn btn-primary ml-20 rounded'>Add Task</button>
        </div>
      </div>
      <div className='container mt-20'>
        <div className='col-xs-6'>
          <AddedTasks todo={todos}/>
        </div>
        <div className='col-xs-6'>
          <DeletedTasks />
        </div>
      </div>
    </div>
  );
}