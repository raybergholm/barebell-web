export const Exercise = (exerciseId=null, sets=[]) => ({
  exerciseId,
  sets
})

export const WorkoutSet = (weight=null, reps=null) => ({
  weight,
  reps
})
