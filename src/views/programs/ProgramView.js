import React from "react"
import PropTypes from "prop-types" 

import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import Select from "@material-ui/core/Select"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}))

const ProgramView = ({ actions, currentProgram, programsList }) => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Select
          native
          value={currentProgram}
          onChange={actions.changeProgram}
          inputProps={{
            name: "age",
            id: "age-native-simple",
          }}
        >
          {programsList && programsList.map((entry) => <option key={entry._id} value={entry._id}>{entry.name}</option>)}
        </Select>
      </FormControl>
    </Container>
  )
}

ProgramView.propTypes = {
  actions: PropTypes.object.isRequired,
  currentProgram: PropTypes.number.isRequired,
  programsList: PropTypes.array
}

export default ProgramView
