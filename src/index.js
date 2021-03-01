import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"

import "./css/index.css"

import AppRouter from "./AppRouter"
import registerServiceWorker from "./registerServiceWorker"

import store from "./redux/store"

document.store = store

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
)

registerServiceWorker()
