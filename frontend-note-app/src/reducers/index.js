import { combineReducers } from 'redux'
import noteReducer from './noteReducer';
import userReducer from './userReducer';

export default function createRootReducer() {

    const noteApp = combineReducers({
        noteReducer,
        userReducer
    })

    return noteApp;
}
