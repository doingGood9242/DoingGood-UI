import { OPEN_MODAL } from "../actions/organizationDashboardActions";

const initialState = {
  isModalOpen:false
};

const organizationDashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL: return{...state, isModalOpen: true}
        default: return state;
    }
};

export default organizationDashboardReducer;