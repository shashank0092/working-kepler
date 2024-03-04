import { createStore,combineReducers,applyMiddleware,compose } from "redux";
import keplerGlReducer from "@kepler.gl/reducers"
import {taskMiddleware} from "react-palm/tasks"

const intialState={}

export const enhancers=[applyMiddleware(taskMiddleware)]
const reducers=combineReducers({
    keplerGl:keplerGlReducer
})

export default createStore(
    reducers,
    {},
    applyMiddleware(taskMiddleware)
)