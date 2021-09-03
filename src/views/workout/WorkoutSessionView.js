import React from "react"
import PropTypes from "prop-types"

import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"

import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import IconButton from "@material-ui/core/IconButton"
import AddCircleIcon from "@material-ui/icons/AddCircle"

import FormControl from "@material-ui/core/FormControl"
import FormHelperText from "@material-ui/core/FormHelperText"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import TextField from "@material-ui/core/TextField"
import Select from "@material-ui/core/Select"

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    width: "100%"
  }
}))

const Topbar = (classes) => {
  <Card className={classes.cardSection}>
    Add set
    <CardActions>
      <IconButton aria-label="add set">
        <AddCircleIcon />
      </IconButton>
    </CardActions>
  </Card>
}

const WorkoutEntry = ({ classes, exerciseName, exerciseList }) => (
  <FormControl className={classes.setContainer}>
    <Select
      labelId="demo-simple-select-placeholder-label-label"
      id="demo-simple-select-placeholder-label"
      value={exerciseName}
      displayEmpty
      className={classes.selectEmpty}
    >
      {exerciseList.map((entry) =>
        <MenuItem key={entry} value={entry}>{entry}</MenuItem>
      )}
    </Select>
  </FormControl>
)

const WorkoutSessionView = ({ exercises, activeWorkout }) => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch">
        <Topbar classes />
        {activeWorkout.map(({ selectedExercise, sets }, index) =>
          <WorkoutEntry key={index} classes exerciseList={exercises} selectedExercise={selectedExercise} sets={sets} />
        )}
      </Grid>
    </Container>
  )
}

WorkoutSessionView.propTypes = {
  activeWorkout: PropTypes.object.isRequired,
  exercises: PropTypes.array.isRequired
}

Topbar.propTypes = {
  classes: PropTypes.object.isRequired
}

WorkoutEntry.propTypes = {
  classes: PropTypes.object.isRequired,
  exerciseList: PropTypes.array.isRequired,
  exerciseName: PropTypes.string
}

export default WorkoutSessionView
