import { Component } from "react";

class InputBox extends Component {
    render() {
        
        return (
            <div>
                <input className="input" type="text" placeholder='Add a task...' onChange={this.props.onChangeHandler} />
                <button onClick={this.props.addTaskHandler}>ENTER</button>
            </div>
        )
    }
}

export default InputBox;