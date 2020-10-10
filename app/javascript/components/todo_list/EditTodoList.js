import React from "react"
import {Modal} from "react-bootstrap";
import {Button} from "react-bootstrap";

class EditTodoList extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleEditTodoList = this.handleEditTodoList.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);

        this.state = {
            show: false,
            name: this.props.todo_list_name
        };
    }

    handleEditTodoList() {
        let body = JSON.stringify({name: this.state.name})
        const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");

        fetch('/todo_lists/' + this.props.todo_list_id + '.json', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrf
            },
            body: body,
        }).then((response) => {return response.json()})
            .then((todoList)=>{
                this.props.onChange();
            })

        this.setState({ show: false });
    }

    handleNameChange(element) {
        this.setState({ name: element.target.value });
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
                <a className="edit" type='button' onClick={this.handleShow}/>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit TodoList</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label className="control-label col-md-3 col-sm-3"
                                       htmlFor="addProjectName"
                                       style={{alignSelf: 'center'}}>Name:</label>
                                <div className="col-md-9 col-sm-9">
                                    <input type="text" className="form-control" onChange={this.handleNameChange} value={this.state.name}/>
                                </div>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-large btn-primary" type="button"
                                data-dismiss="modal" onClick={this.handleEditTodoList}>Ok
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

export default EditTodoList