import { createLogger } from "redux-logger"

// log actions in development mode
const loggerMiddleware = createLogger({
  collapsed: true,
  // custom colors
  colors: {
    title: () => "inherit",
    prevState: () => "#9E9E9E",
    action: () => "#03A9F4",
    nextState: () => "#4CAF50",
    error: () => "#F20404"
  },
  // only log in development mode
  predicate: () => process.env.NODE_ENV === "development",

  // transform immutable state to plain objects
  stateTransformer: (state) => state.toJS()
})

export default loggerMiddleware