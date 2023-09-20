import {compose, applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import { FormPageReducer } from "./formPage-reducer";
import { UserHomeReducer } from "./userHome-reducer";
import { TableUsersObjectReducer } from "./tableUsersObject-reducer";
import { UserObjectReducer } from './userObject-reducer';
import { HomeAReducer } from "./reduxA/homeA-reducer";
import { UserObjectAReducer } from "./reduxA/userObjectA-reducer";
import { AddObjectAReducer } from "./reduxA/AddObjectA-reducer";





export const reducers = combineReducers({ 
	FormPageReducer,
	UserHomeReducer,
	TableUsersObjectReducer,
	UserObjectReducer,
	HomeAReducer,
	UserObjectAReducer,
	AddObjectAReducer
	
	
});

let store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)
	,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;