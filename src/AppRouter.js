import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"

import AppContainer from "./views/AppContainer"


const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={AppContainer} />
      <Redirect path="/*" to="/" />
    </Switch>
  </BrowserRouter>
)

export default AppRouter