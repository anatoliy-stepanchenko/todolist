import React from "react"
import Todo from "./Todo";
import NewTodo from "./NewTodo";
import { ReactSortable } from "react-sortablejs";

class Todos extends React.Component {

    constructor(props) {
        super(props);
        this.refreshTodos = this.refreshTodos.bind(this);
        this.state = {
            todos: []
        };
    }
    componentDidMount(){
        fetch(`/todo_lists/${this.props.todo_list_id}/todos.json`)
            .then((response) => {return response.json()})
            .then((data) => {this.setState({ todos: data }) });
    }
    refreshTodos(){
        fetch(`/todo_lists/${this.props.todo_list_id}/todos.json`)
            .then((response) => {return response.json()})
            .then((data) => {this.setState({ todos: data }) });
    }
    render(){
        const todos = this.state.todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} todo_list_id={this.props.todo_list_id} onChange={this.refreshTodos}/>
        });
        return(
            <div>
                <NewTodo todo_list_id={this.props.todo_list_id} onChange={this.refreshTodos}/>
                <div className="task-list">
                    <table className='tasks-table'>
                        <ReactSortable tag={'tbody'} handle={'.dragable_row_selector'} list={this.state.todos} setList={(newState) => this.setState({ todos: newState })}>
                            {todos}
                        </ReactSortable>
                    </table>
                </div>
            </div>
        )
    }
}

export default Todos