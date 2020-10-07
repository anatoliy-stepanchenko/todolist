import React from "react"

class User extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                {this.props.user_email}
            </div>
        )
    }
}

export default User