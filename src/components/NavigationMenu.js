import React from "react"
import PropTypes from "prop-types" 

import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import HomeIcon from "@material-ui/icons/Home"
import MenuBookIcon from "@material-ui/icons/MenuBook"
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter"
import AssessmentIcon from "@material-ui/icons/Assessment"
import MenuIcon from "@material-ui/icons/Menu"

import { VIEW_LIST } from "../models/appModels"

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
    <BottomNavigationAction label={textLabels.Home} key={VIEW_LIST.Home} value={VIEW_LIST.Home} icon={<HomeIcon />} />
    <BottomNavigationAction label={textLabels.Programs} key={VIEW_LIST.Programs} value={VIEW_LIST.Programs} icon={<MenuBookIcon />} />
    <BottomNavigationAction label={textLabels.Workout} key={VIEW_LIST.Workout} value={VIEW_LIST.Workout} icon={<FitnessCenterIcon />} />
    <BottomNavigationAction label={textLabels.Stats} key={VIEW_LIST.Stats} value={VIEW_LIST.Stats} icon={<AssessmentIcon />} />
    <BottomNavigationAction label={textLabels.More} key={VIEW_LIST.Options} value={VIEW_LIST.Options} icon={<MenuIcon />} />
  </BottomNavigation>
)

NavigationMenu.propTypes = {
  actions: PropTypes.object.isRequired,
  currentView: PropTypes.string,
  textLabels: PropTypes.object.isRequired
}

export default NavigationMenu



