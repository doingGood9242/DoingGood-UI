import axios from 'axios';
import {browserHistory} from 'react-router';
var jwtDecode = require('jwt-decode');
import {toastr} from 'react-redux-toastr'
import {hashHistory} from "react-router";

let loginActions = {
    gotousersignup:function() {
        browserHistory.push('/usersignup')
    },

    loginUser: function(userCredentials) {
        const request = {
            method: 'post',
            responseType: 'json',
            url: 'https://13.127.249.79:9500/api/user/authenticate',
            data: {
                "username" : userCredentials.email,
                "rememberMe": true,
                "password" : userCredentials.password,

            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return (dispatch) => {
            axios(request)
                .then(response => {
                    if (response.status === 200) {
                        var loginResponse = response.data;
                        if(response.userStatusCode === 'INACT'){
                            toastr.error('Error ', 'User has not activated the account');
                            return;
                        }
                        let user = response.data.user;
                        let token = response.data.accessToken;
                        dispatch({
                            type: 'LOGGED_IN',
                            // data: response.data
                            data:response.data,token:token,user:user
                        });
                        window.localStorage.setItem("sessionUser", JSON.stringify(response.data.user));
                        window.localStorage.setItem("sessionUserToken", JSON.stringify(response.data.accessToken));
                        if(loginResponse.userRole === 'MEMBER'){
                            hashHistory.push('/editVoluteerProfile');
                        }
                        if(loginResponse.userRole === 'charity'){
                            browserHistory.push('/charity/charityorganizerdashboard');
                        }
                        if(loginResponse.userRole === 'admin'){
                            browserHistory.push('/admindashboard/authorizecharities');
                        }
                    }
                },err => {
                    toastr.error('Invalid Login', 'Please check username or password')
                })
        }
    },
    loadLogin: function() {

        return function(dispatch, getState) {
            var sessionUser,sessionUserToken;
            try {
                sessionUser = JSON.parse(window.localStorage.getItem("sessionUser"));
                sessionUserToken = JSON.parse(window.localStorage.getItem("sessionUserToken"));

            } catch (err) {
            }
            if (sessionUserToken) {
                var decoded = jwtDecode(sessionUserToken);
                var tokenExpiry = decoded.exp*1000;
                var currentTime = new Date().getTime();
                if(currentTime<tokenExpiry){
                    dispatch({
                        type:'UPDATE_LOGGED_IN',
                        data:sessionUser,token:sessionUserToken
                    });
                }
            }
        }
    },
    redirectForgotPassword : function () {
        browserHistory.push('/forgotpassword');
    },

    redirectOrgSignup : function () {
        browserHistory.push('/orgsignup');
    },
    validateActiveUser : function (userCredentails,token) {
        const email = userCredentails.email;
        const request = {
            method: 'get',
            responseType: 'json',
            url: '/users?email='+email,
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : token
            }
        };
        return (dispatch) => {
            axios(request)
                .then(response => {
                    if (response.status === 200) {
                        var loginResponse = response.data;

                        if(response.data.data[0].status === "inactive"){
                            toastr.error('Error','User is inactive') ;
                        }else {

                        }
                    }
                },err => {
                })


        }
    },

    gotoSpace: function (role) {

        if(role === 'client'){
            browserHistory.push('/clientprofile');
        }
        if(role === 'volunteer'){
            browserHistory.push('/volunteerprofile');
        }
        if(role === 'charity'){
            browserHistory.push('/charityorganizerprofile');
        }
    },

};

export default loginActions;