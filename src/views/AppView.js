import React from "react"
import PropTypes from "prop-types"

import Container from "@material-ui/core/Container"

import NavigationMenu from "../components/NavigationMenu"

import HomeContainer from "./home/HomeContainer"
import ProgramContainer from "./programs/ProgramContainer"
import WorkoutSessionContainer from "./workout/WorkoutSessionContainer"
import StatsContainer from "./stats/StatsContainer"
import OptionsContainer from "./options/OptionsContainer"

import { VIEW_LIST } from "../models/appModels"
import TEXT_LABELS from "../l10n/en" // TODO: actual i18n

const showView = (currentView) => {
  switch (currentView) {
    case VIEW_LIST.Home:
      return (<HomeContainer />)
    case VIEW_LIST.Programs:
      return (<ProgramContainer />)
    case VIEW_LIST.Workout:
      return (<WorkoutSessionContainer />)
    case VIEW_LIST.Stats:
      return (<StatsContainer />)
    case VIEW_LIST.Options:
      return (<OptionsContainer />)
    default:
      return null
  }
}

const AppView = ({ actions, currentView }) => (
  <Container>
    {showView(currentView)}
    <NavigationMenu currentView={currentView} actions={actions} textLabels={TEXT_LABELS.NavLabels} />
  </Container>
)

AppView.propTypes = {
  actions: PropTypes.object.isRequired,
  currentView: PropTypes.string
}

export default AppView
