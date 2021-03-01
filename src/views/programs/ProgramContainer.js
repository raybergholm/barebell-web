import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import generalActionCreators from "../../redux/actionCreators/general"

import ProgramView from "./ProgramView"

const ProgramContainer = connect(
  (state) => ({
    currentProgram: state?.programs?.currentProgram, 
    programsList: state?.general?.cache?.programs
  }),
  (dispatch) => {
    const combinedActionCreators = Object.assign({}, generalActionCreators)
    const boundActions = bindActionCreators(combinedActionCreators, dispatch)
    return {
      ...boundActions
    }
  },
  (state, dispatch, own) => ({
    ...state,
    ...own,
    actions: {
      ...dispatch
    }
  })
)(class extends React.Component {
  componentDidMount() {

  }
  render() {
    return <ProgramView {...this.props} />
  }
})

export default ProgramContainer