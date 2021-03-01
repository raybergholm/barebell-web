import React from "react"
import { connect } from "react-redux"

import HomeView from "./HomeView"

const HomeContainer = connect(
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
    return <HomeView {...this.props} />
  }
})

export default HomeContainer