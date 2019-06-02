import axios from 'axios';
import {toastr} from 'react-redux-toastr'
import {hashHistory} from "react-router";

let signUpUserActions = {

    displayhomepage:function(){
        hashHistory.push('/');
    },

    gotologin:function(){
        hashHistory.push('/login');
    },

    signupOrg: function(orgcreds){
        var charitydetails = {
            organisationdetails : {
                name:orgcreds.orgname,
                city:orgcreds.city,
                state:orgcreds.state,
                description:orgcreds.aboutme,
                total_amt:0
            },
            socialconnections : {
                website: orgcreds.website
            },
            bankdetails : {
                country:'USA',
                currency:'USD',
                accountnumber:''
            }
        };

        const request = {
            method: 'post',
            responseType: 'json',
            url: 'http://13.127.249.79:9500/api/organization/registration',
            data: {
                "about": "string",
                "city": orgcreds.city,
                "email": orgcreds.email,
                "organizationName": "string",
                "password": orgcreds.password,
                "phoneNumber": orgcreds.phone,
                "state": orgcreds.state,
                "website": "string"
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return (dispatch) => {
            axios(request)
                .then(response => {
                    if (response.status === 201) {
                        var signupResponse = response.data;
                        hashHistory.push("/confirmsignup");
                        dispatch({
                            type: 'LOGGED_IN',
                            data: response.data.user,token:response.data.accessToken
                        });
                    }
                },err => {
                    if(err.response.data.code === 409){
                        toastr.error('Error while signing up user', 'Email already exists')
                    }
                })
        }
    },

    signupUser: function(orgcreds){
        var volunteerdetails = {
            aboutvolunteer:orgcreds.aboutme,
            bankdetails : {
                country:'USA',
                currency:'USD',
                accountnumber:''
            }
        };
        const request = {
            method: 'post',
            responseType: 'json',
            url: 'http://13.127.249.79:9500/api/member/registration',
            data: {
                "aboutMe":  orgcreds.aboutme,
                "address1": "string",
                "address2": "string",
                "city": orgcreds.city,
                "email": orgcreds.email,
                "firstName": orgcreds.firstname,
                "lastName": orgcreds.lastname,
                "password": orgcreds.password,
                "phoneNumber": orgcreds.phone,
                "state": orgcreds.state,
                "zipCode": 0
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return (dispatch) => {
            axios(request)
                .then(response => {
                    if (response.status === 200) {
                        var signupResponse = response.data;
                        hashHistory.push("/confirmsignup");
                        dispatch({
                            type: 'LOGGED_IN',
                            data: response.data.user,token:response.data.accessToken
                        });
                    }
                },err => {
                    if(err.response.data.code === 409){
                        toastr.error('Error while signing up user', 'Email already exists')
                    }
                })
        }
    },

    signupActions: function(userCredentials) {
        const request = {
            method: 'post',
            responseType: 'json',
            url: 'http://13.127.249.79:9500/api/member/registration',
            data: {
                "about": "string",
                "city": userCredentials.city,
                "email": userCredentials.email,
                "organizationName": "string",
                "password": userCredentials.password,
                "phoneNumber": userCredentials.phone,
                "state": userCredentials.state,
                "website": "string"

            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return (dispatch) => {
            axios(request)
                .then(response => {
                    if (response.status === 200) {
                        var signupResponse = response.data;
                        hashHistory.push("/confirmsignup");
                        dispatch({
                            type: 'LOGGED_IN',
                            data: response.data.user,token:response.data.accessToken
                        });
                        window.localStorage.setItem("sessionUser", JSON.stringify(signupResponse));
                    }
                },err => {
                    if(err.response.data.code === 409){
                        toastr.error('Error while signing up user', 'Email already exists')
                    }
                })
        }
    },

    redirectLogin : function () {
        hashHistory.push('/login');
    },

    ActivateUser : function (email,updatData) {
        const request = {
            method: 'patch',
            responseType: 'json',
            url: 'http://13.127.249.79:9500/api/activateuser?email='+email,
            data: {
                "status": updatData.status
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return (dispatch) => {
            axios(request)
                .then(response => {
                    if (response.status === 200) {

                    } else if(response.status === 500){
                        hashHistory.push('/activationlinkexpired');
                    }
                },err => {
                    hashHistory.push('/activationlinkexpired');
                })
        }
    },

    redirectSignup : function () {
        hashHistory.push('/signup');
    }

};

export default signUpUserActions;