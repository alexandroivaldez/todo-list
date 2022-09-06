import { Component } from "react";
import './toggle.css';

class Toggle extends Component {
    render() {
        return (
            <div>
                <label class="switch">
                    <input type="checkbox" onClick={this.props.toggleChangeHandler}/>
                        <span class="slider"></span>
                    </label>
            </div>
        )
    }
}

export default Toggle;