import React from "react"

class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <tr className='tasks-row' key={this.props.todo.id}>
                <td className='table-checkBox'>
                    <input type="checkbox" value={this.props.todo.completed}/>
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
                    <div className="row">
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
                                   // onClick="deleteTask(this.id.split('_')[2],this.id.split('_')[1])"
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