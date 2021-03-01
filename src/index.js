import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"

import "./css/index.css"

import AppContainer from "./views/AppContainer"
import registerServiceWorker from "./registerServiceWorker"

import store from "./redux/store"

document.store = store

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
)

registerServiceWorker()
