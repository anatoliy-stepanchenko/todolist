import React from "react"
import PropTypes from "prop-types"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCameraRetro } from '@fortawesome/fontawesome-free-solid'
import User from "./user/User";
import TodoLists from "./todo_list/TodoLists";

class TodoApp extends React.Component {
  render () {
    return (
      <React.Fragment>
        {/*<a href="#" className="btn btn-primary my-2" onClick={e => e.preventDefault()}>*/}
        {/*    <FontAwesomeIcon icon="camera-retro" />Take a photo*/}
        {/*</a>*/}
          <div className="container">
              <div className="row">
                  <div className="col">

                  </div>
                  <div className="col-6">

                  </div>
                  <div className="col">
                      <User user_email={this.props.user_email}/>
                  </div>
              </div>
              <div className="row">
                  <div className="col">

                  </div>
                  <div className="col-5">
                      <TodoLists/>
                  </div>
                  <div className="col">

                  </div>
              </div>
          </div>
      </React.Fragment>
    );
  }
}

export default TodoApp
