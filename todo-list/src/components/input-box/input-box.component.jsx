import { Component } from "react";

class InputBox extends Component {


    render() {
        return (
            <div>
                <input className="input" type="text" placeholder='Add a task...' onChange={this.props.onChangeHandler} onKeyDown={this.props.keyDownHandler} />
                <button onClick={this.props.addTaskHandler} id="enter">ENTER</button>
            </div>
        )
    }
}

export default InputBox;