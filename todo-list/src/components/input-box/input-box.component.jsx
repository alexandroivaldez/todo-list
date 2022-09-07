import React from 'react';

const InputBox = () => {
    return (
        <div>
            <input id={this.props.styles[1]} type="text" value={this.props.inputValue} placeholder='Add a task...' onChange={this.props.onChangeHandler} onKeyDown={this.props.keyDownHandler} maxLength="18" />
        </div>
    )
}

export default InputBox;

/*
class InputBox extends Component {
    render() {
        return (
            <div>
                <input id={this.props.styles[1]} type="text" value={this.props.inputValue} placeholder='Add a task...' onChange={this.props.onChangeHandler} onKeyDown={this.props.keyDownHandler} maxLength="18" />
            </div>
        )
    }
}
*/