import React from "react"
import TodoList from "./TodoList";
import NewTodoList from "./NewTodoList";
import {ReactSortable} from "react-sortablejs";

class TodoLists extends React.Component {

    constructor(props) {
        super(props);
        this.refreshTodoLists = this.refreshTodoLists.bind(this);
        this.state = {
            todo_lists: []
        };
    }

    refreshTodoLists() {
        fetch('/todo_lists.json')
            .then((response) => {return response.json()})
            .then((data) => {this.setState({ todo_lists: data }) });
    }

    componentDidMount(){
        fetch('/todo_lists.json')
            .then((response) => {return response.json()})
            .then((data) => {this.setState({ todo_lists: data }) });
    }

    render(){
        const todoLists = this.state.todo_lists.map((todo_list) => {
            return <TodoList key={todo_list.id} id={todo_list.id} name={todo_list.name} onChange={this.refreshTodoLists}/>
        });
        return(
            <div>
                <ReactSortable tag={'tbody'} handle={'.dragable_row_selector'} list={this.state.todo_lists} setList={(newState) => this.setState({ todo_lists: newState })}>
                    {todoLists}
                </ReactSortable>
                <NewTodoList onChange={this.refreshTodoLists}/>
            </div>
        )
    }
}

export default TodoLists