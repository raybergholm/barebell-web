import { createStore, applyMiddleware, compose } from "redux"

// import loggerMiddleware from "./middleware/loggerMiddleware"
import sagaMiddleware, { runSaga } from "./middleware/sagaMiddleware"

import rootReducer from "./reducers/root"

import rootSaga from "./sagas/root"

const middleware = [
  // loggerMiddleware,
  sagaMiddleware
]

const enhancer = compose(
  applyMiddleware(...middleware)
)

// create the store
const store = createStore(
  rootReducer,
  enhancer
)

// create the store
// const store = createStore(
//   rootReducer,
//   applyMiddleware(sagaMiddleware)
// )


runSaga(rootSaga)

export default store