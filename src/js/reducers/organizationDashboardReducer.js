
import { OPEN_MODAL,
    CLOSE_MODAL,
    SET_POST_DETAILS,
    SET_GOOD_OR_SERVICE_SELECTED,
    SET_GOOD_OR_SERVICE,
    SET_DESCRIPTION,
    SET_RATE,
    SET_MINIMUM_AMOUNT,
    SET_MAXIMUM_AMOUNT,
    SET_RATE_TYPE} from "../actions/organizationDashboardActions";

const initialState = {
  isModalOpen:false
};

const organizationDashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case "OPEN_MODAL": return{...state, isModalOpen: true};
        case "CLOSE_MODAL": return{...state, isModalOpen: false};
        case "SET_POST_DETAILS": return{...state, postDetails: action.postDetails};
        case "SET_GOOD_OR_SERVICE_SELECTED": return{...state, isGoodOrServiceSelected: action.isGoodOrServiceSelected};
        case "SET_GOOD_OR_SERVICE": return{...state, goodOrService: action.goodOrService};
        case "SET_DESCRIPTION": return{...state, description: action.description};
        case "SET_RATE": return{...state, description: action.rate};
        case "SET_MINIMUM_AMOUNT": return{...state, description: action.minimumAmount};
        case "SET_MAXIMUM_AMOUNT": return{...state, description: action.maximumAmount};
        case "SET_RATE_TYPE": return{...state, rateType: action.rateType};
        default:
            return initialState;
    }
};

export default organizationDashboardReducer;