import { Component } from 'react';
import './App.css';


class App extends Component {

  constructor() {
    super();

    this.state = {
      tasks: [
        {
          taskId: 1,
          taskContext: "Clean the dishes"
        },
        {
          taskId: 2,
          taskContext: "Clean your room"
        }
      ],
      inputValue: "A"
    }
  }

  //Adds task to state
  addTask= () => {
    const updatedArr = [...this.state.tasks, {taskId: 3, taskContext: this.state.inputValue}];
    this.setState(() => {
      return {tasks: updatedArr}
    });
    console.log("Button pressed!");
  }

  handleChange = (event) => {
    const userInput = event.target.value;
    console.log(event.target.value)
    this.setState(() => {
      return {inputValue: userInput}
    });
  }

  render() {
    return (
      <div className="App">
        <br></br>
        <input type="text" placeholder='Add a task...' onChange={this.handleChange} />
        <button onClick={this.addTask}>ENTER</button>
        {
          this.state.tasks.map((task) => {
            return <h3>{task.taskContext}</h3>
          })
        }
      </div>
    );
  }
}

export default App;
