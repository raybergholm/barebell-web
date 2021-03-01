import actionTypes from "../actionTypes/general"

import { VIEW_LIST } from "../../models/appModels"

const initialState = {
  initialized: false,
  currentView: VIEW_LIST.Home,
  cache: null,
  cacheSaved: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LoadedMetadata: 
      return Object.assign({}, state, action.payload)
    case actionTypes.InitializeEnd:
      return Object.assign({}, state, {
        initialized: true
      })
    case actionTypes.ChangeView:
      console.log(`change view payload: ${action.payload.newView}`)
      // window.location.href = `/${action.payload.newView}`
      return Object.assign({}, state, {
        currentView: action.payload.newView
      })
    case actionTypes.LoadedCache:
      console.log("loaded cache, adding to store", action.payload.cache)
      return Object.assign({}, state, {
        cache: action.payload.cache
      })
    case actionTypes.SavedCache:
      return Object.assign({}, state, {
        cacheSaved: true
      })
    default:
      return state
  }
}

export default reducer