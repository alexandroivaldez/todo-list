import { Component } from 'react';
import './App.css';
import InputBox from './components/input-box/input-box.component';


class App extends Component {

  constructor() {
    super();

    this.state = {
      tasks: [],
      inputValue: ""
    }
  }

  //Adds object task to this.state.tasks
  addTask = () => {
    const randomID = Math.floor(Math.random() * 10000);
    if(this.state.inputValue.length === 0){
      alert("No task created");
    } else {
      const updatedArr = [...this.state.tasks, {taskId: randomID, taskContext: this.state.inputValue}];
      this.setState(() => {
        return {tasks: updatedArr}
      });
    }
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.addTask();
    }
  }

  //Changes this.state.inputValue value when input is changed.
  handleChange = (event) => {
    const userInput = event.target.value;
    console.log(event.target.value)
    this.setState(() => {
      return {inputValue: userInput}
    });
  }

  //Removes task from this.state.tasks
  removeTask = (param) => {
    const filteredArr = this.state.tasks.filter((task) => {
      if (task.taskId !== param) {
        return true;
      }
    });
    this.setState(() => {
      return {tasks: filteredArr}
    });

  }

  render() {
    return (
      <div className="App">
        <h1>List.</h1>
        <InputBox addTaskHandler={this.addTask} onChangeHandler={this.handleChange} keyDownHandler={this.handleKeyDown}/>
        {
          this.state.tasks.map((task) => {
            return (
            <div key={task.taskId} className="card">
              <h3>{task.taskContext}</h3>
              <button onClick={event => this.removeTask(task.taskId)} id="done">x</button>
            </div>
            )
          })
        }
        <footer> Designed by AV.</footer>
      </div>
    );
  }
}

export default App;
