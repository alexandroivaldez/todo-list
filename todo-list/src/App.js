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
      ]
    }
  }

  //Adds task to state
  addTask= () => {
    const updatedArr = [...this.state.tasks, {taskId: 3, taskContext: "hello"}];
    this.setState(() => {
      return {tasks: updatedArr}
    });
    console.log("Button pressed!");
  }


  render() {
    return (
      <div className="App">
        <br></br>
        <input type="text" placeholder='Add a task...' />
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
