import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import baseActionCreators from "../redux/actionCreators/base"
import generalActionCreators from "../redux/actionCreators/general"
// import sidebarActionCreators from "../redux/actionCreators/sidebar"

import AppView from "./AppView"

const createView = (ViewComponent, hooks) => class extends React.Component {
  componentDidMount() {
    hooks.didMount && hooks.didMount(this.props)
  }
  render() {
    return <ViewComponent {...this.props} />
  }
}

const hooks = {
  didMount: ({ initialized, actions }) => {
    if (!initialized) {
      actions.initialize()
    }
  }
}

const AppContainer = connect(
  (state) => ({
    flags: state.base.flags,
    errors: state.base.errors,
    initialized: state.general.initialized,
    currentView: state.general.currentView,
    quickLinks: state.general.quickLinks,
    archiveLinks: state.general.archiveLinks,
    tags: state.general.tags,
  }),
  (dispatch) => {
    const combinedActionCreators = Object.assign({}, baseActionCreators, generalActionCreators)
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
)(createView(AppView, hooks))

export default AppContainer