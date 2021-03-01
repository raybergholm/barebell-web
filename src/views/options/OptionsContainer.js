import React from "react"
import { connect } from "react-redux"

import OptionsView from "./OptionsView"

const OptionsContainer = connect(
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
    return <OptionsView {...this.props} />
  }
})

export default OptionsContainer