import React from "react"
import {Button} from "react-bootstrap";

class NewTodo extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleCreateTodo = this.handleCreateTodo.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.state = {
            name: ''
        };
    }

    handleCreateTodo() {
        let body = JSON.stringify({name: this.state.name})
        const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");

        fetch('/todo_lists/' + this.props.todo_list_id + '/todos.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrf
            },
            body: body,
        }).then((response) => {return response.json()})
            .then((todoList)=>{
                this.props.onChange();
            })

        this.setState({ name: '' });
    }

    handleNameChange(element) {
        this.setState({ name: element.target.value });
    }

    render() {
        return (
            <div className="new_task">
                <div className="create-task-header">
                    <div className="create-task-in input-group">
                        <input className="form-control" placeholder="Start typing here to create a task..." type="text" onChange={this.handleNameChange} value={this.state.name}/>
                        <span className="input-group-btn add-task">
                            <Button className="btn add-task" onClick={this.handleCreateTodo} >Add Task</Button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewTodo