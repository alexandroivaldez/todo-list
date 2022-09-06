import { Component } from 'react';
import './App.css';
import InputBox from './components/input-box/input-box.component';
import Toggle from  "./components/toggle/toggle.component.jsx"


class App extends Component {

  constructor() {
    super();

    this.state = {
      tasks: [],
      inputValue: "",
      toggleState: 0,
      styling: ""
    }
  }

  //Adds object task to this.state.tasks
  addTask = () => {
    const randomID = Math.floor(Math.random() * 10000);
    if(this.state.inputValue.length === 0){
      alert("No task created");
    } else {
      const updatedArr = [...this.state.tasks, {taskId: randomID, taskContext: this.state.inputValue}];
      const reset = "";
      this.setState(() => {
        return {tasks: updatedArr, inputValue: reset}
      });
      console.log(this.state)
    }
  }

  //Runs addTask if user presses enter
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
      return null
    });

    this.setState(() => {
      return {tasks: filteredArr}
    });
  }

  toggleChange = () => {
    if (this.state.toggleState == 0){
      console.log("Dark Mode");
      this.setState(() => {
        return {toggleState: 1}
      })

    } else {
      this.setState(() => {
        return {toggleState: 0}
      })
      console.log("Light Mode");
    }
  }

  render() {
    return (
      <div className="App">
        <h1>List.</h1>
        <InputBox
          addTaskHandler={this.addTask}
          onChangeHandler={this.handleChange}
          keyDownHandler={this.handleKeyDown}
          inputValue={this.state.inputValue} />
        {
          this.state.tasks.map((task) => {
            return (
            <div key={task.taskId}  id="cardz">
              <span className="text">{task.taskContext}</span>
              <span className="icon" onClick={event => this.removeTask(task.taskId)} >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                  <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" ></path>
                </svg>
              </span>
            </div>
            )
          })
        }
        <Toggle toggleChangeHandler={this.toggleChange}/>
        <footer> Designed by <a href="https://www.google.com">AV</a>.</footer>
      </div>
    );
  }
}

export default App;
