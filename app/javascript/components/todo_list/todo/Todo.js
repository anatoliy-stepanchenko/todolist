import React from "react"

class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div key={this.props.todo.id}>
                <h3>{this.props.todo.name} {this.props.todo.completed ? 'YES' : 'NO'}</h3>
            </div>
        )
    }
}

export default Todo