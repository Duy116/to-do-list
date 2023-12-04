import React from 'react';
import './App.css';
import Task from './Task';
import { useAppSelector, useAppDispatch } from './util/hook';
import { todoAdded, todoDelete } from './util/reducer';

function App() {
  const [ newTask, setNewTask ] = React.useState("");
  const todos = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    dispatch(todoAdded(newTask))
    const input = document.getElementById("inputTask") as HTMLInputElement | null;
    if (input != null) {
      input.value = "";
    }
    console.log(todos);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  }

  const handleDelete = (id: number) => {
    dispatch(todoDelete(id))
  }

  return (
    <div className='body'>
      <h1 className="title">To do list</h1>
      <div>
        <input id='inputTask' onChange={handleChange}/>
        <button className='button' onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {todos.map(item => 
          <li>
            <Task name={item.text} onDelete={() => handleDelete(item.id)} isDone={item.completed}/>
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;