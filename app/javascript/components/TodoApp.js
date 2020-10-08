import React from "react"
import TodoLists from "./todo_list/TodoLists";

class TodoApp extends React.Component {
    handleLogOut(e) {
      e.preventDefault();
      const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
      fetch('/users/sign_out.json', {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
              'X-CSRF-Token': csrf
          },
      }).then(res => {
          document.location.reload();
      })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container container-fluid text-center">
                    <div className="row">
                        <div className="col-xs-8 col-xs-offset-2 text-center">
                            <nav className="navbar navbar-transparen">
                                <div className="container-fluid">
                                    <div className="collapse navbar-collapse"
                                         id="myNavbar">
                                        <ul className="nav navbar-nav navbar-right">
                                            <li><a href="#"
                                                   onClick={this.handleLogOut}><span
                                                className="glyphicon glyphicon-log-in"/> LogOut</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            <div className="mainpanel_text">
                                SIMPLE TODO LIST
                                <div className="small">FOR RUBY GARAGE :)</div>
                            </div>
                            <div className="projects">
                                <TodoLists/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default TodoApp
