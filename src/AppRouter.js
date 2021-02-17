import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"

import HomeContainer from "./views/HomeContainer"
import WorkoutSessionContainer from "./views/WorkoutSessionContainer"
import StatsContainer from "./views/StatsContainer"
import OptionsContainer from "./views/OptionsContainer"


const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/workout" component={WorkoutSessionContainer} />
      <Route exact path="/stats" component={StatsContainer} />
      <Route exact path="/options" component={OptionsContainer} />
      <Redirect path="/home/*" to="/" />
    </Switch>
  </BrowserRouter>
)

export default AppRouter