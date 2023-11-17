import React from 'react';
import './App.css';

class Task extends React.Component<{name: string, onDelete: React.MouseEventHandler}, {isDone: boolean}> {
    state = { 
        isDone: false,
    };

    handleChange = () => {
        this.setState({ isDone: !this.state.isDone})
    }

    componentWillUnmount(): void {
        alert("A task has been deteled!");
    }

    render() {
        return(
            <div className='item'>
                <p style={{ color: this.state.isDone ? "green" : "red" }} id='taskName'>{this.props.name}</p>
                <input className='button' type='checkbox' onChange={this.handleChange}/>
                <button className='button' onClick={this.props.onDelete}>X</button>
            </div>
        );
    }
}

export default Task;