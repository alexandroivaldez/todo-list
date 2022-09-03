import { Component } from "react";

class CardList extends Component {
    render() {

        return (
            <div>
                {
                    this.props.taskProps.map((task) => {
                        return (
                        <div key={task.taskId} className="card">
                            <h3>{task.taskContext}</h3>
                            <button onClick={event => this(task.taskId)} id="done">DONE</button>
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default CardList;



//<CardList removeTaskHandler={this.removeTask} taskProps={this.state.tasks}/>