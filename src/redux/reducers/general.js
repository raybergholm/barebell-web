import actionTypes from "../actionTypes/general"

const initialState = {
  initialized: false,
  currentView: "home",

  quickLinks: [],
  archiveLinks: [],
  tags: [],
  config: {}
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
      return Object.assign({}, state, {
        currentView: action.payload
      })
    default:
      return state
  }
}

export default reducer