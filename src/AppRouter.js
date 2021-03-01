import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"

import HomeContainer from "./views/home/HomeContainer"
import ProgramContainer from "./views/programs/ProgramContainer"
import WorkoutSessionContainer from "./views/workout/WorkoutSessionContainer"
import StatsContainer from "./views/stats/StatsContainer"
import OptionsContainer from "./views/options/OptionsContainer"


const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/home" component={HomeContainer} />
      <Route exact path="/programs" component={ProgramContainer} />
      <Route exact path="/workout" component={WorkoutSessionContainer} />
      <Route exact path="/stats" component={StatsContainer} />
      <Route exact path="/more" component={OptionsContainer} />
      <Redirect exact path="/" to="/home" />
    </Switch>
  </BrowserRouter>
)

export default AppRouter