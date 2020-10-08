import React from "react"
import Todos from "./todo/Todos";

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
                            <li><a className="edit"
    // onClick='editProject(this.id)'
    data-toggle='modal'
    data-target='#editProject' type='button'/>
                            </li>
                            <li><a className="delete"
    onClick={this.handleDelete}
    type='button'/></li>
                        </ul>
                    </div>
                </div>
                <div className="new_task">
                    <div className="create-task-header">
                        <div className="create-task-in input-group">
                            <input className="form-control"
                                   placeholder="Start typing here to create a task..."
                                   type="text"/>
                            <span className="input-group-btn add-task">
                                <button className="btn add-task"
                                        // onClick='addTask(this.id)'
                                        id='addTaskButton_projectId_'>Add Task</button>
                            </span>
                        </div>
                    </div>
                </div>
                <Todos todo_list_id={this.props.id}/>
            </div>
        )
    }
}

export default TodoList