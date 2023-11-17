import React from 'react';
import './App.css';
import Task from './Task';

interface MainProps {
  title: string;
};

interface MainState {
  newTask: string;
  notification: string;
  list: string[];
};

class App extends React.Component<MainProps, MainState> {
  state: MainState = {
    newTask: "",
    notification: "",
    list: [],
  };
  
  handleAdd = () => {
    this.state.list.push(this.state.newTask);
    const input = document.getElementById("inputTask") as HTMLInputElement | null;
    if (input != null) {
      input.value = "";
    }
    this.forceUpdate();
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newTask: e.target.value});
  }

  handleDelete = (name: string) => {
    const index = this.state.list.indexOf(name, 0);
    if (index > -1) {
      this.state.list.splice(index, 1);
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div className='body'>
        <h1 className="title">{this.props.title}</h1>
        <div>
          <input id='inputTask' onChange={this.handleChange}/>
          <button className='button' onClick={this.handleAdd}>Add</button>
        </div>
        <ul>
          {this.state.list.map(item => 
            <li>
              <Task name={item} onDelete={() => this.handleDelete(item)}/>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
