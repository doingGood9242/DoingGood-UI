import axios from "axios";
import {toastr} from "react-redux-toastr";

export const ALLORGANIZATION = 'ALLORGANIZATION';

const organizationActions = {
    getAllOrgsAction: function() {
        const request = {
            method: 'get',
            responseType: 'json',
            url: 'https://13.127.249.79:9500/api/organization/getAllOrganizations',
            data: {},
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return (dispatch) => {
            axios(request)
                .then(response => {
                    if (response.status === 200) {
                        dispatch({
                            type: 'ALLORGANIZATION',
                            data: response.data
                        });
                    }
                },err =>{
                    if(err.response.data.status === 400){
                        toastr.error('Error ', 'OTP is expired.You cannot reset password');
                    }
                })
        }
    },
    linkToOrgsAction: function(id, listOfOrgs) {
        const request = {
            method: 'post',
            responseType: 'json',
            url: 'https://13.127.249.79:9500/api/member/linkToOrganization',
            data: {
                "organizationsIds": listOfOrgs,
                "ulpId": id
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return (dispatch) => {
            axios(request)
                .then(response => {
                    if (response.status === 200) {
                        dispatch({
                            type: 'LINKORGS',
                            data: response.data
                        });
                    }
                },err =>{
                    if(err.response.data.status === 400){
                        toastr.error('Error ', 'OTP is expired.You cannot reset password');
                    }
                })
        }
    },
    OrgUpdateAction: function(organizationName,
                                websiteUrl,
                                aboutMe,
                                emailId,
                                id) {
        const request = {
            method: 'post',
            responseType: 'json',
            url: 'https://13.127.249.79:9500/api/organization/organizationUpdate',
            data: {
                "about": aboutMe,
                "businessAddress1": "string",
                "businessAddress2": "string",
                "city": "string",
                "email": emailId,
                "governmentID": "string",
                "organizationName":organizationName,
                "organizationType": "string",
                "state": "string",
                "ulpId":id,
                "websiteUrl": websiteUrl,
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
                        dispatch({
                            type: 'ORGUPDATE',
                            // data: response.data
                        });
                    }
                },err =>{
                    if(err.response.data.status === 400){
                        toastr.error('Error ', 'Occured');
                    }
                })
        }
    }
};

export default organizationActions;