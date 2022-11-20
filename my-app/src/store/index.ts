import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {TypedUseSelectorHook, useSelector} from "react-redux";

import createSagaMiddleware from 'redux-saga'
import {authReducer} from "./authReducer/authReducer";
import {signUpSaga} from "./authReducer/saga";


export const rootReducer = combineReducers({

    authReducer
})

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
))

sagaMiddleware.run(signUpSaga)