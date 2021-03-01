import React from "react"
import { connect } from "react-redux"

import StatsView from "./StatsView"

const StatsContainer = connect(
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
    return <StatsView {...this.props} />
  }
})

export default StatsContainer