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
            <div key={task.taskId}  id="cardz">
              <span class="text">{task.taskContext}</span>
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                  <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" ></path>
                </svg>
              </span>
            </div>
            )
          })
        }
        <footer> Designed by <a href="https://www.google.com">AV</a>.</footer>
      </div>
    );
  }
}

export default App;
