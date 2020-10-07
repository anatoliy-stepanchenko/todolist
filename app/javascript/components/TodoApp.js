import React from "react"
import PropTypes from "prop-types"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCameraRetro } from '@fortawesome/fontawesome-free-solid'

class TodoApp extends React.Component {
  render () {
    return (
      <React.Fragment>
        <a href="#" className="btn btn-primary my-2">
            <FontAwesomeIcon icon="camera-retro" />Take a photo
        </a>
      </React.Fragment>
    );
  }
}

export default TodoApp
