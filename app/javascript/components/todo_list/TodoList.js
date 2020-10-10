import React from "react"
import Todos from "./todo/Todos";
import EditTodoList from "./EditTodoList";

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");

        fetch('/todo_lists/' + this.props.id + '.json', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrf
            }
        }).then(()=> {
            this.props.onChange();
        })
    }

    render(){
        return(
            <div className="project" key={this.props.id}
                 style={{display: 'block', paddingBottom: '25px', paddingTop: '5px'}}>
                <div className="project-header">
                    <div style={{cursor: 'move'}} className="project-field">
                        <h2>
                            {this.props.name}
                        </h2>
                    </div>
                    <div className="control">
                        <ul>
                            <li>
                                <EditTodoList todo_list_name={this.props.name} todo_list_id={this.props.id} onChange={this.props.onChange}/>
                            </li>
                            <li><a className="delete"
    onClick={this.handleDelete}
    type='button'/></li>
                        </ul>
                    </div>
                </div>
                <Todos todo_list_id={this.props.id}/>
            </div>
        )
    }
}

export default TodoList