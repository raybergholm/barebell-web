import actionTypes from "../actionTypes/workout"

const actionCreators = {
  addNewExercise: () => ({
    type: actionTypes.AddNewExercise
  }),
  addNewSet: (index) => ({
    type: actionTypes.AddNewSet,
    payload: {
      index
    }
  }),
  setExerciseType: (index, id) => ({
    type: actionTypes.SetExerciseType,
    payload: {
      index,
      id
    }
  }),
  setRep: (index, amount) => ({
    type: actionTypes.SetRep,
    payload: {
      index,
      amount
    }
  })
}

export default actionCreators