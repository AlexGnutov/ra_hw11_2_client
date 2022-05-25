import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import serviceListReducer from "../reducers/service-list-reducer";
import editFormReducer from "../reducers/edit-form-reducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
    servicesList: serviceListReducer,
    editForm: editFormReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)),
);

export default store;
