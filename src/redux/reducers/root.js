import { combineReducers } from "redux"

import baseReducer  from "./base"
import generalReducer from "./general"
import programsReducer from "./programs"
import workoutReducer from "./workout"

const allReducers = {
  // throw in all the imported reducers
  base: baseReducer,
  general: generalReducer,
  programs: programsReducer,
  workout: workoutReducer
}

const rootReducer = combineReducers(allReducers)

export default rootReducer