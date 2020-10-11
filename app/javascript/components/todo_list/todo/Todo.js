import React from "react"

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
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
                    <input type="checkbox" value={!!this.props.todo.completed}/>
                </td>
                <td className='table-name'>
                    <div className='left-border'>
                        <div className='task-name-text text-left'>
                            <label>{this.props.todo.name}</label>
                            <span className="deadline hidden"></span>
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
                                <a className="mybutton"
                                   // onClick="editTask(this.id.split('_')[2], this.id.split('_')[1])"
                                   data-toggle='modal'
                                   data-target='#editTask'>
                                    <span className='glyphicon glyphicon-pencil'/>
                                </a>
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