import * as React from "react";
import { useState } from "react";
import "./styles.css";
import AddedTasks from "./AddedTasks";
import DeletedTasks from "./DeletedTasks";

export default function App() {
  const [todos, setTodos] = useState(["create a todo task", "Microfrontend"]);
  const [deletedTask, setDeletedTask] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDelete = (task) => {
    deletedTask.push(task);
    todos.pop(task);
    setTodos([...todos]);
  };

  return (
    <div>
      <div className='MicroApp'>
        <h1 className='mainHeader'>Todo App</h1>
        <div className='d-flex'>
          <input
            type='text'
            value={newTodo}
            onChange={handleInputChange}
            placeholder='Add your Todo'
          />
          <button
            onClick={handleAddTodo}
            className='btn btn-primary ml-20 rounded'
          >
            Add Task
          </button>
        </div>
      </div>
      <div className='container mt-20 mainContainer'>
        <div className='col-xs-5'>
          <AddedTasks todo={todos} handleDelete={handleDelete} />
        </div>
        <div className='col-xs-5'>
          <DeletedTasks deletedTask={deletedTask} />
        </div>
      </div>
    </div>
  );
}
