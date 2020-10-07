import React from "react"
import TodoLists from "./todo_list/TodoLists";

class TodoApp extends React.Component {
    handleLogOut() {
      const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
      fetch('/users/sign_out.json', {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
              'X-CSRF-Token': csrf
          },
      })
    }

    render() {
        return (
            <React.Fragment>
                {/*<a href="#" className="btn btn-primary my-2" onClick={e => e.preventDefault()}>*/}
                {/*    <FontAwesomeIcon icon="camera-retro" />Take a photo*/}
                {/*</a>*/}
                {/*  <div className="container">*/}
                {/*      <div className="row">*/}
                {/*          <div className="col">*/}

                {/*          </div>*/}
                {/*          <div className="col-6">*/}

                {/*          </div>*/}
                {/*          <div className="col">*/}
                {/*              <User user_email={this.props.user_email}/>*/}
                {/*          </div>*/}
                {/*      </div>*/}
                {/*      <div className="row">*/}
                {/*          <div className="col">*/}

                {/*          </div>*/}
                {/*          <div className="col-5">*/}
                {/*              <TodoLists/>*/}
                {/*          </div>*/}
                {/*          <div className="col">*/}

                {/*          </div>*/}
                {/*      </div>*/}
                {/*  </div>*/}

                <div className="container container-fluid text-center">
                    <div className="row">
                        <div className="col-xs-8 col-xs-offset-2 text-center">
                            <nav className="navbar navbar-transparen">
                                <div className="container-fluid">
                                    <div className="collapse navbar-collapse"
                                         id="myNavbar">
                                        <ul className="nav navbar-nav navbar-right">
                                            <li><a href="/users/sign_in"
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
