import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"

import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import IconButton from "@material-ui/core/IconButton"
import SyncIcon from "@material-ui/icons/Sync"

import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"

import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%"
    // width: "100%"
  },
  cardSection: {
    minWidth: 275
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}))

const OptionsView = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"> 
        <Card className={classes.cardSection}>
          Sync local cache
          <CardActions>
            <IconButton aria-label="sync cache">
              <SyncIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>General settings</Typography>
          <Typography className={classes.secondaryHeading}>I am an accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </Container>
  )
}

export default OptionsView
