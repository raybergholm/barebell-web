import actionTypes from "../actionTypes/programs"

const actionCreators = {
  changeProgram: (newProgram) => ({
    type: actionTypes.ChangeProgram,
    payload: {
      newProgram
    }
  }),
}

export default actionCreators