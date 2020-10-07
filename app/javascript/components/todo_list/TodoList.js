import React from "react"
import Todos from "./todo/Todos";

class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div key={this.props.id}>
                <h1>{this.props.name}</h1>
                <h1><Todos todo_list_id={this.props.id}/></h1>
            </div>
        )
    }
}

export default TodoList