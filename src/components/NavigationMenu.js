import React from "react"
import PropTypes from "prop-types" 

import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import HomeIcon from "@material-ui/icons/Home"
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter"
import TimelineIcon from "@material-ui/icons/Timeline"
import MenuIcon from "@material-ui/icons/Menu"

const stickToBottom = {
  width: "100%",
  position: "fixed",
  margin: "auto",
  bottom: 0
}

const NavigationMenu = ({ actions, value, textLabels }) => (
  <BottomNavigation
    value={value}
    onChange={(event, newValue) => {
      actions.changeView(newValue)
    }}
    showLabels
    style={stickToBottom}
  >
    <BottomNavigationAction label={textLabels.Home} value="home" icon={<HomeIcon />} />
    <BottomNavigationAction label={textLabels.Workout} value="workout" icon={<FitnessCenterIcon />} />
    <BottomNavigationAction label={textLabels.Stats} value="stats" icon={<TimelineIcon />} />
    <BottomNavigationAction label={textLabels.More} value="more" icon={<MenuIcon />} />
  </BottomNavigation>
)

NavigationMenu.propTypes = {
  actions: PropTypes.object.isRequired,
  textLabels: PropTypes.object.isRequired,
  value: PropTypes.string
}

export default NavigationMenu



