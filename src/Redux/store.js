import {reducer as AuthReducer} from "./AuthReducer/reducer";

import {reducer as AppReducer} from "./AppReducer/reducer";

import {legacy_createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"


const rootReducer=combineReducers({AppReducer,AuthReducer});

const store=legacy_createStore(rootReducer,applyMiddleware(thunk));

export {store}