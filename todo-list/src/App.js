import { Component } from 'react';
import './App.css';


class App extends Component {

  constructor() {
    super();

    this.state = {
      tasks: [
        {
          taskId: 123,
          taskContext: 'Clean Litter'
        },
        {
          taskId: 2234,
          taskContext: 'Destroy cat'
        }
      ],
      inputValue: ""
    }
  }

  //Adds object task to this.state.tasks
  addTask = () => {
    const randomID = Math.floor(Math.random() * 10000);
    const updatedArr = [...this.state.tasks, {taskId: randomID, taskContext: this.state.inputValue}];
    this.setState(() => {
      return {tasks: updatedArr}
    });
    console.log("Button pressed!");
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
        <input className="input" type="text" placeholder='Add a task...' onChange={this.handleChange} />
        <button onClick={this.addTask}>ENTER</button>
        {
          this.state.tasks.map((task) => {
            return (
            <div key={task.taskId} className="card">
              <h3>{task.taskContext}</h3>
              <button onClick={event => this.removeTask(task.taskId)} id="done">DONE</button>
              <button onClick={event => this.removeTask(task.taskId)} id="trash">TRASH</button>
            </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
