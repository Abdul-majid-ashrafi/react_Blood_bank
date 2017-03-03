import { createStore,combineReducers } from 'redux'
// import logger from 'redux-logger'

import AuthReducer from './reducer/authReducer'
import UserReducer from './reducer/userReducer'

export const rootReducer = createStore(
    combineReducers({
        AuthReducer,
        UserReducer
    })
    //, {},
    // applyMiddleware(logger())
)
export let store = rootReducer;