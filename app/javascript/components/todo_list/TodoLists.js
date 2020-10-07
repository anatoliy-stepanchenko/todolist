import React from "react"
import TodoList from "./TodoList";

class TodoLists extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todo_lists: []
        };
    }
    componentDidMount(){
        fetch('/todo_lists.json')
            .then((response) => {return response.json()})
            .then((data) => {this.setState({ todo_lists: data }) });
    }
    render(){
        const todoLists = this.state.todo_lists.map((todo_list) => {
            return <TodoList key={todo_list.id} id={todo_list.id} name={todo_list.name}/>
        });
        return(
            <div>
                {todoLists}
            </div>
        )
    }
}

export default TodoLists