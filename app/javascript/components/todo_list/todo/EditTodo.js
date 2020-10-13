import React from "react"
import {Modal} from "react-bootstrap";
import {Button} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class EditTodo extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleEditTodo = this.handleEditTodo.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCompletedChange = this.handleCompletedChange.bind(this);
        this.handleDeadLineChange = this.handleDeadLineChange.bind(this);

        this.state = {
            show: false,
            name: this.props.todo.name,
            dead_line: this.props.todo.dead_line ? new Date(this.props.todo.dead_line) : '',
            completed: this.props.todo.completed,
        };
    }

    handleEditTodo() {
        let body = JSON.stringify({
            name: this.state.name,
            dead_line: this.state.dead_line,
            completed: this.state.completed,
        })
        const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");

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

        this.setState({ show: false });
    }

    handleNameChange(element) {
        this.setState({
            ...this.state,
            name: element.target.value
        });
    }

    handleCompletedChange(element) {
        this.setState({
            ...this.state,
            completed: element.target.checked
        });
    }

    handleDeadLineChange(date) {
        console.log(date)
        this.setState({
            ...this.state,
            dead_line: date
        });
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <div>
                <a className="mybutton" onClick={this.handleShow}>
                    <span className='glyphicon glyphicon-pencil'/>
                </a>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Todo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label
                                    className="control-label col-md-3 col-sm-3"
                                    style={{alignSelf: 'center'}}>Completed:</label>
                                <div className="col-md-9 col-sm-9">
                                    <div className="checkbox pull-left ">
                                        <label>
                                            <input type="checkbox"
                                                   className="form-control edit-task-checkbox"
                                                   onChange={this.handleCompletedChange} checked={this.state.completed}
                                                   style={{margin: '-8px -20px'}}/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-md-3 col-sm-3"
                                       style={{alignSelf: 'center'}}>Name:</label>
                                <div className="col-md-9 col-sm-9">
                                    <input type="text" className="form-control" onChange={this.handleNameChange} value={this.state.name}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label
                                    className="control-label col-md-3 col-sm-3"
                                    style={{alignSelf: 'center'}}>DeadLine:</label>
                                <div className="col-md-9 col-sm-9">
                                    <div className="input-group">
                                        <DatePicker showTimeSelect dateFormat="MMMM d, yyyy HH:mm" className="form-control" onChange={this.handleDeadLineChange} selected={this.state.dead_line}/>
                                        <span className="input-group-addon">
                                            <span className="glyphicon glyphicon-calendar"/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-large btn-primary" type="button"
                                data-dismiss="modal" onClick={this.handleEditTodo}>Ok
                        </Button>
                        <Button className="btn-default" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default EditTodo