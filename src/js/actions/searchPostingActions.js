import axios from "axios";
import {toastr} from "react-redux-toastr";

export const POSTSERVICEREQUEST = 'POSTSERVICEREQUEST';
export const POSTSERVICEREQUESTCLOSE = 'POSTSERVICEREQUESTCLOSE';
export const  ALLSERVICEREQUEST = 'ALLSERVICEREQUEST';

const searchPostingActions = {
    postServiceRequestAction: () => ({
        type: POSTSERVICEREQUEST,
        payload: false
    }),
 postServiceRequestActionClose: () => ({
    type: POSTSERVICEREQUESTCLOSE,
    payload: false
    }),
    allPostingServiceAction: function() {
        const request = {
            method: 'post',
            responseType: 'json',
            url: 'http://13.127.249.79:9500/api/posting/all-posts',
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
                            type: 'ALLSERVICEREQUEST',
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

    postWorkRequestAction: function(goodsOrServicesSelected,
                                    goods,
                                    description,
                                    rate,
                                    minimum,
                                    maximum,
                                    rateType,
                                    postType) {
        const request = {
            method: 'post',
            responseType: 'json',
            url: 'http://13.127.249.79:9500/api/posting/new-service-good',
            data: {
                "description": description,
                "goodOrService":goodsOrServicesSelected,
                "minimum": minimum,
                "maximum":maximum,
                "rate": rate,
                "rateType":rateType,
                "postType":postType,
                "upId": 0
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
                            type: 'POSTSERVICEREQUEST',
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

export default searchPostingActions;