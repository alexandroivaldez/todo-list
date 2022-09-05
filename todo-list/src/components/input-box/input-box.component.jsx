import { Component } from "react";

class InputBox extends Component {


    render() {
        return (
            <div>
                <input className="input" type="text" value={this.props.inputValue} placeholder='Add a task...' onChange={this.props.onChangeHandler} onKeyDown={this.props.keyDownHandler} maxLength="19" />
            </div>
        )
    }
}

export default InputBox;