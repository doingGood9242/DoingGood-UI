export const OPEN_MODAL='OPEN_MODAL';
export const CLOSE_MODAL='CLOSE_MODAL';
export const SET_POST_DETAILS='SET_POST_DETAILS';
export const SET_GOOD_OR_SERVICE_SELECTED='SET_GOOD_OR_SERVICE_SELECTED';
export const SET_GOOD_OR_SERVICE='SET_GOOD_OR_SERVICE';
export const SET_DESCRIPTION='SET_DESCRIPTION';
export const SET_RATE='SET_RATE';
export const SET_MINIMUM_AMOUNT='SET_MINIMUM_AMOUNT';
export const SET_MAXIMUM_AMOUNT='SET_MAXIMUM_AMOUNT';
export const SET_RATE_TYPE='SET_RATE_TYPE';

export default {
    openModal: () => {
        return {
            type: OPEN_MODAL,
            isModalOpen: true
        }
    },
    closeModal: () => {
        return{
            type:CLOSE_MODAL,
            isModalOpen: false
        }
    },
    setPostDetails: (postDetails) => {
        return{
            type:SET_POST_DETAILS,
            postDetails
        }
    },
    setGoodOrServiceSelected: (isGoodOrServiceSelected) => {
        return{
            type:SET_GOOD_OR_SERVICE_SELECTED,
            isGoodOrServiceSelected
        }
    },
    setGoodOrService: (goodOrService) => {
        return{
            type:SET_GOOD_OR_SERVICE,
            goodOrService
        }
    },
    setDescription: (description) => {
        return{
            type:SET_DESCRIPTION,
            description
        }
    },
    setRate: (rate) => {
        return{
            type:SET_RATE,
            rate
        }
    },
    setMinimumAmount: (minimumAmount) => {
        return{
            type:SET_MINIMUM_AMOUNT,
            minimumAmount
        }
    },
    setMaximumAmount: (maximumAmount) => {
        return{
            type:SET_MAXIMUM_AMOUNT,
            maximumAmount
        }
    },
    setRateType: (rateType) => {
        return{
            type:SET_RATE_TYPE,
            rateType
        }
    }
}