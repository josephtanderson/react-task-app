import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";
import ToDo from './components/ToDo';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.handleEditChange = this.handleEditChange.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
    this.state = {
      placeholder: ToDo(),
      task: {
        text: '',
        id: uniqid()
      },
      tasks: [],
      editedTask: {}
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    if (this.state.task.text === '') {return}
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        placeholder: ToDo(),
        text: '', 
        id: uniqid()
      },
    });
  };
  
  removeTask =(e) => {
    let taskID = e.target.attributes.partnertask.nodeValue;
    let index = -1;
    this.state.tasks.map((ele,ind, arr)=> ele.id === taskID ? index = ind: ele);
    this.setState(state =>({
      tasks: state.tasks.slice(0,index).concat(state.tasks.slice(index+1))
    }))
  };
  editBtn = (e) => {
    if (this.state.tasks.map(x => x.hasOwnProperty('edit')).includes(true)) {return};
    let taskID = e.target.attributes.partnertask.nodeValue;
    let index = -1;
    this.state.tasks.map((ele,ind, arr)=> ele.id === taskID ? index = ind: ele);
    let editTask = {
      edit: true,
      text: this.state.tasks[index].text,
      id: this.state.tasks[index].id,
      previousText: this.state.tasks[index].text
    }
    this.setState(state => ({
      editedTask: editTask,
      tasks: state.tasks.slice(0,index).concat(editTask).concat(state.tasks.slice(index+1))
    }))
  }

  handleEditChange = (e) => {
    this.setState({
      editedTask: {
        edit: true,
        text: e.target.value,
        id: this.state.editedTask.id,
        previousText: this.state.editedTask.previousText
      }
    })
  }

  onEditSubmit = (e) => {
    e.preventDefault();
    let index = -1;
    this.state.tasks.map((ele,ind, arr)=> ele.edit === true ? index = ind: ele);
    let taskEdit = {
      text: this.state.editedTask.text,
      id: this.state.editedTask.id
    }
    if (this.state.editedTask.text === '') {
      taskEdit = {
        text: this.state.editedTask.previousText,
        id: this.state.editedTask.id
      }
    }
    this.setState(state => ({
      tasks: state.tasks.slice(0,index).concat(taskEdit).concat(state.tasks.slice(index+1)),
      editedTask: {}
    }));
  };

  render() {
    const { task, tasks, editedTask, placeholder } = this.state;
    
    return (
      <div className="app-container">
        <div className="title-div">
          <h1>TASK MANAGER</h1>
        </div>
        <form className="add-task-form" onSubmit={this.onSubmitTask}>
          <input placeholder={placeholder} onChange={this.handleChange} value={task.text} type="text" id="taskInput" autoComplete="off" /> 
          <button type="submit">
            Add Task
          </button>
        </form>
        <Overview delButton={this.removeTask} editButton={this.editBtn} editValue={editedTask.text} editChange={this.handleEditChange} editSubmit={this.onEditSubmit} tasks={tasks} />  
      </div>
    );
  }
}

export default App;