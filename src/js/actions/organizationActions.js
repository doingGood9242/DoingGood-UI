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
    }
};

export default organizationActions;