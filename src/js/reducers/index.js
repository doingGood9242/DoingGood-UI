import { combineReducers } from "redux";
import {reducer as toastrReducer} from 'react-redux-toastr';
import loginReducer from "./loginReducer";
import postRequestServiceReducer from "./postRequestReducer";
import organizationReducer from "./organizationReducer";
import memberDashboardReducer from "./memberDashboardReducer";
import organizationDashboardReducer from "./organizationDashboardReducer";
// Combine all reducers as root reducer
export default combineReducers(
    {
        toastr: toastrReducer,
        loginReducer,
        postRequestServiceReducer,
        organizationReducer,
        memberDashboardReducer,
        organizationDashboardReducer
    });
