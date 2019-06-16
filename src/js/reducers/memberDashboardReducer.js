import {POSTBYUSERID, ASSIGNEDPOSTTOCONSUMER} from "../actions/memberdashboardActions";

const initialState = {
    allPostDataByUserId: null,
    assignedPostsBToConsumer: null
};

const memberDashboardReducer = (state=initialState, action) => {
    switch (action.type) {
        case POSTBYUSERID:
            return {...state,allPostDataByUserId: action.data};
            case ASSIGNEDPOSTTOCONSUMER:
            return {...state,assignedPostsBToConsumer: action.data};
        default:
            return state;
    }
};

export default memberDashboardReducer;