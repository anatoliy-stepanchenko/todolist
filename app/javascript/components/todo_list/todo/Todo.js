import React from "react"
import EditTodo from "./EditTodo";

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
        this.handleCompletedChange = this.handleCompletedChange.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.state = {
            hovered: false,
        }
    }

    handleDeleteTodo() {
        const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");

        fetch('/todo_lists/' + this.props.todo_list_id + '/todos/' + this.props.todo.id + '.json', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrf
            }
        }).then(()=> {
            this.props.onChange();
        })
    }

    handleCompletedChange(e) {
        const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
        let body = JSON.stringify({completed: e.target.checked})

        fetch('/todo_lists/' + this.props.todo_list_id + '/todos/' + this.props.todo.id + '.json', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrf
            },
            body: body,
        }).then(()=> {
            this.props.onChange();
        })
    }

    handleMouseEnter() {
        this.setState({
            hovered: true,
        });
    }

    handleMouseLeave() {
        this.setState({
            hovered: false,
        });
    }

    render(){
        return(
            <tr className={`tasks-row ${this.state.hovered ? 'mouseovertask' : ''}`} key={this.props.todo.id} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <td className='table-checkBox'>
                    <input type="checkbox" checked={!!this.props.todo.completed} onChange={this.handleCompletedChange}/>
                </td>
                <td className='table-name'>
                    <div className='left-border'>
                        <div className='task-name-text text-left'>
                            <label style={this.props.todo.completed ? {textDecoration: 'line-through'} : null}>{this.props.todo.name}</label>
                            {this.props.todo.dead_line != null &&
                                <span className="deadline">{new Date(this.props.todo.dead_line).toLocaleString()}</span>
                            }
                        </div>
                    </div>
                </td>
                <td className='table-controls'>
                    <div className={`row ${this.state.hovered ? '' : 'hidden'}`}>
                        <ul>
                            <li>
                                <a style={{cursor: 'move'}} className="mybutton">
                                    <span className='glyphicon glyphicon-sort'/>
                                </a>
                            </li>
                            <li style={{borderLeft: '1px solid #ccc'}}>
                                <EditTodo onChange={this.props.onChange} todo_list_id={this.props.todo_list_id} todo={this.props.todo}/>
                            </li>
                            <li style={{borderLeft: '1px solid #ccc'}}>
                                <a className="mybutton"
                                   onClick={this.handleDeleteTodo}
                                   type="button">
                                    <span className='glyphicon glyphicon-trash'/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </td>
            </tr>
        )
    }
}

export default Todo