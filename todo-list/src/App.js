import { Component } from 'react';
import './App.css';


class App extends Component {

  constructor() {
    super();

    this.state = {

    }
  }


  render() {
    return (
      <div className="App">
        <h1> ToDo List </h1>
        <input type="text" placeholder='Add a task...' />
      </div>
    );
  }
}

export default App;
