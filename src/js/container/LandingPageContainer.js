import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../components/Login";
import {bindActionCreators} from "redux";
import loginActions from "../actions/loginActions";
import LandingPage from "../components/LangingPage";

class LandingPageContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <LandingPage {...this.props} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        token:state.loginReducer.token,
        user: state.loginReducer.user,
        idToken: state.loginReducer.session.idToken
        // WorkRequests:state.landingpage.WorkRequests,
        // loadInterestShownWRData:state.landingpage.loadInterestShownWRData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loginAction: bindActionCreators(loginActions, dispatch),
        // landingpageactions:bindActionCreators(landingpageactions,dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPageContainer);

