import { combineReducers } from "redux"

import baseReducer  from "./base"
import generalReducer from "./general"
import programsReducer from "./programs"

const allReducers = {
  // throw in all the imported reducers
  base: baseReducer,
  general: generalReducer,
  programs: programsReducer
}

const rootReducer = combineReducers(allReducers)

export default rootReducer