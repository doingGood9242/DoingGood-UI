import {applyMiddleware, createStore, compose} from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import {persistStore, autoRehydrate} from 'redux-persist';
import rootReducer from "../reducers/index";

// Configure store with reducers and create
const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger),autoRehydrate()));
const persistConfig = {
    whitelist: ['loginReducer', 'postRequestServiceReducer', 'organizationReducer', 'memberDashboardReducer', 'toastrReducer']
};
persistStore(store, persistConfig );

export default store;
