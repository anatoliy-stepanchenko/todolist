import React from "react"
import Todo from "./Todo";

class Todos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }
    componentDidMount(){
        fetch(`/todo_lists/${this.props.todo_list_id}/todos.json`)
            .then((response) => {return response.json()})
            .then((data) => {this.setState({ todos: data }) });
    }
    render(){
        const todos = this.state.todos.map((todo) => {
            return <Todo key={todo.id} todo={todo}/>
        });
        return(
            <div className="task-list">
                <table className='tasks-table'>
                    <tbody>
                        {todos}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Todos