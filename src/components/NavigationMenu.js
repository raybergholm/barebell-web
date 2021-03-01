import React from "react"
import PropTypes from "prop-types" 

import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import HomeIcon from "@material-ui/icons/Home"
import MenuBookIcon from "@material-ui/icons/MenuBook"
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter"
import AssessmentIcon from "@material-ui/icons/Assessment"
import MenuIcon from "@material-ui/icons/Menu"

const stickToBottom = {
  // width: "100%",
  // position: "fixed",
  // margin: "auto",
  // bottom: 0
}

const NavigationMenu = ({ actions, currentView, textLabels }) => (
  <BottomNavigation
    value={currentView}
    onChange={(event, newValue) => {
      actions.changeView(newValue)
    }}
    showLabels
    style={stickToBottom}
  >
    <BottomNavigationAction label={textLabels.Home} value="home" icon={<HomeIcon />} />
    <BottomNavigationAction label={textLabels.Programs} value="programs" icon={<MenuBookIcon />} />
    <BottomNavigationAction label={textLabels.Workout} value="workout" icon={<FitnessCenterIcon />} />
    <BottomNavigationAction label={textLabels.Stats} value="stats" icon={<AssessmentIcon />} />
    <BottomNavigationAction label={textLabels.More} value="more" icon={<MenuIcon />} />
  </BottomNavigation>
)

NavigationMenu.propTypes = {
  actions: PropTypes.object.isRequired,
  currentView: PropTypes.string,
  textLabels: PropTypes.object.isRequired
}

export default NavigationMenu



