import React from 'react';
import './App.css';
import { useAppDispatch } from './util/hook';
import { todoToggled } from './util/reducer';

const Task = ({name, onDelete, isDone}: { name: string, onDelete: React.MouseEventHandler, isDone: boolean}) => {
    const dispatch = useAppDispatch();

    const handleChange = () => {
        dispatch(todoToggled(name));
    }

    return(
        <div className='item'>
            <p style={{ color: isDone ? "green" : "red" }} id='taskName'>{name}</p>
            <input className='button' type='checkbox' onChange={handleChange}/>
            <button className='button' onClick={onDelete}>X</button>
        </div>
    );
}

export default Task;