import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    width: "100%"
  }
}))

const StatsView = () => { 
  const classes = useStyles()
  
  return (
    <Container className={classes.root}>
      <div>
        <p>THIS IS THE STATS PAGE</p>
      </div>
    </Container>
  )
}

export default StatsView
