import React from "react"
import PropTypes from "prop-types"

import { Container } from '@material-ui/core'

import AppRouter from "../AppRouter"
import NavigationMenu from "../components/NavigationMenu"

import TEXT_LABELS from "../l10n/en" // TODO: actual i18n

const AppView = ({ actions, currentView }) => (
  <Container>
    <AppRouter />
    <NavigationMenu value={currentView} actions={actions} textLabels={TEXT_LABELS.NavLabels} />
  </Container>
)

AppView.propTypes = {
  actions: PropTypes.object.isRequired,
  currentView: PropTypes.string
}

export default AppView