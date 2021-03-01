import actionTypes from "../actionTypes/programs"

const initialState = {
  currentProgram: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ChangeProgram:
      return Object.assign({}, state, {
        currentView: action.payload.newProgram
      })
    default:
      return state
  }
}

export default reducer