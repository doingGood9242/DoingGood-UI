import axios from 'axios';
import {browserHistory} from 'react-router';
import {toastr} from 'react-redux-toastr'

let forgotActions = {
    resetpassword: function(email,token,credentials) {

        const request = {
            method: 'post',
            responseType: 'json',
            url: 'https://13.127.249.79:9500/api/user/valiadateForgetPassword',
            data: {
            "confirmPassword": credentials.confirmPassword,
            "newPassword": credentials.password,
            "token": token,
            "userLogin": email

            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return (dispatch) => {
            axios(request)
                .then(response => {
                    if (response.status === 200) {
                        toastr.success('', 'Password updated successfully');
                        // window.localStorage.setItem("sessionUser",null);
                        browserHistory.push('/');
                    }
                },err =>{
                    //    console.log(JSON.stringify(err,null,4));
                    if(err.response.data.status === 400){
                        toastr.error('Error ', 'Occured');
                    }

                })
        }
    },

    redirectLogin : function () {
        browserHistory.push('/login');
    },

    forgotPassword : function (credentails) {
        const request = {
            method: 'post',
            responseType: 'json',
            url: 'https://13.127.249.79:9500/api/user/forgetPassword',
            data: {
                "userName" : credentails.email
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };

        return (dispatch) => {
            axios(request)
                .then(response => {
                    if (response.status === 200) {
                        toastr.success('', 'Email sent to registered email address please check it')
                    }
                },err=>{
                    if(err.response.data.status === 400){
                        toastr.error('Error', 'Email not found')
                    }
                })
        }
    }
};

export default forgotActions;