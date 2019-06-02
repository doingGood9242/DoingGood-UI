import React, { Component } from "react";
import {hashHistory, Link} from "react-router";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import signUpUserActions from "../actions/signUpAction";
import userIMg from "../../assests/images/icons/user.svg";
import lockImg from "../../assests/images/icons/lock.svg";


class ActiveUser extends Component {
    constructor(props) {
        super(props);
        this.redirectSignup = this.redirectSignup.bind(this);
    }

    redirectSignup() {
        // this.props.signUpUserAction.ActivateUser();
        hashHistory.push('/login');
    }

    render() {
        return (
            <div className="d-flex align-items-center justify-content-center login-wrapper">
                <div className="card">
                    <div className="card-body">
                        <h2 className="title text-center mt-0 mb-4">DoingGood</h2>
                        <h3 className="text-center"><Link to="/" className="text-black-50">Activation Successful</Link></h3>
                    </div>
                </div>
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {state};
}

function mapDispatchToProps(dispatch) {
    return {
        signUpUserAction: bindActionCreators(signUpUserActions, dispatch),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveUser);




