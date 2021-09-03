import React from "react"
import { connect } from "react-redux"

import WorkoutSessionView from "./WorkoutSessionView"

const WorkoutSessionContainer = connect(
  (state) => ({
    flags: state.workout.flags,
    errors: state.workout.errors,
    exercises: state.workout.exercises,
    activeWorkout: state.workout.activeWorkout
  }),
  (dispatch, ownProps) => ({
  })
)(class extends React.Component {
  componentDidMount() {

  }
  render() {
    return <WorkoutSessionView {...this.props} />
  }
})

export default WorkoutSessionContainer