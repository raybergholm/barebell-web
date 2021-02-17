import { call, put, takeEvery } from "redux-saga/effects"

import baseActionCreators from "../actionCreators/base"
import generalActionCreators from "../actionCreators/general"

import generalActionTypes from "../actionTypes/general"

import dataApi from "../../scripts/dataApi"

const api = dataApi()

export function* initialize() {
  yield put({
    type: generalActionTypes.InitializeEnd
  })
}

export function* endInit() {
  console.log("initialization sequence finished")
  yield true
}


export default function* rootSagas() {
  yield takeEvery(generalActionTypes.InitializeStart, initialize)
  yield takeEvery(generalActionTypes.InitializeEnd, endInit)
}