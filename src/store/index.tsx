import { combineReducers, createStore } from "redux";
import userRecucer from "./User/reducer";


const reducers = combineReducers({
    user: userRecucer
})

const store = createStore(reducers)