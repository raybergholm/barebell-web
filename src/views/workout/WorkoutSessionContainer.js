import React from "react"
import { connect } from "react-redux"

import WorkoutSessionView from "./WorkoutSessionView"

const WorkoutSessionContainer = connect(
  (state) => ({
    dummyProp1: "",
    dummyProp2: ""
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