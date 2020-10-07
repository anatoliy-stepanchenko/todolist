import React from "react"
import {Modal} from "react-bootstrap";
import {Button} from "react-bootstrap";

class NewTodoList extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleCreateTodoList = this.handleCreateTodoList.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);

        this.state = {
            show: false
        };
    }

    handleCreateTodoList() {
        let body = JSON.stringify({name: this.state.name})
        const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");

        fetch('/todo_lists.json', {
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
                <div className="col-xs-12 addprojectdiv">
                    <a className="btn btn-primary add-project" onClick={this.handleShow}><span className="icon-plus"/>
                        Add TODO List
                    </a>
                </div>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label className="control-label col-md-3 col-sm-3"
                                       htmlFor="addProjectName"
                                       style={{alignSelf: 'center'}}>Name:</label>
                                <div className="col-md-9 col-sm-9">
                                    <input type="text" className="form-control" onChange={this.handleNameChange}/>
                                </div>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-large btn-primary" type="button"
                                data-dismiss="modal" onClick={this.handleCreateTodoList}>Ok
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

export default NewTodoList