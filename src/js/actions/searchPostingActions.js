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
            url: 'https://13.127.249.79:9500/api/posting/all-posts',
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
                    if(err.response.status === 400){
                        toastr.error('Error ', 'Posts cannot be loaded');
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
                                    postType,
                                    upId) {
        const request = {
            method: 'post',
            responseType: 'json',
            url: 'https://13.127.249.79:9500/api/posting/new-service-good',
            data: {
                "description": description,
                "goodOrService":goodsOrServicesSelected,
                "minimum": parseInt(minimum, 10),
                "maximum":parseInt(maximum, 10),
                "rate": parseInt(rate, 10),
                "rateType":rateType,
                "postType":postType,
                "upId": upId,
                "id": 0
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
                        toastr.error('Error ', 'occured');
                    }
                })
        }
    },

    showInterestdAction: function(postId, userId) {
        const request = {
            method: 'post',
            responseType: 'json',
            url: 'https://13.127.249.79:9500/api/posting/sendInterestOnPost',
            data: {
                "postId": postId,
                "ulpId": userId
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
                            type: 'SHOWINTEREST',
                        });
                        toastr.success('', 'You showed interest on this post');
                    }
                },err =>{
                    if(err.response.status === 400){
                        toastr.error('Error ', 'You cannot show interest on this post');
                    }else if(err.response.status === 500){
                        toastr.error('Error ', 'You already showed interest on this post');
                    }
                })
        }
    }
};

export default searchPostingActions;