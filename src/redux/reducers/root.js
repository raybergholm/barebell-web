import { combineReducers } from "redux"

import baseReducer  from "./base"
import generalReducer from "./general"

const allReducers = {
  // throw in all the imported reducers
  base: baseReducer,
  general: generalReducer
}

const rootReducer = combineReducers(allReducers)

export default rootReducer