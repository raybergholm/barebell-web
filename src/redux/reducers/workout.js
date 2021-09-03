import actionTypes from "../actionTypes/workout"

import { Exercise, WorkoutSet } from "../../models/workoutModel"

// REAL VERSION
// const initialState = {
//   metadata: {},
//   exercises: []
//   activeWorkout: []
// }

// DEV VERSION TO POPULATE SOMETHING
const initialState = {
  metadata: {},
  exercises: [
    {
      id: 0,
      name: "Barbell Squat"
    },
    {
      id: 1,
      name: "Deadlift"
    },
    {
      id: 2,
      name: "Bench Press"
    },
    {
      id: 3,
      name: "Overhead Press"
    },
    {
      id: 4,
      name: "Pull up"
    }
  ],
  activeWorkout: [
    Exercise(2, [
      WorkoutSet(90, 5),
      WorkoutSet(90, 5),
      WorkoutSet(90, 5),
      WorkoutSet(90, 5),
      WorkoutSet(90, 5)
    ]),
    Exercise(3, [
      WorkoutSet(60, 5),
      WorkoutSet(60, 5),
      WorkoutSet(60, 5),
      WorkoutSet(60, 3)
    ]),
    Exercise()
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AddNewExercise:
      return Object.assign({}, state, {
        activeWorkout: state.activeWorkout.concat([Exercise()])
      })
    case actionTypes.AddNewWorkoutSet:
      return Object.assign({}, state, {
        activeWorkout: state.activeWorkout[action.payload.index].concat([WorkoutSet()])
      })
    case actionTypes.SetExerciseType:
      return Object.assign({}, state, {
        activeWorkout: state.activeWorkout[action.payload.index].id = action.payload.id
      })
    case actionTypes.SetRep:
      return Object.assign({}, state, {

      })

    


    // case actionTypes.set
    default:
      return state
  }
}

export default reducer